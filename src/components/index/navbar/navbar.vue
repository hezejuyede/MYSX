<template>
  <div class="yc-navbar">
    <ul>
      <li>
        <router-link to="/NowRec">
          <i class="iconfont icon-xinpinbiaoqian"></i>
          <span>新品推荐</span>
        </router-link>
      </li>
      <li>
        <router-link to="/weekSell">
          <i class="iconfont icon-remai"></i>
          <span>本周热卖</span>
        </router-link>
      </li>
      <li>
        <router-link to="/YcJx">
          <i class="iconfont icon-jingxuan"></i>
          <span>亿成精选</span>
        </router-link>
      </li>
      <li>
        <router-link to="/Discount">
          <i class="iconfont icon-dazhehuodong"></i>
          <span>打折生鲜</span>
        </router-link>
      </li>
      <li>
        <router-link to="/XsMs">
          <i class="iconfont icon-miaosha1"></i>
          <span>限时秒杀</span>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link to="/FreeEat">
          <i class="iconfont icon-mianfeishichi"></i>
          <span>免费试吃</span>
        </router-link>
      </li>
      <li>
        <router-link to="/TsCy">
          <i class="iconfont icon-tesefuwu"></i>
          <span>特色菜肴</span>
        </router-link>
      </li>
      <li>
        <router-link to="/myOrder">
          <i class="iconfont icon-order"></i>
          <span>查看订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/LogisticsInfo">
          <i class="iconfont icon-wuliu"></i>
          <span>物流信息</span>
        </router-link>
      </li>
      <li>
        <router-link to="/LxKf">
          <i class="iconfont icon-kefu1"></i>
          <span>联系客服</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yc-navbar',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";

  .yc-navbar {
    ul {
      display: flex;
      align-items: center;
      li {
        flex: 1;
      }
      li > a {
        height: 100px;
        display: block;
        line-height: 30px;
        text-align: center;
        span {
          display: block;
          font-size: @font-size-medium;
        }
        .icon-xinpinbiaoqian:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #00AEEF;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-remai:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #F12851;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-jingxuan:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #FFCA45;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-dazhehuodong:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #C2A2AF;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-miaosha1:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #3EC455;
          color: lightblue;
          margin: 20px auto;

        }
        .icon-mianfeishichi:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #D0A370;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-tesefuwu:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #9937E5;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-order:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #00E58A;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-wuliu:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #967AF3;
          color: #FFFFff;
          margin: 20px auto;

        }
        .icon-kefu1:before {
          display: block;
          width: 50px;
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          border-radius: 50%;
          background-color: #CD2525;
          color: #FFFFff;
          margin: 20px auto;

        }

      }

    }
  }

</style>
