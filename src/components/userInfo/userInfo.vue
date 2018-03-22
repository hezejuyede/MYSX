<template>
  <div class="buyProductIndex">
    <div class="noLogin" v-if="login !=='1'">
      <img src="../../common/image/logo.png" alt="">
      <p>您好，登录才能购买</p>
      <p @click="gotoLogin">点击前往登录页</p>
    </div>
    <div id="userInfo" v-if="login ==='1'">
      <sz-user-info
        @showHideSzUserInfo="showHideSzUserInfo"
        :isSzUserInfo="isSzUserInfo">
      </sz-user-info>

      <search-navbar></search-navbar>
      <div class="mysx-userInfo">
        <div class="userInfo-top">
          <div class="userInfo-top-top">
            <i class="iconfont icon-xiaoxi2"></i>
            <i class="iconfont icon-shezhi" @click="szUserInfo"></i>
          </div>
          <div class="userInfo-top-bottom">
            <img :src="avatar" alt="" @click="szUserInfo">
            <div class="">
              <p class="" @click="szUserInfo">{{username}}</p>
              <p class="" @click="szUserInfo">个人信息 ></p>
            </div>
          </div>
        </div>
        <div class="userInfo-content">
          <div class="userInfo-content-top">
            <div v-for="(item,index) in navBar"
                 @click="tab(index)"
                 :class="{'border':index===num}">
              <i :class="item.icon"></i>
              <span :class="{'red':index===num}">{{item.text}}</span>
            </div>
          </div>
          <div class="userInfo-content-bottom" v-for="(item,index) in Bottom">
            <div class="bottom-one" v-show="index==0&&index==num">
              <div class="noData" v-if="collect.length===0">
                您暂无收藏
              </div>
              <div class="" v-if="collect.length>0">
                <div class="scTemplate" v-for="(item,index) in collect">
                  <div class="scTemplate-img" @click='goToGoods(index)'>
                    <img :src="item.img">
                  </div>
                  <div class="scTemplate-goods" @click='goToGoods(index)'>
                    <p class="title-text">{{item.title}}</p>
                    <p class="">价格：￥{{item.price}}</p>
                    <p class="">数量：{{item.number}}</p>
                  </div>
                  <div class="scTemplate-cz">
                    <p class="" @click="addCart(index)">加入购物车</p>
                    <p class="" @click="deleteGoods(index)">移除收藏</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-two" v-show="index==1&&index==num">
              <div class="bottom-two-top">
                <div v-for="(item,index) in dpj"
                     :class="{'red':index===num1}"
                     @click="tab1(index)">
                  {{item.text}}
                </div>
              </div>
              <div class="bottom-two-bottom"
                   v-for="(item,index) in twoBottom">
                <div class="bottom-two-bottom-ypj" v-show="index==0&&index==num1">
                  <div class="noData" v-if="ypl.length ===0">
                    没有已评论订单
                  </div>
                  <div class="" v-if="ypl.length >0">
                    <div class="ypj-template" v-for="(item,index) in ypl">
                      <div class="template-img">
                        <img :src="item.img" style="width: 60px;height: 60px">
                      </div>
                      <div class="template-info">
                        <div class="template-info-top">
                          <div class="clearfix template-star">
                            <i class="iconfont icon-xingzhuang60kaobei2"></i>
                            <i class="iconfont icon-xingzhuang60kaobei2"></i>
                            <i class="iconfont icon-xingzhuang60kaobei2"></i>
                            <i class="iconfont icon-xingzhuang60kaobei2"></i>
                            <i class="iconfont icon-xingzhuang60kaobei2"></i>
                          </div>
                          <div class="clearfix template-time">
                            <span>{{yplTime}}</span>
                          </div>
                        </div>
                        <div class="template-content">
                          {{item.pl}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottom-two-bottom-wpj" v-show="index==1&&index==num1">
                  <div class="noData" v-if="ypl.length ===0">
                    没有未评论订单
                  </div>
                  <div class="" v-if="ypl.length >0">
                    <div class="wpj-template" v-for="(item,index) in wpl">
                      <div class="template-img">
                        <img :src="item.img" style="width: 60px;height: 60px">
                      </div>
                      <div class="template-info">
                        <div class="template-info-top">
                          <div class="clearfix template-star">
                            {{item.title}}
                          </div>
                          <div class="clearfix template-time">
                            <span>下单时间：{{wplTime}}</span>
                          </div>
                        </div>
                        <div class="template-content">
                          去评论
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="bottom-three" v-show="index==2&&index==num">
              <div class="">
                <i class="iconfont icon-yue"></i><br>
                <span class="ye">￥{{ye}}</span>
                <p @click="tx">提现</p>
                <p @click="cz">充值</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loading-container" v-show="ye.length===0">
        <loading></loading>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import Loading from '../../bese/loading/loading.vue';
  import SzUserInfo from './szUserInfo/szUserInfo.vue'
  import axios from 'axios';

  export default {
    components: {
      SearchNavbar,
      Loading,
      SzUserInfo
    },
    name: 'userInfo',
    data() {
      return {
        navBar: [
          {icon: "iconfont icon-wujiaoxing", text: "收藏"},
          {icon: "iconfont icon-yijingpinglun", text: "评论"},
          {icon: "iconfont icon-qianbao", text: "钱包"}
        ],
        Bottom: [{}, {}, {}],
        dpj: [{text: '已经评论'}, {text: "待评论"}],
        twoBottom: [{}, {}],
        num: 0,
        num1: 0,


        avatar: '',
        username: '',
        login: '',


        collect: [],
        ypl: [],
        yplTime: '',
        wplTime: '',
        wpl: [],
        info: [],
        ye: '',

        isSzUserInfo:true





      }
    },
    created() {
      this._getUserCollect();
      setTimeout(()=>{
        this. _getUserInfo()
      },2000);
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
          this.avatar = UserInfo.avatar;
          this.username = UserInfo.username;

        }
      },
      _getUserInfo() {
        if (this.login === '1') {
          axios.all([
            axios.post('/api/userOrderPJ'),
            axios.post('/api/userBalance')
          ])
            .then(axios.spread((OrderPJ, Balance) => {
              if (OrderPJ.data.length > 0) {
                let pl = OrderPJ.data;
                let ypl = [];
                let wpl = [];
                for (let i = 0; i < pl.length; i++) {
                  if (pl[i].orderState === "未评价") {
                    wpl.push(pl[i])
                  }
                  else if (pl[i].orderState === "已评价") {
                    ypl.push(pl[i])
                  }
                }
                if (ypl.length > 0) {
                  this.ypl = ypl[0].orderDetail;
                  this.yplTime = ypl[0].orderTime;
                }
                if (wpl.length > 0) {
                  this.wpl = wpl[0].orderDetail;
                  this.wplTime = wpl[0].orderTime;
                }
              }
              this.ye = Balance.data
            }))
            .catch((err) => {
              console.log(err)
            })
        }

      },

      szUserInfo() {
        this.isSzUserInfo = false;
      },
      showHideSzUserInfo(ev) {
        this.isSzUserInfo = ev
      },

      tab(index) {
        this.num = index;
      },
      tab1(index) {
        this.num1 = index;
      },
      goToGoods(index) {
        console.log(index)
      },







      addCart(index) {
        console.log(index)

      },

      deleteGoods(index) {
        this.collect.splice(index, 1);
      },

      gotoLogin() {
        this.$router.push({path: "/Login"})
      },


      tx() {
        alert("1")
      },
      cz() {
        alert("2")
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .buyProductIndex {
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

  #userInfo {
    position: relative;
    z-index: 9;
    .mysx-userInfo {
      .red {
        color: @color-red;
      }
      .userInfo-top {
        height: 130px;
        background-color: rgba(0, 200, 175, 1);
        .userInfo-top-top {
          height: 40px;
          .icon-shezhi {
            float: right;
            font-size: @font-size-large-x;
            margin: 5px 20px;
            color: @color-white;

          }
          .icon-xiaoxi2 {
            float: right;
            font-size: @font-size-large-x;
            margin: 5px 20px;
            color: @color-white;
          }
        }
        .userInfo-top-bottom {
          display: flex;
          padding-left: 50px;
          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;

          }
          div {
            width: 200px;
            height: 80px;
            padding-left: 25px;
            line-height: 40px;
            font-size: @font-size-large;
            color: @color-white;
            a {
              color: @color-white;
            }
          }
        }
      }
      .userInfo-content {
        .userInfo-content-top {
          height: 80px;
          display: flex;
          align-items: center;
          > div {
            height: 80px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: @font-size-large;
            border-bottom: 1px solid @color-F0;
            .icon-wujiaoxing {
              font-size: @font-size-large-xx;
              color: @color-red;
            }
            .icon-yijingpinglun {
              font-size: @font-size-large-xx;
              color: @color-green;
            }
            .icon-qianbao {
              font-size: @font-size-large-xx;
              color: @color-theme;
            }

          }
          .border {
            background-color: @color-F0;
          }
        }
        .userInfo-content-bottom {
          .noData{
            width: 95%;
            margin: 10px auto;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: @font-size-large;
            color: @color-red;
          }
          .bottom-one {
            .scTemplate {
              display: flex;
              width: 95%;
              margin: 10px auto;
              height: 80px;
              border: 1px solid @color-F0;
              position: relative;
              .scTemplate-img {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                }
              }
              .scTemplate-goods {
                flex: 4;
                display: flex;
                flex-direction: column;
                justify-content: center;

              }
              .scTemplate-cz {
                position: absolute;
                right: 10px;
                bottom: 10px;
              }
            }
          }
          .bottom-two {
            height: 400px;
            width: 95%;
            margin: 0 auto;
            .bottom-two-top {
              display: flex;
              height: 50px;
              div {
                flex: 1;
                height: 30px;
                margin: 10px auto;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .bottom-two-bottom {
              .bottom-two-bottom-ypj {
                .ypj-template {
                  display: flex;
                  border: 1px solid @color-F0;
                  .template-img {
                    flex: 1;
                  }
                  .template-info {
                    flex: 2;
                    .template-info-top {
                      height: 40px;
                      display: flex;
                      .template-star {
                        flex: 1;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                      .template-time {
                        flex: 1;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      }
                    }
                    .template-content {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                  }

                }
              }
              .bottom-two-bottom-wpj {
                .wpj-template {
                  width: 100%;
                  display: flex;
                  border: 1px solid @color-F0;
                  .template-img {
                    flex: 1;
                  }
                  .template-info {
                    flex: 2;
                    .template-info-top {
                      height: 40px;
                      display: flex;
                      .template-star {
                        flex: 1;
                        height: 40px;
                        line-height: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                      .template-time {
                        flex: 3;
                        height: 40px;
                        display: flex;
                        align-items: center;
                      }
                    }
                    .template-content {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                  }

                }
              }
            }
          }
          .bottom-three {
            height: 300px;
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            .icon-yue {
              font-size: @font-size-large-xxxxx;
              color: @color-red;
              margin: 10px auto;
            }
            .ye {
              font-size: @font-size-large;
              margin: 10px auto;
            }
            p {
              width: 250px;
              height: 30px;
              display: flex;
              margin: 10px auto;
              align-items: center;
              justify-content: center;
              font-size: @font-size-large;
              background-color: @color-green;
              color: @color-white;
            }
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

