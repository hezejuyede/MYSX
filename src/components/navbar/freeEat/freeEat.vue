<template>
  <div id="newRec">
    <navheader></navheader>
    <search-navbar></search-navbar>
    <div class="newRec-content">
      <div class="newRec-content-top">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in topImg" :key="item.id">
            <img :src="item.img" style="width: 100%">
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="newRec-content-center"></div>
      <div class="newRec-content-bottom">
        <div class="newRec-template"v-for="(item,index) in productList">
          <div class="newRec-template-left" @click="showProduct(index,item.id,item.sindex)">
            <img :src="item.img" alt="">
          </div>
          <div class="newRec-template-right">
            <div class="newRec-template-title"
                 @click="showProduct(index,item.id,item.sindex)">
              亿成优生鲜-{{item.title}}</div>
            <div class="newRec-template-price"
                 @click="showProduct(index,item.id,item.sindex)">
              亿成新品价格：￥{{item.price}}
            </div>
            <div class="newRec-template-cz"
                 @click="addCart(index,item.img, item.title, item.price, item.id)">
              加入购物车
            </div>
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
  import Navheader from "../../../bese/navheader/navheader.vue";
  import YcNavbar from "../../index/navbar/navbar.vue";
  import SearchNavbar from "../../../bese/searchNavbar/seachNavbar.vue";
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {addCart} from '../../../api/config'
  import axios from 'axios'
  import Modal from "../../../bese/modal/modal.vue";


  require('swiper/dist/css/swiper.css');

  export default {
    components: {

      Modal,
      SearchNavbar,
      YcNavbar,
      Navheader,
      swiper,
      swiperSlide,
    },
    name: 'newRec',
    data() {
      return {
        message: "",
        HideModal: true,
        topImg: [{'img': 'http://www.ilqiqi.top/images/mYc/nbi/sy01.png'}],
        swiperOption: {
          direction: "horizontal",
          pagination: ".swiper-pagination",
          prevButton: ".swiper-button-prev",
          nextButton: ".swiper-button-next",
          autoplayDisableOnInteraction: false,
        },
        productList:[],
        productList1: [
          {
            "img":'http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg',
            "title":'珍宝蟹',
            "price":'296',
            "id":'PXL',
            "sindex":5
          },
          {
            "img":'http://www.ilqiqi.top/images/mYc/goods/chichens/6.jpg',
            "title":'鸡胗',
            "price":'296',
            "id":'JXL',
            "sindex":5
          },
          {
            "img":'http://www.ilqiqi.top/images/mYc/goods/crad/6.jpg',
            "title":'鸭肉快',
            "price":'296',
            "id":'YXL',
            "sindex":5
          },
          {
            "img":'http://www.ilqiqi.top/images/mYc/goods/shrimps/6.jpg',
            "title":'维基虾',
            "price":'296',
            "id":'DXL',
            "sindex":5
          },
          {
            "img":'http://www.ilqiqi.top/images/mYc/goods/bolus/6.jpg',
            "title":'火锅丸',
            "price":'296',
            "id":'HGW',
            "sindex":5
          }
        ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
      this._getProductList()
    },
    methods: {
      _getProductList() {
        axios.get("/api/MNavBarSySt")
          .then((res) => {
            this.productList = res.data
          })
          .catch((err) => {
            console.log(err)
          })


      },
      showProduct(index, id, sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
      addCart(index, img, title, price, id) {
        addCart(index, img, title, price, id)
        this.message = "已经加入购物车";
        this.HideModal = false;
        const that = this;

        function a() {
          that.message = "";
          that.HideModal = true
        }

        setTimeout(a, 2000);
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";
  .newRec-content {
    .newRec-content-center {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("http://www.ilqiqi.top/images/mYc/nbi/slsg.png") no-repeat;
      background-size: 100%;

    }
    .newRec-template{
      width: 95%;
      margin: 5px auto 20px auto;
      display: flex;
      border-radius: 10%;
      box-shadow: 1px 2px 3px 2px @color-background-d;
      .newRec-template-left{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 100%;
          border-radius: 50%;
        }

      }
      .newRec-template-right{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 30px;

        .newRec-template-title{
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: @color-blue;
          font-size: @font-size-large;

        }
        .newRec-template-price{
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: @color-red;
        }
        .newRec-template-cz {
          flex: 1;
          width: 60%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: @color-green;
          color: @color-white;
          border-radius: 15%;
        }
      }
    }


  }

</style>


