<template>
  <div id="shoppingCart">
    <search-navbar></search-navbar>
    <section class="goodsList">
      <div class="goodsList-template" v-for="(item,index) in goodsCart">
        <div class="goodsList-templatel-left">
          <i class="iconfont icon-xuanze1" @click="oneChange(index)" ref="xuanze"></i>
        </div>
        <div class="goodsList-template-center">
          <img :src="item.img">
        </div>
        <div class="goodsList-template-right">
          <div class="right-top">
            <p class="right-top-title">{{item.title}}</p>
          </div>
          <div class="right-center">
            <span class="right-center-price">总价：￥{{item.goodsPrice}}</span>
            <span class="right-center-Specifications">规格：{{item.size}}</span>
          </div>
          <div class="right-bottom">
            <div class="right-bottom-addMinus">
              <span class="add" @click="minusGoods(index)">-</span>
              <span class="number" ref="numberGoods">{{item.number}}</span>
              <span class="Minus" @click="addGoods(index)">+</span>
            </div>
            <div>
              <span class="follow" @click="followGoods">关注</span>
              <span class="delete" @click="deleteGoods(index)">删除</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="cart-footer">
      <div class="cart-footer-left">
        <i class="iconfont icon-xuanze1" ref="allChange"></i>
        <span class="" @click="allchange">全选</span>
      </div>
      <div class="cart-footer-center">
        <span>一共</span>
        <span ref="zg">{{allGoodsNumber}}</span>
        <span>总价</span>
        <span ref="zj">{{allGoodsPrice}}</span>
      </div>
      <div class="cart-footer-right">
        <span class="">结算</span>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import axios from 'axios';

  export default {
    components: {SearchNavbar},
    name: 'shoppingCart',
    data() {
      return {
        goodsCart: [],
        allGoodsPrice: 0,
        allGoodsNumber: 0
      }

    },
    created(){
      this._getGoodsCart();


    },
    methods: {
      _getGoodsCart() {
        axios.get('/api/shoppingCart')
          .then((res) => {
            this.goodsCart = res.data;
          })
          .catch((err) => {
            console.log(err)
          })

      },
      oneChange(index){
        const icon = this.$refs.xuanze;
        const allicon = this.$refs.allChange;
        if (this.$refs.xuanze[index].className === 'iconfont icon-xuanze') {
          this.$refs.xuanze[index].className = 'iconfont icon-xuanze1'
        }
        else if (this.$refs.xuanze[index].className === 'iconfont icon-xuanze1') {
          this.$refs.xuanze[index].className = 'iconfont icon-xuanze'
        }
        for (let i =0;i<icon.length;i++){
          if (icon[i].className === 'iconfont icon-xuanze') {
            this.$refs.allChange.className = 'iconfont icon-xuanze'
          } else if (icon[i].className === 'iconfont icon-xuanze1') {
            this.$refs.allChange.className = 'iconfont icon-xuanze1'
          }
        }

      },
      allchange() {
        const icon = this.$refs.xuanze;
        const allChange = this.$refs.allChange;
        if (allChange.className === 'iconfont icon-xuanze1') {
          allChange.className = 'iconfont icon-xuanze';
          for (let i = 0; i < icon.length; i++) {
            icon[i].className = 'iconfont icon-xuanze'
          }
          const carts = this.goodsCart;
          let total = 0;
          let number = 0;
          for (let i = 0; i < carts.length; i++) {
            total += carts[i].price * carts[i].number;
            number += carts[i].number;
          }
          this.allGoodsPrice = total;
          this.allGoodsNumber = number;

        } else if (allChange.className === 'iconfont icon-xuanze') {
          allChange.className = 'iconfont icon-xuanze1';
          for (let i = 0; i < icon.length; i++) {
            icon[i].className = 'iconfont icon-xuanze1'
          }
          this.allGoodsPrice = 0;
          this.allGoodsNumber = 0;
        }



      },
      addGoods(index) {
        this.goodsCart[index].number++;
        this.goodsCart[index].goodsPrice=this.goodsCart[index].number*this.goodsCart[index].price
      },
      minusGoods(index) {
        if (this.goodsCart[index].number > 1) {
          this.goodsCart[index].number--;
          this.goodsCart[index].goodsPrice = this.goodsCart[index].number * this.goodsCart[index].price
        }
      },
      followGoods() {
        alert("移入成功")
      },
      deleteGoods(index) {
        this.goodsCart.splice(index,1)
      }


    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .goodsList {
    width: 95%;
    background-color: @color-F0;
    margin: 10px auto 60px auto;
    .goodsList-template {
      display: flex;
      align-items: center;
      margin: 20px auto;
      background-color: @color-F0;
      border-bottom: 5px solid@color-white;
      .goodsList-templatel-left {
        flex: 1;
        margin-right: 10px;
        .icon-xuanze1 {
          font-size: @font-size-large-x;
        }
        .icon-xuanze {
          font-size: @font-size-large-x;
        }
      }
      .goodsList-template-center {
        flex: 3;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

      }
      .goodsList-template-right {
        flex: 6;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .right-top {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;

        }
        .right-center {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .right-center-price {
            color: @color-red;
            margin-right: 20px;
          }

        }
        .right-bottom {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .right-bottom-addMinus {
            width: 100px;
            height: 20px;
            border: 1px solid @color-white;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            .add {
              flex: 2;
              text-align: center;
              font-size: @font-size-large-x;
            }
            .number {
              flex: 3;
              text-align: center;
              background-color: @color-white;
              font-size: @font-size-large;

            }
            .Minus {
              flex: 2;
              text-align: center;
              font-size: @font-size-large-x;
            }
          }
        }

      }
    }
  }

  .cart-footer {
    position: fixed;
    bottom: 0;
    left: auto;
    width: 100%;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: @color-F0;
    .cart-footer-left {
      flex: 2;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: @font-size-large-x;
      .icon-xuanze1 {
        font-size: @font-size-large-x;
        margin-right: 5px;
      }
      .icon-xuanze {
        font-size: @font-size-large-x;
        margin-right: 5px;
      }
    }
    .cart-footer-center {
      flex: 4;
      height: 100%;
      width: 100%;
      font-size: @font-size-large;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cart-footer-right {
      flex: 2;
      height: 100%;
      width: 100%;
      background-color: @color-red;
      display: flex;
      align-items: center;
      justify-content: center;
      color: @color-white;
      font-size: @font-size-large;
    }
  }
</style>

