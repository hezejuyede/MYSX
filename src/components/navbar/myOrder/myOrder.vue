<template>
  <div class="myOrderState">
    <div class="noLogin" v-if="login !=='1'">
      <img src="../../../common/image/logo.png" alt="">
      <p>您好，登录才查看用户信息 </p>
      <p @click="goToLogin">点击前往登录页</p>
    </div>
    <div v-if="login =='1'" id="newRec">
      <navheader></navheader>
      <search-navbar></search-navbar>
      <div class="newRec-content">
        <div class="clearfix newRec-content-top">
          <div class="iconStyle"
               @click="tab(index,item.text)"
               :class="{'border':index===num}"
               v-for="(item,index) in icon">
            <span>{{item.text}}</span>
            <i :class="item.font"></i>

          </div>
        </div>
        <div class="newRec-content-bottom">
          <div class="bottom-div"
               v-show="index===num"
               v-for="(item,index) in bottom">
            <div class="bottom-div-noOrder"
                 v-show="orderState.length===0">
              暂无订单

            </div>

            <div
              class="bottom-div-product"
              v-show="orderState.length>0"
              v-for="(item,index) in orderState">
              <div class="product-left">
                <div class="product-left-template" v-for="(item,index) in item">
                  <div class="product-left-template-left">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="product-left-template-right">
                    <div class="">{{item.title}}</div>
                    <div class="">价格：{{item.price}}元</div>
                    <div class="">数量：{{item.num}}</div>
                  </div>
                </div>
              </div>
              <div class="product-right">
                <p class="">点击操作</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <modal
        :msg="message"
        :isHideModal="HideModal">
      </modal>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Navheader from "../../../bese/navheader/navheader.vue";
  import YcNavbar from "../../index/navbar/navbar.vue";
  import SearchNavbar from "../../../bese/searchNavbar/seachNavbar.vue";
  import {addCart} from '../../../api/config'
  import Modal from "../../../bese/modal/modal.vue";
  import axios from 'axios';



  export default {
    components: {
      Modal,
      SearchNavbar,
      YcNavbar,
      Navheader
    },
    name: 'newRec',
    data() {
      return {
        num: 0,
        message: "",
        login: '',
        HideModal: true,
        icon:[
          {
            text:'未付款',
            font:'iconfont icon-weifukuan'
          },
          {
            text:'待发货',
            font:'iconfont icon-dengdai-copy'
          },
          {
            text:'已发货',
            font:'iconfont icon-ccgl-yundanguanli-1'
          },
          {
            text:'待退货',
            font:'iconfont icon-ccgl-tuihuosunyi-7'
          },
          {
            text:'待退款',
            font:'iconfont icon-tuihuotuikuan'
          },
          {
            text:'未评价',
            font:'iconfont icon-pingjia-copy'
          },
          {
            text:'已评价',
            font:'iconfont icon-yijingpinglun'
          },
          {
            text:'已关闭',
            font:'iconfont icon-yijingguanbi'
          }
        ],
        bottom:[
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        orderState:[],

      }
    },
    computed: {},
    created() {
      this._getUserCollect();
      this._getUserInfo()
    },
    methods: {
      _getUserCollect() {
        if (sessionStorage.getItem("userInfo") === null) {
          console.log("用户还没有登录")
        }
        else {
          let UserInfo = sessionStorage.getItem("userInfo");
          UserInfo = JSON.parse(UserInfo);
          this.login = UserInfo.state;
        }
      },
      _getUserInfo() {
        if (this.login === '1') {
          axios.get("/api/userOrderState", {
            params: {
              select: "未付款"
            }
          })
            .then((res) => {
              this.orderState = res.data;
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      tab(index,text) {
        this.num = index;

        axios.get("/api/userOrderState", {
          params: {
            select: text
          }
        })
          .then((res) => {
            this.orderState = res.data;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      goToLogin() {
        this.$router.push({path: "/Login"})
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";
  .myOrderState {
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
  .newRec-content {
    .newRec-content-top {
      .border {
        background-color: @color-F0;
      }
      .iconStyle {
        float: left;
        width: 25%;
        display: flex;
        height: 80px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px @color-blue;
        span {
          font-size: @font-size-large;
          margin-bottom: 10px;
          color: @color-green;
        }

        .icon-weifukuan {
          font-size: @font-size-large-xxxxx;
          color: #d93f30;

        }
        .icon-dengdai-copy {
          font-size: @font-size-large-xxxxx;
          color: #ffcd32;

        }
        .icon-ccgl-yundanguanli-1 {
          font-size: @font-size-large-xxxxx;
          color: blueviolet;

        }
        .icon-ccgl-tuihuosunyi-7 {
          font-size: @font-size-large-xxxxx;
          color: darkturquoise;

        }
        .icon-tuihuotuikuan {
          font-size: @font-size-large-xxxxx;
          color: saddlebrown;

        }
        .icon-pingjia-copy {
          font-size: @font-size-large-xxxxx;
          color: cornflowerblue;

        }
        .icon-yijingpinglun {
          font-size: @font-size-large-xxxxx;
          color: violet;

        }
        .icon-yijingguanbi {
          font-size: @font-size-large-xxxxx;
          color: purple;

        }

      }
    }
    .bottom-div {
      .bottom-div-noOrder {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: @font-size-large;
        color: @color-green;
      }
      .bottom-div-product {
        width: 95%;
        margin: 5px auto;
        display: flex;
        border: 1px solid @color-F0;
        .product-left {
          width: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .product-left-template {
            width: 100%;
            display: flex;
            .product-left-template-left {
              flex: 1;
              img {
                width: 80px;
                height: 80px;
              }
            }
            .product-left-template-right {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          }

        }
        .product-right {
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          p{
            width: 95%;
            margin: 0 auto;
            height: 30px;
            background-color: @color-green;
            color: @color-white;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10%;
          }
        }

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


