<template>
  <div id="buyProduct">
    <div class="buyProduct-top">
        <i class="iconfont icon-left-trangle" @click="goBack"></i>
        <span>购买宝贝</span>
    </div>

    <div class="buyProduct-product">
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>
      <div class="buyProduct-product-template">
        <div class="template-img">
          <img src="http://www.ilqiqi.top/images/mYc/goods/crad/8.jpg" alt="">
        </div>
        <div class="template-info">
          <div class="template-info-title">
            亿成优生鲜帝王蟹
          </div>
          <div class="template-info-info">
            <div class="template-info-info-price">总价:￥199</div>
            <div class="template-info-info-number">数量：1件</div>
          </div>
        </div>
      </div>

    </div>
    <div class="buyProduct-address">
      <div class="buyProduct-address-left">
        收货地址
      </div>
      <div class="buyProduct-address-center">
        <div class="">李鑫15550739985</div>
        <div class="">山东省菏泽市巨野县永丰街道办事处健康路77号巨野县疾病预防控制中心西50米助发农机旁边门市</div>
      </div>
      <div class="buyProduct-address-right">
        <i class="iconfont icon-right-trangle"></i>
      </div>
    </div>
    <div class="buyProduct-yf">
      <div class="buyProduct-yf-left">运费</div>
      <div class="buyProduct-yf-right">￥0.00</div>
    </div>


    <div class="buyProduct-bottom">
      <div class="buyProduct-bottom-left">
        <span>实付款:</span>
        <span>￥200.00</span></div>
      <div class="buyProduct-bottom-right" @click="payment">确认</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'buyProduct',
    data() {
      return {}
    },
    methods: {
      goBack(){
        this.$router.push({path: "/"})
      },
      payment() {
        alert("hahah")
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  #buyProduct {
    background-color: @color-F0;
    .buyProduct-top {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: @font-size-large;
      position: relative;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      .icon-left-trangle {
        position: absolute;
        top: 0;
        left: 20px;
        font-size: @font-size-large-xxxxx;

      }

    }

    .buyProduct-product-template {
      display: flex;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      margin-bottom: 5px;
      .template-img {
        width: 30%;
        padding-left: 20px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .template-info {
        width: 70%;
        display: flex;
        flex-direction: column;
        .template-info-title {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: @font-size-large;
        }
        .template-info-info {
          flex: 1;
          display: flex;
          align-items: center;
          .template-info-info-price {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: @color-red;
            font-size: @font-size-large;
          }
          .template-info-info-number {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

      }

    }

    .buyProduct-address{
      height: 100px;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      display: flex;
      .buyProduct-address-left{
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: @font-size-large;
        color: @color-background-d;
      }
      .buyProduct-address-center{
        flex: 6;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .buyProduct-address-right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }



    }
    .buyProduct-yf{
      height: 60px;
      background-color: @color-white;
      border-bottom: 1px solid@color-F0;
      margin-bottom: 60px;
      .buyProduct-yf-left{
        height: 60px;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        font-size: @font-size-large;
      }
      .buyProduct-yf-right{
        height: 60px;
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        font-size: @font-size-large;
        color: @color-red;
      }
    }

    .buyProduct-bottom {
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: 1px solid @color-background-d;
      .buyProduct-bottom-left {
        float: left;
        width: 65%;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        background-color: @color-white;
        span:first-child {
          font-size: @font-size-large;
        }
        span:last-child {
          color: @color-red;
          font-size: @font-size-medium-x;
        }

      }
      .buyProduct-bottom-right {
        float: left;
        width: 35%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: @color-red;
        color: @color-white;
        font-size: 18px;
      }

    }

  }


</style>
