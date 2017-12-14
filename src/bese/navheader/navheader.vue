<template>
  <header id="navherder" >
    <div class="navherder" v-bind:class="{'dowmAppShow':isdowmAppShow,'dowmAppHide':!isdowmAppShow}">
      <div class=" down-app">
        <div class="clearfix down-app-left">
          <div class="colse-app">
            <i class="iconfont icon-guanbi" @click="closeApp"></i>
          </div>
          <div class="yclogo"></div>
          <div class="newMan">
            <router-link to="" class="open-app">打开亿成APP购物</router-link>
            <router-link to="" class="newuser">新人领188元红包</router-link>
          </div>
        </div>
        <div class="clearfix down-app-rgiht">
          <router-link to="" class="">立即打开</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'navheader',
    data () {
      return {
        isdowmAppShow: true
      }
    },
    methods: {
      closeApp () {
        this.isdowmAppShow = !this.isdowmAppShow
      }
    },
    components: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .down-app {
    height: 60px;
    background: @color-black;
    display: flex;
    flex-direction: row;
    align-items: center;
    .down-app-left {
      flex: 7;
      height: 60px;
      display: flex;
      align-items: center;
      background-color: @color-black;
      .colse-app {
        width: 30px;
        height: 60px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-guanbi {
          width: 25px;
          height: 25px;
          border: 1px solid @color-white;
          border-radius: 50%;
          background-color: @color-background-d;
          color: @color-white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }
      .yclogo {
        display: block;
        width: 35px;
        height: 35px;
        border-radius: 10%;
        background: url(../../common/image/logo.png) no-repeat left center;
        background-size:80px;
        margin-right: 10px;
      }
      .newMan{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60px;
        .open-app{
          color: @color-white;
          font-size: @font-size-medium-x;
        }
        .newuser{
          color: @color-text-l;
          font-size: @font-size-medium-x;
        }

      }
    }
    .down-app-rgiht {
      flex: 3;
      height: 100%;
      background-color: @color-red;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        color: @color-white;
        font-size: @font-size-medium-x;
      }

    }
  }

  .dowmAppShow {
   display: block;
  }
  .dowmAppHide{
    display: none;
  }


</style>
