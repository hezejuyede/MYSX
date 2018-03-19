<template>
  <div id="nearby">
    <search-navbar></search-navbar>
    <div class="nearbyBanner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in nearbyImg" :key="item.id">
          <img :src="item.img"
               style="width: 100%"
               @click="showBanner(index,item.id,item.sindex)">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <div class="FoodsList">
      <div class="FoodsList-top"></div>
      <div class="FoodsList-list">
        <div class="FoodsList-list-img" v-for="(item,index) in ImgList">
          <img :src="item.img" alt="">
        </div>

      </div>

    </div>
    <div class="loading-container" v-show="!nearbyImg.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Loading from '../../bese/loading/loading.vue'
  require('swiper/dist/css/swiper.css');
  import axios from 'axios';

  export default {
    name: 'nearby',
    components: {
      SearchNavbar,
      swiper,
      swiperSlide,
      Loading
    },
    data() {
      return {
        nearbyImg: [
          {"img": require("../../common/image/banner/banner1.jpg")},
          {"img": require("../../common/image/banner/banner2.jpg")},
          {"img": require("../../common/image/banner/banner3.jpg")}
        ],
        ImgList:[
          {"img": require("../../common/image/banner/list1.jpg")},
          {"img": require("../../common/image/banner/list2.jpg")},
          {"img": require("../../common/image/banner/list3.jpg")},
          {"img": require("../../common/image/banner/list4.jpg")},
          {"img": require("../../common/image/banner/list5.jpg")},
        ],
        swiperOption: {
          direction: "horizontal",
          loop: true,
          pagination: ".swiper-pagination",
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
     /* setTimeout(() => {
        this._getBanner();
      }, 4000);*/


    },
    methods: {
      _getBanner() {
        axios.get('/api/')
          .then((res) => {

          })
          .catch((err) => {
            console.log(err)
          })
      },
      showBanner(index, id, sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  #nearby {
    .FoodsList {
      .FoodsList-top {
        height: 110px;
        background: url("../../common/image/banner/top.jpg") no-repeat;
        background-size: 100% 100%;
      }
      .FoodsList-list-img {
        img {
          width: 100%;
        }
      }

    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

</style>
