<template>
  <div id="classify">
    <search-navbar></search-navbar>
    <main class="classify">
      <section class="classify-left">
        <div class="left-sxclassifys">
          生鲜分类
        </div>
        <div class="left-lists">
          <div v-for="(item,index) in leftLists"
          >
            <div
              :class="{'active':index === num}"
              @click="tab(index)">
              <i :class="item.icon"></i>
              <span>{{item.text}}</span>
            </div>

          </div>
        </div>
      </section>
      <section class="classify-right">

        <div v-for="(item,index) in rightLists"
             v-show=" index == num">
          <div class="classify-right-top">
            <div class="goodsImg">
              <img :src="item.img">
            </div>
            <div class="goodsSort">
              <div class=""
                   @click="defaultGoods(index)"
                   v-bind:class="{divActive:isDefaultGoods}">默认
              </div>
              <div class=""
                   @click="price(index)">
                <div class=""
                     v-bind:class="{divActive:isPrice}">
                  <span>价格</span>
                </div>
                <div class="">
                  <div v-bind:class="{divActive:isupPrice}">
                    <i class="iconfont icon-sanjiao2"></i>
                  </div>
                  <div v-bind:class="{divActive:isdownPrice}">
                    <i class="iconfont icon-sanjiao1"></i>
                  </div>
                </div>
              </div>
              <div class=""
                   @click="salesVolume(index)"
                   v-bind:class="{divActive:isSell}">
                销量
              </div>
              <div class=""
                   @click="screen(index)"
                   v-bind:class="{divActive:isSaixuan}">
                筛选
              </div>
            </div>
          </div>
          <div class="classify-right-bottom">
            <div v-for="(item,index) in goodsList"
                 v-show=" index == num">
              <div class="classify-right-bottom-template"
                   v-for="item in goodsList[num]">
                <img
                  @click="lookGoods(index,item.id,item.index)"
                  :src="item.img" class="template-img">
                <p class="template-title">{{item.title}}</p>
                <p class="template-price">￥{{item.price}}元</p>
                <p class="template-number">月销：{{item.number}}</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
    <div class="loading-container" v-show="!leftLists.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import Loading from '../../bese/loading/loading.vue'
  import axios from 'axios'

  export default {
    components: {
      SearchNavbar,
      Loading
    },
    name: 'classify',
    data() {
      return {
        leftLists: [],
        rightLists: [],
        goodsList: [],
        num: 0,
        isDefaultGoods: true,
        isPrice: false,
        isSell: false,
        isSaixuan: false,
        isupPrice: false,
        isdownPrice: false


      }
    },
    created() {
      this._getClassifyLeft();
      this._getClassifyRight();
    },
    methods: {
      _getClassifyLeft() {
        axios.get('/api/MLeftLists')
          .then((res) => {
            this.leftLists = res.data;
          }).catch((err) => {
          console.log(err)
        })

      },
      _getClassifyRight() {
        axios.get("/api/MRightLists")
          .then((res) => {
            this.rightLists = res.data;
            this.rightLists.forEach((val, index, arr) => {
              this.goodsList.push(arr[index].goodsImg);
            })
          })
          .catch((err) => {
          console.log(err);
        })
      },
      tab(index) {
        this.num = index;
      },
      lookGoods(index, id, sindex) {
        this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
      },
      defaultGoods(index) {
        this.goodsList[index].sort((a, b) => {
          return a.price - b.price
        });
        this.isDefaultGoods = true;
        this.isPrice = false;
        this.isSell = false;
        this.isSaixuan = false;
        this.isdownPrice = false;
        this.isupPrice = false;
      },
      price(index) {
        this.isDefaultGoods = false;
        this.isPrice = true;
        this.isSell = false;
        this.isSaixuan = false;
        this.isdownPrice = true;
        this.isupPrice = false;
        this.goodsList[index].sort((a, b) => {
          return b.price - a.price
        });
      },
      salesVolume(index) {
        this.isDefaultGoods = false;
        this.isPrice = false;
        this.isSell = true;
        this.isSaixuan = false;
        this.isdownPrice = false;
        this.isupPrice = false;
        this.goodsList[index].sort((a, b) => {
          return b.number - a.number
        });
      },
      screen(index) {
        alert("hiehi")
      }


    }

  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .classify {
    display: flex;
    .classify-left {
      flex: 25;
      .left-sxclassifys {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: @font-size-large;
      }
      .left-lists {
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: @color-F0;
        div {
          width: 100%;
          height: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-px_pangxie, .icon-chicken, .icon-niu, .icon-ya, .icon-pig, .icon-kaoquanyang, .icon-xiazi, .icon-yu, .icon-huoguo1, .icon-_tiaoweipin, .icon-Rice {
            color: @color-green;
            font-size: @font-size-large-x;
          }
          span {
            font-size: @font-size-medium-x;
            margin-left: 5px;
          }

        }
        .active {
          background-color: @color-white;
        }
      }
      .price {
        height: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;

        }

      }
    }
    .classify-right {
      flex: 75;
      .classify-right-top {
        margin-top: 5px;
        .goodsImg {
          width: 95%;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }
        .goodsSort {
          width: 95%;
          height: 30px;
          margin: 0 auto;
          border-bottom: 1px solid @color-F0;
          display: flex;
          align-items: center;
          div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: @font-size-medium-x;
          }
          div:nth-child(2) {
            display: flex;
            align-items: center;
            justify-content: center;
            div:first-child {
              flex: 5;
              text-align: right;
            }
            div:last-child {
              flex: 1;
              position: relative;
              .icon-sanjiao2 {
                position: absolute;
                font-size: @font-size-small-s;
                top: -5px;
                right: 10px;
              }
              .icon-sanjiao1 {
                position: relative;
                font-size: @font-size-small-s;
                top: 5px;
                right: 10px;
              }
            }

          }
          .divActive {
            color: red;
          }
        }
      }
      .classify-right-bottom {
        width: 95%;
        margin: 0 auto;

        .classify-right-bottom-template {
          float: left;
          width: 33%;
          text-align: center;
          margin-top: 10px;
          .template-img {
            width: 100%;
          }
          .template-title {
            font-size: @font-size-large;
          }
          .template-price {
            color: @color-red;

          }
          .template-number {
            font-size: @font-size-small-s;
          }
        }
      }

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
