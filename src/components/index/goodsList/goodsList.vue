<template>
  <div class="yc-goodsList">
    <h3>亿成生鲜产品特色推荐</h3>

    <div class="clearfix yc-goodsList-classify">
      <h4>蟹产品</h4>
      <div v-for="(item,index) in crad" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookCrabGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>￥{{item.price}}</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>虾产品</h4>
      <div v-for="(item,index) in shrimps" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookShrimpsGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>鱼产品</h4>
      <div v-for="(item,index) in fishs" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookFishGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>牛产品</h4>
      <div v-for="(item,index) in cows" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookCowGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>猪产品</h4>
      <div v-for="(item,index) in pigs" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookPigsGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4> 羊产品</h4>
      <div v-for="(item,index) in sheeps" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookSheepGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>鸡产品</h4>
      <div v-for="(item,index) in chichens" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookChichenGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>鸭产品</h4>
      <div v-for="(item,index) in ducks" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookDuckGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4> 面点产品</h4>
      <div v-for="(item,index) in noodles" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookNoodlesGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class=""@click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4>火锅丸产品</h4>
      <div v-for="(item,index) in bolus" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookBolusGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix yc-goodsList-classify">
      <h4> 调味品产品</h4>
      <div v-for="(item,index) in seasonings" class="goodslist">
        <div class="clearfix goodslistOne">
          <img v-lazy="item.img" width="100%" @click="lookSeasoningGoods(index)">
          <p class="goods-title">{{item.title}}</p>
          <div class="addCart">
            <p>{{item.price}}￥</p>
            <p class="" @click="addCart(index,item.img,item.title,item.price,item.id)">加入购物车</p>
          </div>
        </div>
      </div>
    </div>

    <modal
      :msg="message"
      :isHideModal="HideModal">
    </modal>
  </div>

</template>

<script type="text/ecmascript-6">
  import Modal from '../../../bese/modal/modal.vue'
  import axios from 'axios';
  import {addCart} from '../../../api/config'

  export default {
    name: 'yc-goodsList',
    components: {
      Modal
    },
    data() {
      return {
        message: "",
        HideModal: true,
        bolus: [],
        chichens: [],
        cows: [],
        crad: [],
        ducks: [],
        fishs: [],
        noodles: [],
        sheeps: [],
        shrimps: [],
        pigs: [],
        seasonings: []
      }
    },
    created() {
      this._getGoodsList();
    },
    methods: {
      _getGoodsList() {
        axios.get('api/goodsList')
          .then((res) => {
              this.crad = res.data[0].goodsImg,
              this.shrimps = res.data[4].goodsImg,
              this.fishs = res.data[9].goodsImg,
              this.pigs = res.data[7].goodsImg,
              this.cows = res.data[6].goodsImg,
              this.sheeps = res.data[10].goodsImg,
              this.ducks = res.data[3].goodsImg,
              this.chichens = res.data[2].goodsImg,
              this.bolus = res.data[5].goodsImg,
              this.noodles = res.data[8].goodsImg,
              this.seasonings = res.data[1].goodsImg
          })
          .catch((err) => {
            console.log(err)
          })
      },


      addCart(index, img, title, price, id) {
        addCart(index, img, title, price, id);
        this.message = "已经加入购物车";
        this.HideModal = false;
        const that = this;

        function a() {
          that.message = "";
          that.HideModal = true
        }

        setTimeout(a, 2000);


      },


      lookCrabGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "PXL", index: index}})
      },
      lookPigsGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "ZRL", index: index}})
      },
      lookCowGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "NRL", index: index}})
      },
      lookFishGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "XYL", index: index}})
      },
      lookDuckGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "YXL", index: index}})
      },
      lookShrimpsGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "DXL", index: index}})
      },
      lookSheepGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "YRL", index: index}})
      },
      lookChichenGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "JXL", index: index}})
      },
      lookSeasoningGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "TWL", index: index}})
      },
      lookBolusGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "HGW", index: index}})
      },
      lookNoodlesGoods(index) {
        this.$router.push({path: "/GoodsDetails/", query: {id: "MDL", index: index}})
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";

  .yc-goodsList {
    text-align: center;
    h3 {
      width: 80%;
      height: 30px;
      line-height: 30px;
      font-size: @font-size-large-xx;
      color: @color-green;
      margin: 10px auto 10px auto;
    }
    .yc-goodsList-classify {
      .goodslist {
        width: 95%;
        margin: 0 auto;
        background-color: #d93f30;
        .goodslistOne {
          width: 49%;
          float: left;
          margin-top: 10px;
          .goods-title {
            color: @color-dialog-background;
            font-size: @font-size-medium-x;
          }
          .addCart {
            width: 90%;
            margin: 0 auto;
            border: 1px solid @color-theme;
            display: flex;
            align-items: center;
            p:first-child {
              flex: 2;
              display: flex;
              align-items: center;
              justify-content: center;

            }
            p:last-child {
              flex: 3;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: @color-theme-d;
              color: @color-red

            }
          }
        }
      }
      h4 {
        width: 90px;
        height: 25px;
        line-height: 25px;
        background-color: @color-background;
        margin: 10px auto 10px auto;
        color: @color-white;
        border-radius: 15%;
      }

    }

  }
</style>
