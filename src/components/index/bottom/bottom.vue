<template>
  <div class="yc-bottom">
    <div class="yc-bottom-top">
      <div class="yc-bottom-top-center">
        <div class="">
          <span>/精挑细选的/</span>
        </div>
        <div class=""></div>
        <div class="">
          <span>/分健康美味/</span>
        </div>
      </div>
    </div>
    <div class="yc-bottom-center">
      <div>
        <div class="">
          <i class="iconfont icon-yudashuye"></i>
        </div>
        <div class="">
          <span>精挑</span>
          <span>细选</span>
        </div>
      </div>
      <div>
        <div class="">
          <i class="iconfont icon-cailanzi-"></i>
        </div>
        <div class="">
          <span>产地</span>
          <span>直销</span>
        </div>
      </div>
      <div>
        <div class="">
          <i class="iconfont icon-shipinanquanicon"></i>
        </div>
        <div class="">
          <span>严格</span>
          <span>质检</span>
        </div>
      </div>
      <div>
        <div class="">
          <i class="iconfont icon-quanchenglenglian "></i>
        </div>
        <div class="">
          <span>全程</span>
          <span>冷链</span>
        </div>
      </div>
      <div>
        <div class="">
          <i class="iconfont icon-shouhou"></i>
        </div>
        <div class="">
          <span>售后</span>
          <span>无忧</span>
        </div>
      </div>
    </div>
    <div class="end">
      <img src="http://www.ilqiqi.top/images/mYc/nbi/footer.jpg">
      <router-link to="">查看更多</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yc-bottom',
    data() {
      return{

      }
    },
    methods: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";
  .yc-bottom {
    text-align: center;
    margin-top: 10px;
    .yc-bottom-top {
      display: flex;
      align-items: center;
      height: 60px;
      .yc-bottom-top-center {
        width: 90%;
        display: flex;
        margin: 0 auto;
        line-height: 60px;
        div {
          flex: 1;
          align-items: center;
          justify-content: center;
          span {
            font-size: @font-size-medium-x;
          }
        }
        div:nth-child(2) {
          height: 60px;
          background: url("http://www.ilqiqi.top/images/mYc/nbi/jx.png") no-repeat center center;
          background-size: 60%;
        }
      }
    }
    .yc-bottom-center {
      display: flex;
      > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        div:first-child {
          i {
            font-size: @font-size-large-xxxx;
          }

        }
        div:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
    }
    .end {
      margin: 10px auto 70px auto;
      img {
        width: 100%;
      }
    }
  }
</style>
