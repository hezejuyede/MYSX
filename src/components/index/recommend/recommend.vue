<template>
  <div class="recommend">
    <swiper :options="swiperOption1" ref="mySwiper">
      <swiper-slide v-for="(item,index) in recommend" :key="item.id">
        <img :src="item.img" class="bannerimg" style="width: 100%"
             @click="showRecommend(index,item.id,item.sindex)">
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
    name: 'recommend',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        recommend: [],
        swiperOption1: {
          notNextTick: true,
          autoplay: 3000,
          loop: true,
          autoplayDisableOnInteraction: false,
          direction: 'horizontal',
          effect: 'coverflow',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          paginationType: 'bullets',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
      this._getrecommend()
    },
    methods: {
      _getrecommend() {
        axios.get('/api/recommend')
          .then((res) => {
          this.recommend = res.data;
        })
          .catch((err)=>{console.log(err)})
      },
      showRecommend(index,id,sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">

</style>
