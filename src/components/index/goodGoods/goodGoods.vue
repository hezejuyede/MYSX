<template>
  <div class="yc-good-goods" >
    <div class="yc-good-goods-top">
      <h2>精选好货</h2>
      <p>SELECTED</p>
    </div>
    <div class="yc-good-goods-center">
      <h3></h3>
      <div class="center-img">
        <swiper :options="swiperOption2" ref="mySwiper">
          <swiper-slide v-for="(item,index) in YCJX" :key="item.id">
            <p class="center-ul-li-a-p">
              <span>{{item.price}}￥</span>
              <span>多个</span>
            </p>
            <div @click="showjx4(index,item.id,item.sindex)">
              <img :src="item.img" class="goodsImg">
              <p class="center-ul-li-a-p-title">{{item.title}}</p>
              <p class="center-ul-li-a-p-text">亿成，多，快，好，省</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="yc-good-goods-bottom">
      <div class="yc-good-goods-bottom-more">
        <router-link to="">
          <span>更多优选精品</span>
          <span> > </span>
        </router-link>
      </div>
      <div class="yc-good-goods-bottom-list">
        <div class="yc-good-goods-bottom-new">
          <h3>新品初见</h3>
          <div class="new-price" v-for="(item,index) in chujian">
            <div class="chujianImg">
              <div class="hot-topone-price">
                <span>￥{{item.price}}</span>
                <span>{{item.number}}只</span>
              </div>
              <img :src="item.img" @click="showCJ(index,item.id,item.sindex)">
            </div>
            <p>{{item.title}}</p>
            <p>每周三上新货</p>
          </div>
        </div>
        <div class="yc-good-goods-bottom-hot">
          <h3>本周热卖</h3>
          <div class="hot-topone" v-for="(item,index) in weekHotSell">
            <div class="chujianImg">
              <div class="hot-topone-price">
                <span>￥{{item.price}}</span>
                <span>{{item.number}}只</span>
              </div>
              <img :src="item.img" alt="" @click="showRM(index,item.id,item.sindex)">
            </div>
            <div class="hot-topone-goods">
              <span>{{item.title}}</span><br>
              <span>本周销量第一</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  require('swiper/dist/css/swiper.css');
  import axios from 'axios';

  export default {
    name: 'yc-good-goods',
    data() {
      return{
        swiperOption2: {
          direction: "horizontal",
          loop: true,
          pagination: ".swiper-pagination",
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
          autoplay: 3000,
          effect: "cube",
          slidesPerView: 3,
          centeredSlides: true,
          coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideshadows: true
          }
        },
        YCJX:[],
        hotSell: [],
        weekHotSell: [],
        chujian: [],
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
      this._getYCJX();
      this._getWeekHotSell();
      this._getchujian();
    },
    methods: {
      _getYCJX() {
        axios.get('/api/tuijian')
          .then((res) => {
            this.YCJX = res.data;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      _getWeekHotSell() {
        axios.get('/api/hotSell')
          .then((res) => {
            this.weekHotSell = res.data;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      _getchujian() {
        axios.get('/api/chujian')
          .then((res) => {
            this.chujian = res.data;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      showCJ(index,id,sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
      showRM(index,id,sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
      showjx4(index,id,sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";
  .yc-good-goods {
    background-color: @color-yellow;
    width: 100%;
    .yc-good-goods-top {
      text-align: center;
      padding-top: 10px;
      p {
        color: @color-background-d;
      }
    }
    .yc-good-goods-center {
      position: relative;
      h3 {
        height: 28px;
        background: url("http://www.ilqiqi.top/images/mYc/nbi/jx.png") no-repeat top center;
        background-size: 60px;
      }
      .center-img {
        height: 260px;
        width: 260px;
        margin: 0 auto;
        background-color: @color-yellow;
        text-align: center;

        .goodsImg {
          width: 200px;
          height: 210px;
          border-radius: 50%;
        }
        .center-ul-li-a-p {
          width: 60px;
          height: 60px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: @color-theme;
          border-radius: 50px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .yc-good-goods-bottom {
      .yc-good-goods-bottom-more a {
        display: block;
        width: 50%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #FFFFFF;
        background-color: #222222;
        margin: 20px auto;
        text-align: center;
        span:last-child {
          width: 16px;
          height: 16px;
          margin: 2px 5% 0 0;
          font-size: 12px;
          border-radius: 50%;
          text-align: center;
          line-height: 16px;
          background-color: #FFFFFF;
          display: block;
          float: right;
          color: #222222;
        }

      }
      .yc-good-goods-bottom-list {
        display: flex;
        width: 95%;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: @color-white;
        position: relative;
        img {
          width: 180px;
          height: 180px;
        }
        .yc-good-goods-bottom-new {
          flex: 1;
          position: relative;
          border-right: 3px solid @color-F0;
          margin-bottom: 10px;
          .chujianImg {
            position: relative;
            .hot-topone-price {
              width: 60px;
              height: 60px;
              background-color: @color-yellow;
              display: flex;
              flex-direction: column;
              text-align: center;
              justify-content: center;
              border-radius: 50%;
              position: absolute;
              top: 0;
              left: 0;
              span:first-child {
                color: @color-red;
                font-size: @font-size-large;
              }
            }
            img {
              width: 100%;
            }
          }
          h3 {
            width: 80px;
            height: 20px;
            position: absolute;
            top: -10px;
            left: 30%;
            z-index: 99;
            background-color: @color-green;
          }
        }
        .yc-good-goods-bottom-hot {
          flex: 1;
          .chujianImg {
            position: relative;
            .hot-topone-price {
              width: 60px;
              height: 60px;
              background-color: @color-yellow;
              display: flex;
              flex-direction: column;
              text-align: center;
              justify-content: center;
              border-radius: 50%;
              position: absolute;
              top: 0;
              left: 0;
              span:first-child {
                color: @color-red;
                font-size: @font-size-large;
              }
            }
            img {
              width: 100%;
            }
          }
          h3 {
            width: 80px;
            height: 20px;
            position: absolute;
            top: -10px;
            left: 65%;
            z-index: 99;
            background-color: @color-green;
          }
        }
      }
    }
  }
</style>
