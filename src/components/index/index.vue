<template>
  <div id="index">
    <nav-header></nav-header>
    <Search></Search>
    <swiper :options="swiperOption"  ref="mySwiper">
      <swiper-slide v-for="item in imgs" :key="item.id">
        <img :src="item.image"  class="bannerimg">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <nav-footer></nav-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from '../../bese/navheader/navheader.vue'
  import NavFooter from '../../bese/navfooter/navfooter.vue'
  import Search from '../../bese/search/search.vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'index',
    methods: {},
    components: {
      NavHeader,
      NavFooter,
      Search,
      swiper,
      swiperSlide
    },
    data () {
      return {
        imgs: [],
        swiperOption: {
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
          observeParents: true
        }
      }
    },
    created () {
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      },
      _getBanner () {
        this.$http.get('/banner').then((res) => {
          if (res.code === 1) {
            this.imgs = res.data.list
          }
        })
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">


</style>
