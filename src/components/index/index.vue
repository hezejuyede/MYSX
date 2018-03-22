<template>
  <div id="index">
    <header>
      <nav-header></nav-header>
    </header>
    <main>
      <section ref="suosuo">
        <search></search>
      </section>
      <section ref="banner">
        <banner></banner>
      </section>
      <section>
        <navbar></navbar>
      </section>
      <section>
        <header-line></header-line>
      </section>
      <section>
        <recommend></recommend>
      </section>
      <section>
        <ysx-sk></ysx-sk>
      </section>
      <section ref="goodGoods">
        <good-goods></good-goods>
      </section>
      <section>
        <goods-list></goods-list>
      </section>
      <section>
        <bottom></bottom>
      </section>
      <section>
        <div class="upTop" ref="upTop" @click="upToTop">
          <i class="iconfont icon-xiangshang"></i>
        </div>
        <div class="loading-container" v-show="!imgs.length">
          <loading></loading>
        </div>
      </section>
    </main>
    <footer>
      <nav-footer></nav-footer>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavHeader from '../../bese/navheader/navheader.vue'
  import NavFooter from '../../bese/navfooter/navfooter.vue'
  import Loading from '../../bese/loading/loading.vue'
  import Modal from '../../bese/modal/modal.vue'
  import Navbar from '../../components/index/navbar/navbar.vue'
  import Banner from '../../components/index/banner/banner.vue'
  import HeaderLine from "../../components/index/headerline/headerline.vue"
  import Recommend from '../../components/index/recommend/recommend.vue'
  import GoodsList from '../../components/index/goodsList/goodsList.vue'
  import Bottom from '../../components/index/bottom/bottom.vue'
  import GoodGoods from '../../components/index/goodGoods/goodGoods.vue'
  import Search from '../../components/index/search/search.vue'
  import YsxSk from '../../components/index/sk/sk.vue'

  import axios from 'axios';

  export default {
    name: 'index',
    components: {
      NavHeader,
      NavFooter,
      Loading,
      Modal,
      Navbar,
      HeaderLine,
      Recommend,
      GoodsList,
      Bottom,
      GoodGoods,
      Banner,
      Search,
      YsxSk
    },
    data() {
      return {
        imgs: [],
      }
    },
    computed: {},
    mounted() {
      this.showUp();
      this.showSearch();
      this.bianse();
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
            this.imgs = res.data;
          })
          .catch((err) => {
            console.log(err)
          })
      },
      showSearch() {
        let search = this.$refs.suosuo;
        let searchHight = this.$refs.suosuo.offsetHeight;
        window.addEventListener('scroll', () => {
          let top = window.scrollY;
          if (top > searchHight) {
            search.style.position = "fixed";
            search.style.maxWidth = "640px";
            search.style.width = "100%";
            search.style.top = 0;
            search.style.zIndex = 999;
          } else if (top <= searchHight) {
            search.style.position = "";
          }
        })
      },
      bianse() {
        let search = this.$refs.suosuo;
        let searchHight = this.$refs.banner.offsetHeight;
        window.addEventListener('scroll', () => {
          let top = window.scrollY;
          if (top > searchHight) {
            search.style.background = "rgba(240,240,240,1)"
          } else {
            let op = (top / searchHight) * 0.85;
            search.style.background = "rgba(240,240,240," + op + ")";
          }

        })

      },
      showUp() {
        let height = this.$refs.goodGoods.offsetHeight;
        let upTop = this.$refs.upTop;
        window.addEventListener('scroll', () => {
          let top = window.scrollY;
          if (top >= height) {
            upTop.style.display = "block"
          }
          else if (top < height) {
            upTop.style.display = "none"
          }
        });

      },
      upToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .loading-container {
    position: absolute;
    max-width: 640px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  .upTop {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    display: none;
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 999;
    background-color: @color-background-d;
    color: @color-white;
    i {
      font-size: @font-size-large-xxx;
    }

  }


</style>
