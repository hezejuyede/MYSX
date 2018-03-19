<template>
  <div id="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in bannerImg" :key="item.id">
        <img :src="item.img"
             style="width: 100%"
             @click="showBanner(index,item.id,item.sindex)">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css');
  import axios from 'axios';

  export default {
    name: 'banner',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return{
        bannerImg: [],
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
      setTimeout(() => {
        this._getBanner();
      }, 4000);
    },
    methods: {
      _getBanner() {
        axios.get('/api/banner')
          .then((res) => {
          this.bannerImg = res.data;
        })
          .catch((err)=>{
          console.log(err)
          })
      },
      showBanner(index,id,sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">

</style>
