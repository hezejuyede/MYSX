<template>
  <div class="PayPage">
    <div class="noLogin" v-show="login !=='1'">
      <img src="../../common/image/logo.png" alt="">
      <p>您好，登录才能购买</p>
      <p @click="goToLogin">点击前往登录页</p>
    </div>
    <div v-show="login==='1'" id="PayPage">
      <div class="PayPage-top">
        <i class="iconfont icon-left-trangle" @click="$router.go(-1)"></i>
        <span>支付订单</span>
      </div>
      <div class="PayPage-order">
        <div class="order-template" v-for="(item,index) in order">
          <div class="order-template-left">
            <img :src="item.img" alt="" class="">
          </div>
          <div class="order-template-right">
            <div class="order-template-right-top">
              <span class="">￥{{item.price}}</span>
              <i class="iconfont icon-guanbi"></i>
              <span>{{item.num}}个</span>
            </div>
            <div class="order-template-right-bottom">{{item.title}}</div>
          </div>


        </div>


      </div>
      <div class="PayPage-zfState">
        <div class="wxzf">
          <div class="wxzfl-left">
            <i class="iconfont icon-weixinzhifu"></i>
          </div>
          <div class="wxzfl-center">
            微信支付
          </div>
          <div class="wxzfl-right" @click="selectedWx">
            <i :class="{'iconfont icon-xuanze1':iswx,'iconfont icon-xuanze':!iswx}"></i>
          </div>
        </div>
        <div class="zfbzf">
          <div class="zfbzf-left">
            <i class="iconfont icon-zhifubao1"></i>
          </div>
          <div class="zfbzf-center">
            <span>支付宝支付</span>
          </div>
          <div class="zfbzf-right" @click="selectedZfb">
            <i :class="{'iconfont icon-xuanze1':iszfb,'iconfont icon-xuanze':!iszfb}"></i>
          </div>
        </div>
      </div>
      <div class="PayPage-TJ">
        确认支付￥{{price}}
      </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    name: 'PayPage',
    data() {
      return{
        totalPrice:'',
        login:'',
        order:[],
        price:'',
        iszfb:true,
        iswx:true



      }
    },
    created(){
      this._getZfInfo()

    },

    methods: {
      _getZfInfo(){
        if (sessionStorage.getItem("userInfo") === null) {
          console.log("用户还没有登录")
        }
        else {
          let UserInfo = sessionStorage.getItem("userInfo");
          UserInfo = JSON.parse(UserInfo);
          this.login = UserInfo.state;

          axios.post("/api/getUserOrderState", {
            num: this.$route.query.Num
          })
            .then((res) => {
              this.order = res.data[0].orderDetail;
              this.price = res.data[0].orderAmount;

            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      goToLogin(){
        this.$router.push({path: "/Login"})
      },
      selectedZfb() {
        this.iswx = true;
        this.iszfb = false;
      },
      selectedWx(){
        this.iszfb = true;
        this.iswx = false;
      }



    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";
  .PayPage{
    width: 100%;
    height: 100%;
    .noLogin{
      width: 100%;
      height: 100%;
      background-color: @color-F0;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }




  #PayPage{
    width: 100%;
    height: 100%;
    background-color: @color-F0;
    .PayPage-top {
      height: 50px;
      background-color: @color-white;
      font-size: @font-size-large;
      text-align: center;
      line-height: 50px;
      position: relative;
      .icon-left-trangle {
        position: absolute;
        left: 20px;
        font-size: @font-size-large-x;
      }

    }

    .order-template {
      height: 100px;
      display: flex;
      margin-bottom: 10px;
      background-color: @color-white;
      border: 1px solid@color-F0;
      .order-template-left{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }

      }
      .order-template-right{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: @font-size-large;
      }

    }

    .PayPage-zfState {
      .wxzf {
        height: 60px;
        display: flex;
        align-items: center;
        background-color: @color-white;
        border: 1px solid @color-F0;
        .wxzfl-left {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-weixinzhifu {
            font-size: @font-size-large-xxxx;
            color: @color-green;
          }
        }
        .wxzfl-center {
          flex: 6;
          display: flex;
          align-items: center;
          font-size: @font-size-large;
        }
        .wxzfl-right {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-xuanze1 {
            font-size: @font-size-large-xxxxx;
          }
          .icon-xuanze {
            font-size: @font-size-large-xxxxx;
            color: @color-green;
          }
        }

      }
      .zfbzf {
        height: 60px;
        display: flex;
        align-items: center;
        background-color: @color-white;
        border: 1px solid @color-F0;
        .zfbzf-left {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-zhifubao1 {
            font-size: @font-size-large-xxx;
            color: @color-blue;
          }

        }
        .zfbzf-center {
          flex: 6;
          display: flex;
          align-items: center;
          font-size: @font-size-large;
        }
        .zfbzf-right {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-xuanze1 {
            font-size: @font-size-large-xxxxx;
          }
          .icon-xuanze {
            font-size: @font-size-large-xxxxx;
            color: @color-green;
          }
        }

      }
    }
    .PayPage-TJ {
      position: fixed;
      bottom: 0;
      height: 50px;
      max-width: 640px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-green;
      color: @color-white;
      font-size: @font-size-large-xx;

    }


  }

</style>
