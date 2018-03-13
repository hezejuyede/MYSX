<template>
  <div id="search">
    <search-navbar></search-navbar>
    <section class="clearfix recently">
      <div class="top ">
        <div class="">
          <p class="">最近搜索</p>


        </div>
        <div class="">
          <i class="iconfont icon-shanchu" @click="deleteGoods"></i>
        </div>
      </div>

      <div class="bottom" v-for="item in search">
        <p class="searchGoods"  @click="searchGoodsName">{{item.goods}}</p>
      </div>

    </section>

    <section class="hot">
      <div>
        <p class="top">热门搜索</p>
      </div>
      <div class="bottom">
        <div v-for="item in hot ">
          <p class="hotGoods" @click="searchGoodsName">{{item.goods}}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script type="text/ecmascript-6">
  import SearchNavbar from "../../bese/searchNavbar/seachNavbar.vue";
  import axios from 'axios'

  export default {
    components: {SearchNavbar},
    name: 'search',
    data() {
      return {
        search: [],
        hot: [],
      }
    },
    created() {
      this._getSearch();
      this._gethot();
    },
    methods: {
      _getSearch() {
        axios.get('/api/search')
          .then((res) => {
          this.search = res.data;
        })
          .catch((err)=>{
            console.log(err);
          })

      },
      _gethot() {
        axios.get("/api/hot")
          .then((res) => {
          this.hot = res.data;
        })
          .catch((err)=>{
            console.log(err);
          })

      },
      searchGoodsName(){
        axios.post("",{
          goodsID:""
        })
          .then((res)=>{
            console.log(res);
          })
          .catch((err)=>{
          console.log(err)
          })
      },
      deleteGoods(){
        alert("hihi")
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .recently {
    width: 95%;
    margin: 10px auto 20px auto;
    .top {
      width: 100%;
      display: flex;
      div:first-child {
        flex: 1;
        text-align: left;
        font-size: @font-size-large;
      }
      div:last-child {
        flex: 1;
        text-align: right;
        .icon-shanchu {
          font-size: @font-size-large-xx;
        }
      }
    }
    .bottom {
      .searchGoods {
        width: 80px;
        height: 20px;
        display: flex;
        margin-top: 10px;
        border-radius: 10%;
        align-items: center;
        justify-content: center;
        background-color: @color-F0;
        font-size: @font-size-medium;
        color: @color-dialog-background;
        float: left;
        margin: 10px;

      }
    }
  }

  .hot {
    width: 95%;
    margin: 10px auto;
    .top {
      font-size: @font-size-large;
    }
    .bottom {
      width: 100%;
      .hotGoods {
        width: 90px;
        height: 20px;
        display: flex;
        border-radius: 10%;
        float: left;
        margin: 10px;
        align-items: center;
        justify-content: center;
        background-color: @color-F0;
        font-size: @font-size-medium;
        color: @color-dialog-background;
      }
    }

  }


</style>
