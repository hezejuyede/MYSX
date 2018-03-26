<template>
  <div id="goodsDetails">
    <navheader></navheader>
    <search-navbar></search-navbar>
    <div class="goodsDetails-top">
      <div class="" v-for="(item,index) in goodsDetailsTop">
        <div
          :class="{'topBottom':index === num}"
          @click="tab(index)">
          {{item.text}}
        </div>
      </div>
    </div>


    <div class="goodsDetails-center">
      <div class="goodsInfo" v-for="(item,index) in  goodsDetailsCenter">
        <div class="goodsInfo-img" v-show="index==0&&index==num">
          <div class="goodsInfo-img-top">
            <img :src="goodsImg" alt="" >
          </div>
          <div class="goodsInfo-img-center">
            <div class="center-title">
              <span class="title-text">亿成优生鲜&nbsp;&nbsp;{{title}}</span>
            </div>
            <div class="center-price">
              <span>亿成价</span>
              <span>:</span>
              <span style="color:firebrick;font-size: 22px">￥{{price}}</span>
              <span>元</span>
            </div>
            <div class="center-gg">
              <span>库存数量：</span><span>{{gg}}件</span>
            </div>
            <div class="center-number">
              <div class="center-number-left">购买数量：</div>
              <div class="center-number-right">
                <span @click="minusNumber">-</span>
                <span>{{number}}</span>
                <span @click="addNumber">+</span>
              </div>


            </div>
            <div class="center-address">
              <span>送至:</span>
              &nbsp;<span>{{province}}</span>&nbsp;
              <span>{{city}}</span>&nbsp;
              &nbsp;<i class="iconfont icon-dizhi"></i>
            </div>
          </div>
        </div>
        <div class="goodsInfo-ge" v-show="index==1&&index==num">
          <div class="goodsInfo-ge-top">
            <div v-for="(item,index) in goodsInfoGeTop"
                 :class="{'fontColor':index === num1}" @click="tab1(index)">
              {{item.text}}
            </div>
          </div>
          <div class="goodsInfo-ge-bottom"
               v-for="(item,index) in goodsInfoGeBottom">
            <div class="ge-bottom-one" v-show="index==0&&index==num1">
              <div class="ge-bottom-img" v-for="(item,index) in productImg">
                <img :src="item.pimg" alt="" class="">
              </div>
            </div>
            <div class="ge-bottom-two" v-show="index==1&&index==num1">
              <div class="ge-bottom-two-tr" v-for="(item,index) in details">
                <div class="">
                  <span>品牌</span>
                  <span>:</span>
                  <span>{{item.pp}}</span>
                </div>
                <div class="">
                  <span>保质期</span>
                  <span>:</span>
                  <span>{{item.bzq}}</span>
                </div>
                <div class="">
                  <span>净含量</span>
                  <span>:</span>
                  <span>{{item.jhl}}</span>
                </div>
                <div class="">
                  <span>储存条件</span>
                  <span>:</span>
                  <span>{{item.tj}}</span>
                </div>
              </div>
            </div>
            <div class="ge-bottom-three" v-show="index==2&&index==num1">
              <div class="">
                <p class="">包装清单</p>
                <div class="">面包蟹原厂包装（漏气断脚为正常现象）、+食品专用控温冰袋1-2个+高密度食品专用保温泡沫箱1个+三层瓦楞纸箱（有效对抗暴力运输）+顺丰空运、使命必达（京津冀次日达）。</div>
              </div>
              <div class="">
                <p class="">售后服务</p>
                <div class="">1、生鲜“优鲜赔”绿色通道<br>
                  生鲜自营商品的破损或腐坏等问题，请在商品签收后48小时内提交“优鲜赔”申请，100分钟内审核通过后即享补偿，无需返回商品；非鲜活易腐类商品需上门取件。<br>
                  2、专业生鲜客服团队—让您售后无忧<br>
                  微信在线客服：YC-fresh<br>
                  亿成生鲜客服电话：400-626-3311<br>
                  服务时间：09:00-24:00<br>
                  生鲜商品售后政策<br>
                  注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，京东生鲜不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若亿成生鲜没有及时更新，请大家谅解！<br>
                </div>
              </div>
              <div class="">
                <p class="">价格说明</p>
                <div class="">1、亿成价：亿成价为商品的销售价，是您最终决定是否购买商品的依据。<br>2、划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在亿成平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。<br>3、折扣：如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。<br>4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。<br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="goodsInfo-pl" v-show="index==2&&index==num">
          2
        </div>
      </div>
    </div>


    <div class="goodsDetails-bottom">
      <div class="bottom-kf">
        <i class="iconfont icon-kefu">客服</i>
        <i class="iconfont icon-heart" @click="collection" ref="Collection">收藏</i>
      </div>
      <div class="bottom-addCart" @click="addCart">
        加入购物车
      </div>
      <div class="bottom-NowBuy" @click="nowBuy">
        立即购买
      </div>
    </div>



    <modal
      :msg="message"
      :isHideModal="HideModal">
    </modal>
    <div class="loading-container" v-show="goodsImg.length===0">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import Navheader from "../../bese/navheader/navheader.vue";
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import Modal from '../../bese/modal/modal.vue';
  import {addCart} from '../../api/config';
  import Loading from '../../bese/loading/loading.vue';


  import axios from 'axios';

  export default {
    name: 'goodsDetails',
    components: {
      SearchNavbar,
      Navheader,
      Modal,
      Loading
    },
    data() {
      return {
        goodsDetailsTop: [{text: "商品"}, {text: "详情"}, {text: "评论"}],
        goodsDetailsCenter: [{}, {}, {}],
        goodsInfoGeTop: [{text: "商品介绍"}, {text: "规格参数"}, {text: "包装售货"}],
        goodsInfoGeBottom: [{}, {}, {}],
        num: 0,
        num1: 0,


        message: "",
        HideModal: true,



        goodsInfo: [],
        productImg: [],
        details: [],

        goodsImg: '',
        title: "",
        price: "",
        number:1,
        img:'',
        gg: "",



        province: '',
        city:''

      }

    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
      setTimeout(() => {
        this._getGoodsDetails();
      }, 2000);
      this._getIPAddress();

    },
    methods: {
      _getGoodsDetails() {
        axios.get('/api/MobileGoodsDetails',{
          params: {
            id: this.$route.query.id,
            index:this.$route.query.index
          }
        })
          .then((res) => {
            this.goodsImg = res.data.img;
            this.title = res.data.title;
            this.price = res.data.price;
            this.gg = res.data.number;
            this.productImg = res.data.productImg;
            this.details = res.data.details;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      _getIPAddress() {
        let province = remote_ip_info.province;
        let city = remote_ip_info.city;
        this.province = province;
        this.city = city;
      },


      tab(index) {
        this.num = index;
      },
      tab1(index) {
        this.num1 = index;
      },


      collection() {
        let name = this.$refs.Collection;
        if (name.className === 'iconfont icon-heart') {
          if (sessionStorage.getItem("userInfo") === null) {
            this.message = "登录才能收藏";
            this.HideModal = false;
            const that = this;

            function a() {
              that.message = "";
              that.HideModal = true;
            }

            setTimeout(a, 2000);
          }
          else {
            name.className = 'iconfont icon-heart red';
            let title = this.title;
            let price = this.price;
            let id = this.$route.query.id;
            let index = this.$route.query.index;
            let img = this.goodsImg;
            let num = 1;

            let FollowGoods =
              {
                img: img,
                title: title,
                goodsPrice: price,
                num: num,
                id: id

              };
            axios.post("/api/setFollowGoods", {
              FollowGoods: FollowGoods
            })
              .then((res) => {
                if (res.data === "1") {
                  this.message = "收藏成功";
                  this.HideModal = false;
                  const that = this;

                  function a() {
                    that.message = "";
                    that.HideModal = true;
                  }

                  setTimeout(a, 2000);
                }
                else if (res.data === "-1") {
                  this.message = "收藏失败";
                  this.HideModal = false;
                  const that = this;

                  function b() {
                    that.message = "";
                    that.HideModal = true;
                    that.goodsCart.splice(index, 1);
                  }

                  setTimeout(b, 2000);
                }
                else if (res.data === "-2") {
                  this.message = "登录才能收藏";
                  this.HideModal = false;
                  const that = this;

                  function c() {
                    that.message = "";
                    that.HideModal = true;
                  }

                  setTimeout(c, 2000);
                }
              })
              .catch((err) => {
                console.log(err)
              })
          }

        }
        else if (name.className === 'iconfont icon-heart red') {
          if (sessionStorage.getItem("userInfo") === null) {
            this.message = "登录才能收藏";
            this.HideModal = false;
            const that = this;

            function a() {
              that.message = "";
              that.HideModal = true;
            }

            setTimeout(a, 2000);
          }
          else {
            name.className = 'iconfont icon-heart ';
            axios.post("/api/DetailsDeleteFollowGoods")
              .then((res) => {
                if (res.data === "1") {
                  this.message = "取消收藏成功";
                  this.HideModal = false;
                  const that = this;

                  function a() {
                    that.message = "";
                    that.HideModal = true;
                  }

                  setTimeout(a, 2000);
                }
                else if (res.data === "-1") {
                  this.message = "已经加入购物车";
                  this.HideModal = false;
                  const that = this;

                  function b() {
                    that.message = "";
                    that.HideModal = true
                  }

                  setTimeout(b, 2000);
                }
              })
              .catch((err) => {
                console.log(err)

              });
          }
        }

      },
      addCart() {
        let title = this.title;
        let price = this.price;
        let id = this.$route.query.id;
        let index = this.$route.query.index;
        let img  = this.goodsImg;
        addCart(index, img, title, price, id);

        this.message = "已经加入购物车";
        this.HideModal = false;
        const that = this;

        function a() {
          that.message = "";
          that.HideModal = true
        }

        setTimeout(a, 2000);
      },
      nowBuy() {

        this.$router.push({
          path: "/BuyProduct/",
          query: {
            id: this.$route.query.id,
            index: this.$route.query.index,
            img: this.goodsImg,
            title: this.title,
            price: this.price,
            number: this.number,
          }
        })
      },
      addNumber() {
        this.number++
      },
      minusNumber() {
        if (this.number > 1) {
          this.number--
        }

      }


    },

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .goodsDetails-top {
    height: 50px;
    background-color: @color-F0;
    display: flex;
    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      > div {
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: @font-size-large;
        border: 1px solid @color-F0;
      }
    }
    .topBottom {
      border-bottom: 1px solid @color-red;
    }

  }

  .goodsDetails-center {
    .goodsInfo {
      .goodsInfo-img {
        height: 650px;
        .goodsInfo-img-top {
          height: 375px;
          img {
            width: 100%;
            height: 375px;
          }
        }
        .goodsInfo-img-center {
          height: 200px;
          .center-title {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: @font-size-large-x;
            color: @color-green;

          }
          .center-price {
            height: 50px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            font-size: @font-size-medium-x;

          }
          .center-gg {
            height: 50px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            font-size: @font-size-medium-x;

          }
          .center-number{
            display: flex;
            padding-left: 20px;

            .center-number-left{
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: @font-size-medium-x;
            }
            .center-number-right{
              width: 100px;
              height: 25px;
              display: flex;
              align-items: center;
              border-radius: 10%;
              border: 1px solid@color-F0;
              span:first-child{
                flex: 3;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: @font-size-large-x;
                background-color: @color-F0;
              }
              span:nth-child(2){
                flex: 4;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: @font-size-large-x;

              }
              span:last-child{
                flex: 3;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: @font-size-large-x;
                background-color: @color-F0;
              }
            }

          }
          .center-address {
            height: 50px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            font-size: @font-size-medium;
            .icon-dizhi {
              font-size: @font-size-large-x;
              color: @color-red;
            }
          }
        }
      }
      .goodsInfo-ge {
        .goodsInfo-ge-top {
          display: flex;
          align-items: center;
          div {
            height: 40px;
            border-top: 3px solid @color-white;
            border-bottom: 1px solid @color-white;
            flex: 1;

            display: flex;
            background-color: @color-yellow;
            align-items: center;
            justify-content: center;

          }
          .fontColor {
            color: @color-red;
          }
        }
        .goodsInfo-ge-bottom {
          .ge-bottom-one {
            .ge-bottom-img {
              width: 95%;
              margin: 10px auto 60px auto;
              img {
                width: 100%;
              }
            }
          }
          .ge-bottom-two {
            .ge-bottom-two-tr {
              width: 95%;
              margin: 20px auto;
              border-right: 1px solid @color-F0;
              border-left: 1px solid @color-F0;
              div {
                display: flex;
                margin: 10px auto;
                border: 1px solid @color-F0;
                span:first-child {
                  flex: 5;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                span:nth-child(1) {
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                span:last-child {
                  flex: 5;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }

            }

          }
          .ge-bottom-three {
            margin-bottom: 60px;
            div {
              width: 95%;
              margin: 10px auto;
              background-color: @color-F0;
            }
          }

        }
      }
    }
  }

  .goodsDetails-bottom {
    max-width: 640px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    background-color: @color-F0;
    position: fixed;
    bottom: 0;
    z-index: 99;
    display: flex;
    .bottom-kf {
      flex: 3;
      display: flex;
      align-items: center;
      i {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-kefu {
        font-size: @font-size-large;
        color: @color-dialog-background;
      }
      .icon-heart {
        font-size: @font-size-large;
        color: @color-dialog-background;
      }
      .red {
        color: @color-red;
      }

    }
    .bottom-addCart {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-theme;
      color: @color-white;
      font-size: @font-size-medium-x;
    }
    .bottom-NowBuy {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-red;
      color: @color-white;
      font-size: @font-size-medium-x;
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
