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
        <i class="iconfont icon-left-trangle" @click="goBack"></i>
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
              <div class="template-info-info-number">数量：{{item.number}}件</div>
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
    <div class="loading-container" v-show="phone.length===0">
      <loading></loading>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import ChangeAddress from '../../components/buyProduct/changeAddress/changeAddress.vue';
  import {getNowTime} from '../../api/config';
  import Loading from '../../bese/loading/loading.vue'

  export default {
    components: {
      ChangeAddress,
      Loading
    },
    name: 'buyProduct',
    data() {
      return {
        shoppingCart: [],
        totalPrice: 0,
        login:'',
        phone:'',
        name:'',
        citys:'',
        cityDetails:'',
        isAddress:true,


      }
    },
    created(){
    /*  this._getUserInfo()*/

      this._getProduct()
    },
    methods: {
      /*  _getUserInfo() {
          if (sessionStorage.getItem("userInfo") === null) {
            console.log("用户还没有登录")
          }
          else {
            let UserInfo = sessionStorage.getItem("userInfo");
            UserInfo = JSON.parse(UserInfo);
            this.login = UserInfo.state;

            axios.post("/api/MobileUserPayment")
              .then((res) => {

                let addressList = res.data.addressList;
                let address  = res.data.addressMr;
                this.shoppingCart = addressList.productlist;
                this.totalPrice = addressList.totalAmount;
                this.name = address.name;
                this.phone = address.phone;
                this.citys = address.citys;
                this.cityDetails = address.cityDetails;

              })
              .catch((err) => {
                console.log(err)
              })
          }
        },*/
      _getProduct() {
        if (sessionStorage.getItem("userInfo") === null) {
          console.log("用户还没有登录")
        }
        else {
          let UserInfo = sessionStorage.getItem("userInfo");
          UserInfo = JSON.parse(UserInfo);
          this.login = UserInfo.state;

          let templete = {
            "id": this.$route.query.id,
            "index": this.$route.query.index,
            "img": this.$route.query.img,
            "title": this.$route.query.title,
            "price": this.$route.query.price,
            "number": this.$route.query.number,
          };
          this.shoppingCart.push(templete);
          this.totalPrice = this.$route.query.price * this.$route.query.number;
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
      goBack() {
        this.$router.push({path: "/"})
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
        let orderInfo = {}


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
