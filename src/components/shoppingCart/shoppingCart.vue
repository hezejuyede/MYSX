<template>
  <div class="myShoppingCart">
    <div v-show="CartLength===0" class="noShoppingCart">
      <search-navbar></search-navbar>
      <div class="noShoppingCart-bottom">
        <img src="../../common/image/logo.png" alt="" class="">
        购物车为空
      </div>
    </div>
    <div v-show="CartLength===1" id="shoppingCart">
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
              <span class="right-center-price">价格：￥{{goodsPrice}}</span>
            </div>
            <div class="right-bottom">
              <div class="right-bottom-addMinus">
                <span class="add" @click="minusGoods(index)">-</span>
                <span class="number" ref="numberGoods">{{item.num}}</span>
                <span class="Minus" @click="addGoods(index)">+</span>
              </div>
              <div>
                <span
                  class="follow"
                  @click="followGoods(index,item.img,item.title,item.num)">
                   移到收藏
                </span>
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
          <div class="" v-show="oneSelect===true">
            <div class="">
              <span>一共</span>
              <span ref="zg">{{oneGoodsNumber}}件</span>
            </div>
           <div class="">
             <span>总价</span>
             <span ref="zj">{{oneGoodsPrice}}元</span>
           </div>
          </div>
          <div class="" v-show="allSelect===true">
            <div class="">
              <span>一共</span>
              <span ref="zg">{{allGoodsNumber}}件</span>
            </div>
            <div class="">
              <span>总价</span>
              <span ref="zj">{{allGoodsPrice}}元</span>
            </div>


          </div>
        </div>
        <div class="cart-footer-right">
          <span class="" @click="gotoJS">结算</span>
        </div>
      </section>
      <confirm
        @hideConfirm="hideConfirm"
        @ConfirmEvent="confirmEvent"
        :confirmMessage="confirmMessage"
        :showHideConfirm="showHideConfirm"></confirm>
      <div class="loading-container" v-show="!imgs.length">
        <loading></loading>
      </div>
      <modal
        :msg="message"
        :isHideModal="HideModal">
      </modal>
    </div>
  </div>
</template>




<script type="text/ecmascript-6">
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import Confirm from '../../bese/confirm/confirm.vue';
  import Loading from '../../bese/loading/loading.vue';
  import axios from 'axios';
  import Modal from '../../bese/modal/modal.vue'
  import {addCart, getUserShoppingCart} from '../../api/config'

  export default {
    components: {
      SearchNavbar,
      Confirm,
      Loading,
      Modal
    },
    name: 'shoppingCart',
    data() {
      return {
        imgs: [],
        message: "",
        HideModal: true,
        CartLength: '',
        goodsCartLength: '',
        showHideConfirm: true,
        confirmMessage: '确认删除',
        index: '',
        confirm: false,
        goodsCart: [],

        goodsPrice: 0,


        allGoodsPrice: 0,
        allGoodsNumber: 0,
        allSelect : true,


        oneSelect:false,
        oneGoodsPrice: 0,
        oneGoodsNumber: 0,
      }

    },
    mounted() {

    },
    created() {
      this._getShoppingCart();
      setTimeout(() => {
        this._getBanner();
      }, 2000);

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
      //判断购物车是否为空
      _getShoppingCart() {
        if (localStorage.getItem("ShoppingCart") === null) {

          this.CartLength = 0
        }
        else {
          this.CartLength = 1;
          //获得购物车数据
          if (sessionStorage.getItem("userInfo") === null) {
            let shoppingCart = localStorage.getItem("ShoppingCart");
            shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
            this.goodsCart = shoppingCart.productlist;
            this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;
            this.goodsNumber = this.goodsCart[0].num;
            this.allGoodsPrice = shoppingCart.totalAmount;
            this.allGoodsNumber = shoppingCart.totalNumber;
          }
          else {
            let shoppingCart = localStorage.getItem("ShoppingCart");
            shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
            axios.post('/api/shoppingCart', {
              shoppingCart: shoppingCart
            })
              .then((res) => {
                this.goodsCart = res.data.productlist;
                this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;
                this.allGoodsPrice = res.data.totalAmount;
                this.allGoodsNumber = res.data.totalNumber
              })
              .catch((err) => {
                console.log(err)
              })
          }
        }
      },

      //点击取消是隐藏模态框
      hideConfirm(ev) {
        this.showHideConfirm = ev
      },
      //点击确认后进行删除
      confirmEvent(ev) {
        this.confirm = ev;
        this.showHideConfirm = ev;
        let index = this.index;
        if (this.confirm === true) {
          if (sessionStorage.getItem("userInfo") === null) {

            let id = this.goodsCart[index].id;
            let ShoppingCart = localStorage.getItem("ShoppingCart");
            let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
            let productlist = jsonstr.productlist;


            if (productlist.length > 1) {
              let list = [];
              for (let i in productlist) {
                if (productlist[i].id === id) {
                  jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - parseInt(productlist[i].num);
                  jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseInt(productlist[i].num) * parseFloat(productlist[i].price);
                }
                else {
                  list.push(productlist[i]);
                }
              }
              jsonstr.productlist = list;
              localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));
              getUserShoppingCart();
              let shoppingCart = localStorage.getItem("ShoppingCart");
              shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
              this.allGoodsPrice = shoppingCart.totalAmount;
              this.allGoodsNumber = shoppingCart.totalNumber;
              this.goodsCart.splice(index, 1);
            }
            else if (productlist.length === 1) {
              this.goodsCart.splice(index, 1);
              localStorage.clear("ShoppingCart");
            }

          }
          else {

            let id = this.goodsCart[index].id;
            let ShoppingCart = localStorage.getItem("ShoppingCart");
            let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
            let productlist = jsonstr.productlist;

            if (productlist.length > 1) {
              let list = [];
              for (let i in productlist) {
                if (productlist[i].id === id) {
                  jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - parseInt(productlist[i].num);
                  jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseInt(productlist[i].num) * parseFloat(productlist[i].price);
                }
                else {
                  list.push(productlist[i]);
                }
              }
              jsonstr.productlist = list;
              localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));
              getUserShoppingCart();
              let shoppingCart = localStorage.getItem("ShoppingCart");
              shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
              this.allGoodsPrice = shoppingCart.totalAmount;
              this.allGoodsNumber = shoppingCart.totalNumber;
              this.goodsCart.splice(index, 1);
            }
            else if (productlist.length === 1) {
              this.goodsCart.splice(index, 1);
              localStorage.clear("ShoppingCart");

            }


          }
        }

      },

      //点击删除显示模态框
      deleteGoods(index) {
        this.showHideConfirm = false;
        this.index = index
      },

      //商品数量相加
      addGoods(index) {
        if (sessionStorage.getItem("userInfo") === null) {
          let id = this.goodsCart[index].id;
          let img = this.goodsCart[index].img;
          let title = this.goodsCart[index].title;
          let price = this.goodsCart[index].price;
          addCart(index, img, title, price, id);
          this.goodsCart[index].num++;
          this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;
          let shoppingCart = localStorage.getItem("ShoppingCart");
          shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
          this.allGoodsPrice = shoppingCart.totalAmount;
          this.allGoodsNumber = shoppingCart.totalNumber;

        }
        else {
          let id = this.goodsCart[index].id;
          let img = this.goodsCart[index].img;
          let title = this.goodsCart[index].title;
          let price = this.goodsCart[index].price;
          addCart(index, img, title, price, id);
          getUserShoppingCart();
          this.goodsCart[index].num++;
          this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;
          let shoppingCart = localStorage.getItem("ShoppingCart");
          shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
          this.allGoodsPrice = shoppingCart.totalAmount;
          this.allGoodsNumber = shoppingCart.totalNumber;


        }

      },

      //商品数量减少
      minusGoods(index) {
        if (this.goodsCart[index].num > 1) {
          let id = this.goodsCart[index].id;
          let ShoppingCart = localStorage.getItem("ShoppingCart");
          let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
          let productlist = jsonstr.productlist;
          if (productlist[index].id === id) {
            productlist[index].num--

          }
          if (jsonstr.totalNumber > 1) {
            jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - 1;
          }
          if (jsonstr.totalAmount > productlist[index].price) {
            jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseFloat(productlist[index].price);
          }

          localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));

          this.goodsCart[index].num--;
          this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;
          let shoppingCart = localStorage.getItem("ShoppingCart");
          shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
          this.allGoodsPrice = shoppingCart.totalAmount;
          this.allGoodsNumber = shoppingCart.totalNumber;

        }
        else {
          if (this.goodsCart[index].num > 1) {
            let id = this.goodsCart[index].id;
            let ShoppingCart = localStorage.getItem("ShoppingCart");
            let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
            let productlist = jsonstr.productlist;
            if (productlist[index].id === id) {
              productlist[index].num--

            }
            if (jsonstr.totalNumber > 1) {
              jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - 1;
            }
            if (jsonstr.totalAmount > productlist[index].price) {
              jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseFloat(productlist[index].price);
            }

            localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));

            getUserShoppingCart();
            this.goodsCart[index].num--;
            this.goodsPrice = this.goodsCart[0].num * this.goodsCart[0].price;
            let shoppingCart = localStorage.getItem("ShoppingCart");
            shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
            this.allGoodsPrice = shoppingCart.totalAmount;
            this.allGoodsNumber = shoppingCart.totalNumber;

          }
        }
      },

      //非全选商品
      oneChange(index) {
        this.oneSelect = true;
        this.allSelect = false;
        let numbier = 0;
        let price = 0;
        const icon = this.$refs.xuanze;
        const allicon = this.$refs.allChange;

        if (this.$refs.xuanze[index].className === 'iconfont icon-xuanze') {
          this.$refs.xuanze[index].className = 'iconfont icon-xuanze1'
          for (let i = 0; i < icon.length; i++) {
            if (icon[i].className === 'iconfont icon-xuanze') {
              this.$refs.allChange.className = 'iconfont icon-xuanze';
              if (icon[i].className === 'iconfont icon-xuanze1'){
                this.$refs.allChange.className = 'iconfont icon-xuanze1'
              }


            }
            else if (icon[i].className === 'iconfont icon-xuanze1') {
              this.$refs.allChange.className = 'iconfont icon-xuanze1'
            }
          }
        }
        else if (this.$refs.xuanze[index].className === 'iconfont icon-xuanze1') {
          this.$refs.xuanze[index].className = 'iconfont icon-xuanze'
          for (let i = 0; i < icon.length; i++) {
            if (icon[i].className === 'iconfont icon-xuanze') {
              this.$refs.allChange.className = 'iconfont icon-xuanze';
              if (icon[i].className === 'iconfont icon-xuanze1'){
                this.$refs.allChange.className = 'iconfont icon-xuanze1'
              }


            }
            else if (icon[i].className === 'iconfont icon-xuanze1') {
              this.$refs.allChange.className = 'iconfont icon-xuanze1'
            }
          }
        }



      },


      //全选商品
      allchange() {

        const icon = this.$refs.xuanze;
        const allChange = this.$refs.allChange;
        if (allChange.className === 'iconfont icon-xuanze1') {
          allChange.className = 'iconfont icon-xuanze';
          for (let i = 0; i < icon.length; i++) {
            icon[i].className = 'iconfont icon-xuanze'
          }
          this.allSelect = true;
          this.oneSelect = false;

        }
        else if (allChange.className === 'iconfont icon-xuanze') {
          allChange.className = 'iconfont icon-xuanze1';
          for (let i = 0; i < icon.length; i++) {
            icon[i].className = 'iconfont icon-xuanze1'
          }
          this.allSelect = false;
          this.oneSelect = true;
        }
      },

      //收藏
      followGoods(index, img, title, num) {
        if (sessionStorage.getItem("userInfo") === null) {
          this.message = "登录才能收藏";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true;
          }

          setTimeout(a, 2000);
        }
        else {
          let id = this.goodsCart[index].id;
          let ShoppingCart = localStorage.getItem("ShoppingCart");
          let jsonstr = JSON.parse(ShoppingCart.substr(1, ShoppingCart.length));
          let productlist = jsonstr.productlist;

          if (productlist.length > 1) {
            let list = [];
            for (let i in productlist) {
              if (productlist[i].id === id) {
                jsonstr.totalNumber = parseInt(jsonstr.totalNumber) - parseInt(productlist[i].num);
                jsonstr.totalAmount = parseFloat(jsonstr.totalAmount) - parseInt(productlist[i].num) * parseFloat(productlist[i].price);
              }
              else {
                list.push(productlist[i]);
              }
            }
            jsonstr.productlist = list;
            localStorage.setItem("ShoppingCart", "'" + JSON.stringify(jsonstr));
            getUserShoppingCart();
            let shoppingCart = localStorage.getItem("ShoppingCart");
            shoppingCart = JSON.parse(shoppingCart.substr(1, shoppingCart.length));
            this.allGoodsPrice = shoppingCart.totalAmount;
            this.allGoodsNumber = shoppingCart.totalNumber;
            this.goodsCart.splice(index, 1);
          }
          else if (productlist.length === 1) {
            localStorage.clear("ShoppingCart");
          }
          let FollowGoods =
            {
              img: img,
              title: title,
              goodsPrice: this.goodsPrice,
              num: num

            };
          axios.post("/api/setFollowGoods", {
            FollowGoods: FollowGoods
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "收藏成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true;
                  that.goodsCart.splice(index, 1);
                }

                setTimeout(a, 2000);
              }
              else if (res.data === "-1") {
                this.message = "收藏失败";
                this.HideModal = false;
                const that = this;

                function b() {
                  that.message = "";
                  that.HideModal = true;
                  that.goodsCart.splice(index, 1);
                }

                setTimeout(b, 2000);
              }
              else if (res.data === "-2") {
                this.message = "登录才能收藏";
                this.HideModal = false;
                const that = this;

                function c() {
                  that.message = "";
                  that.HideModal = true;
                }

                setTimeout(c, 2000);
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },

      gotoJS() {
        this.$router.push({path: "/BuyProduct"})
      }

    }


  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .myShoppingCart {
    width: 100%;
    height: 100%;
    .noShoppingCart{
      width: 100%;
      height: 100%;
      .noShoppingCart-bottom {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        font-size: @font-size-large-xxxxx;
        img{
          margin-bottom: 50px;
        }
      }
    }

  }



  .goodsList {
    width: 95%;
    background-color: @color-F0;
    margin: 10px auto 60px auto;
    .goodsList-template {
      display: flex;
      align-items: center;
      margin: 20px auto;
      background-color: @color-F0;
      border-bottom: 5px solid @color-white;
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

  .loading-container {
    position: absolute;
    max-width: 640px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

</style>

