<template>
  <footer id="navfooter" >
    <router-link to="/" v-bind:class="{footerA:isfooterA}">
      <i class="iconfont icon-zhuye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/Classify" >
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/Nearby" >
      <i class="iconfont icon-fujin"></i>
      <span>附近</span>
    </router-link>
    <router-link to="/ShoppingCart" >
      <i class="iconfont icon-gouwuche1"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/UserInfo" >
      <i class="iconfont icon-iconfonticonfontwode1"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'navfooter',
    data () {
      return {
        isfooterA: true
      }
    },
    methods: {},
    components: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  #navfooter {
    max-width: 640px;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 60px;
    background-color: @color-white;
    display: flex;
    align-items: center;
    z-index: 99;
    border-top: 1px solid@color-background-dd;
    a {
      flex: 1;
      display: block;
      height: 100%;
      width: 100%;
      line-height: 30px;
      text-align: center;
      span {
        color: @color-black;
        font-size: @font-size-medium-x;
      }
      i{
        display: block;
        margin-top: 2px;
        font-size: 180%;
        color: @color-black;
      }
    }

  }

  .footerA {
    background-color: @color-F0;
  }


</style>
