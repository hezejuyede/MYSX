<template>
  <div id="searchNavbar">
    <div class="searchNavbar-top">
      <div class="top-left">
        <router-link to="/">
          <i class="iconfont icon-left-trangle"></i>
        </router-link>
      </div>
      <div class="top-center">
        <i class="iconfont icon-sousuo"></i>
        <form>
          <input type="text" class="" placeholder="新鲜鸡腿">
        </form>
      </div>
      <div class="top-right">
        <i class="iconfont icon-caidan" @click="changeNavbar"></i>
      </div>
    </div>
    <div  v-bind:class="{'BottomNone':isBottom,'BottomBlock':!isBottom}">
      <div class="searchNavbar-bottom">
      <router-link to="/" >
        <i class="iconfont icon-zhuye"></i>
        <span class="">首页</span>
      </router-link>
      <router-link to="/Classify" >
        <i class="iconfont icon-fenlei"></i>
        <span class="">分类</span>
      </router-link>
      <router-link to="/Nearby" >
        <i class="iconfont icon-fujin"></i>
        <span class="">附近</span>
      </router-link>
      <router-link to="/ShoppingCart" >
        <i class="iconfont icon-gouwuche1"></i>
        <span class="">购物车</span>
      </router-link>
      <router-link to="/UserInfo" >
        <i class="iconfont icon-unie64d"></i>
        <span class="">我的</span>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'searchNavbar',
    data () {
      return {
        isBottom: false
      }
    },
    methods: {
      changeNavbar () {
        this.isBottom = !this.isBottom
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .searchNavbar-top {
    height: 40px;
    background-color: @color-F0;
    display: flex;
    align-items: center;
    .top-left {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-left-trangle {
        font-size: @font-size-large-xxxxx;
      }
    }
    .top-center {
      flex: 11;
      position: relative;
      input {
        width: 100%;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        padding-left: 40px;
        font-size: @font-size-large;
        background-color: @color-white;
      }
      .icon-sousuo {
        position: absolute;
        font-size: @font-size-large-x;
        top: 3px;
        left: 10px;
      }
    }
    .top-right {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-caidan {
        font-size: @font-size-large-xxx;
      }
    }
  }

  .searchNavbar-bottom {
    display: flex;
    align-items: center;
    background-color: @color-black;
    a {
      flex: 1;
      display: block;
      height: 100%;
      width: 100%;
      line-height: 25px;
      text-align: center;
      span {
        color: @color-white;
        font-size: @font-size-medium-x;
      }
      i {
        display: block;
        margin-top: 2px;
        font-size: 180%;
        color: @color-white;
      }
    }
  }

  .HomeH, .classifyF, .NearbyF, .ShoppingG, .UserW {
    background-color: @color-text-d;
  }
  .BottomNone{
    display: none;
  }
  .BottomBlock{
    display: block;
  }

</style>
