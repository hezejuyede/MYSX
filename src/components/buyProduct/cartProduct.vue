<template>
  <div class="buyProductIndex">
    <change-address
      @showHideAddress="showHideAddress"
      :isAddress="isAddress">
    </change-address>
    <div class="noLogin" v-if="login !=='1'">
      <img src="../../common/image/logo.png" alt="">
      <p>您好，登录才能购买</p>
      <p @click="gotoLogin">点击前往登录页</p>
    </div>
    <div id="buyProduct" v-if="login ==='1'">
      <div class="buyProduct-top">
        <i class="iconfont icon-left-trangle" @click="$router.go(-1)"></i>
        <span>购买宝贝</span>
      </div>
      <div class="buyProduct-product">
        <div class="buyProduct-product-template" v-for="(item,index) in shoppingCart">
          <div class="template-img">
            <img :src="item.img" alt="">
          </div>
          <div class="template-info">
            <div class="template-info-title">
              亿成优生鲜-{{item.title}}
            </div>
            <div class="template-info-info">
              <div class="template-info-info-price">总价:￥{{item.price}}</div>
              <div class="template-info-info-number">数量：{{item.num}}件</div>
            </div>
          </div>
        </div>
      </div>
      <div class="buyProduct-address">
        <div class="buyProduct-address-left">
          收货地址
        </div>
        <div class="buyProduct-address-center">
          <div class="" v-if="phone.length>0">
            <div class="">{{name}}{{phone}}</div>
            <div class="" @click="changeAddress">{{citys}}{{cityDetails}}</div>
          </div>
          <div class="" v-if="phone.length==0">
            <span @click="changeAddress">添加地址</span>
          </div>
        </div>
        <div class="buyProduct-address-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div class="buyProduct-yf">
        <div class="buyProduct-yf-left">运费</div>
        <div class="buyProduct-yf-right">￥0.00</div>
      </div>
      <div class="buyProduct-bottom">
        <div class="buyProduct-bottom-left">
          <span>实付款:</span>
          <span>￥{{totalPrice}}元</span></div>
        <div class="buyProduct-bottom-right" @click="payment">确认</div>
      </div>
    </div>
    <div class="loading-container" v-show="shoppingCart.length===0">
      <loading></loading>
    </div>
    <modal
      :msg="message"
      :isHideModal="HideModal">
    </modal>
  </div>

</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import ChangeAddress from '../../components/buyProduct/changeAddress/changeAddress.vue';
  import {getNowTime} from '../../api/config';
  import Loading from '../../bese/loading/loading.vue'
  import Modal from "../../bese/modal/modal.vue";

  export default {
    components: {
      Modal,
      ChangeAddress,
      Loading
    },
    name: 'buyProduct',
    data() {
      return {
        shoppingCart: [],
        totalPrice: 0,
        login:'',
        username:'',
        phone:'',
        name:'',
        citys:'',
        cityDetails:'',
        isAddress:true,
        message: "",
        HideModal: true,


      }
    },
    created(){

      this._getProduct()
    },
    methods: {
      _getProduct() {
        if (sessionStorage.getItem("userInfo") === null) {
          console.log("用户还没有登录")
        }
        else {
          let UserInfo = sessionStorage.getItem("userInfo");
          UserInfo = JSON.parse(UserInfo);
          this.login = UserInfo.state;
          this.username = UserInfo.username;
          let orderProduct = this.$route.query.productList;
          if (orderProduct[0].img !== undefined) {
            orderProduct = JSON.stringify(orderProduct);
            localStorage.setItem("orderProduct", orderProduct);
          }
          let OrderProduct = localStorage.getItem("orderProduct");
          OrderProduct = JSON.parse(OrderProduct);
          this.shoppingCart = OrderProduct;
          this.totalPrice = this.$route.query.totalAmount;

          axios.post("/api/MobileUserPayment")
            .then((res) => {
              let addressList = res.data.addressList;
              let address = res.data.addressMr;
              this.name = address.name;
              this.phone = address.phone;
              this.citys = address.citys;
              this.cityDetails = address.cityDetails;

            })
            .catch((err) => {
              console.log(err)
            })
        }


      },
      gotoLogin() {
        this.$router.push({path: "/Login"})
      },

      changeAddress() {
        this.isAddress = false;
      },

      showHideAddress(ev) {
        this.isAddress = ev
      },

      payment() {
        //随机生成11位订单号
        let Num = "";
        for (let i = 0; i < 11; i++) {
          Num += Math.floor(Math.random() * 10);
        }
        //获得当前日期
        let time = getNowTime();
        let orderInfo = {
          "orderNumber": Num,
          "time": time,
          "name": this.username,
          "phoneNumber": this.phone,
          "address": this.citys + this.cityDetails,
          "orderState": "未付款",
          "orderStyle": "在线支付",
          "orderAmount": this.totalPrice,
          "orderDetail":  this.shoppingCart
        };
        axios.post("/api/setUserOrderState", {
          orderInfo: orderInfo
        })
          .then((res) => {
            if (res.data === "1") {
              this.message = "订单提交成功";
              this.HideModal = false;
              const that = this;

              function a() {
                that.message = "";
                that.HideModal = true;
                that.$router.push({path: "/PayPage/", query: {Num: Num}})
              }

              setTimeout(a, 2000);
            }
          })
          .catch((err) => {
            console.log(err)
          })
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .buyProductIndex {
    width: 100%;
    height: 100%;
    .noLogin {
      width: 100%;
      height: 100%;
      background-color: @color-F0;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: @font-size-large-xxx;
      justify-content: center;
      img {
        margin-bottom: 50px;
      }
      p {
        margin-bottom: 50px;
      }
    }

  }

  #buyProduct {
    background-color: @color-F0;
    .buyProduct-top {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: @font-size-large;
      position: relative;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      .icon-left-trangle {
        position: absolute;
        top: 0;
        left: 20px;
        font-size: @font-size-large-xxxxx;

      }

    }

    .buyProduct-product-template {
      display: flex;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      margin-bottom: 5px;
      .template-img {
        width: 30%;
        padding-left: 20px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .template-info {
        width: 70%;
        display: flex;
        flex-direction: column;
        .template-info-title {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: @font-size-large;
        }
        .template-info-info {
          flex: 1;
          display: flex;
          align-items: center;
          .template-info-info-price {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: @color-red;
            font-size: @font-size-large;
          }
          .template-info-info-number {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

      }

    }

    .buyProduct-address {
      height: 100px;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      display: flex;
      .buyProduct-address-left {
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: @font-size-large;
        color: @color-background-d;
      }
      .buyProduct-address-center {
        flex: 6;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .buyProduct-address-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }

    .buyProduct-yf {
      height: 60px;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      margin-bottom: 60px;
      .buyProduct-yf-left {
        height: 60px;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        font-size: @font-size-large;
      }
      .buyProduct-yf-right {
        height: 60px;
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        font-size: @font-size-large;
        color: @color-red;
      }
    }

    .buyProduct-bottom {
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: 1px solid @color-background-d;
      .buyProduct-bottom-left {
        float: left;
        width: 65%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        background-color: @color-white;
        span:first-child {
          font-size: @font-size-large;
        }
        span:last-child {
          color: @color-red;
          font-size: @font-size-medium-x;
        }

      }
      .buyProduct-bottom-right {
        float: left;
        width: 35%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: @color-red;
        color: @color-white;
        font-size: 18px;
      }

    }

  }

  .loading-container {
    position: absolute;
    max-width: 640px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
