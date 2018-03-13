<template>
  <div class="yc-kellsecond">
    <p class="yc-kellsecond-title">亿成限时秒杀</p>
    <div class=" yc-kellsecond-time" id="kstimes">
      <div id="time-div" v-for="(item,index) in KStimeList">
        <div :class="{'active':index === num}"
             @click="tab(index)">
          <p class="pspantime" ref="pspantime1">{{item.date}}</p>
          <p class="jidian">{{item.time}}</p>
        </div>
      </div>
    </div>
    <div class="yc-kellsecond-test">
      <div>
        <span>正在抢购，先下单先得哦</span>
      </div>
      <div class="yc-kellsecond-timeend">
        <span>距结束:</span>
        <span class="num">{{hour1}}</span>
        <span class="num">{{hour2}}</span>
        <span>:</span>
        <span class="num">{{minute1}}</span>
        <span class="num">{{minute2}}</span>
        <span>:</span>
        <span class="num">{{second1}}</span>
        <span class="num">{{second2}}</span>
      </div>
    </div>
    <div id="ks">
      <div class="yc-kellsecond-goods-list">
        <div
          v-for="(item,index) in jx1"
          v-show="isJx1"
          class="yc-kellsecond-goods-list-div">
          <div>
            <img :src="item.img" width="100" height="100" @click="showjx1(index)">
            <span class="yc-kellsecond-link-name">{{item.title}}</span>
            <span class="yc-kellsecond-link-pirce">￥{{item.price}}</span>
            <span class="yc-kellsecond-link-buy">立即购买</span>
          </div>
        </div>
        <div
          v-for="(item,index) in jx2"
          v-show="isJx2"
          class="yc-kellsecond-goods-list-div">
          <div>
            <img :src="item.img" width="100" height="100" @click="showjx2(index)">
            <span class="yc-kellsecond-link-name">{{item.title}}</span>
            <span class="yc-kellsecond-link-pirce">￥{{item.price}}</span>
            <span class="yc-kellsecond-link-buy">立即购买</span>
          </div>
        </div>
        <div
          v-for="(item,index) in jx3"
          v-show="isJx3"
          class="yc-kellsecond-goods-list-div">
          <div>
            <img :src="item.img" width="100" height="100" @click="showjx3(index)">
            <span class="yc-kellsecond-link-name">{{item.title}}</span>
            <span class="yc-kellsecond-link-pirce">￥{{item.price}}</span>
            <span class="yc-kellsecond-link-buy">立即购买</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  export default {
    name: 'yc-kellsecond',
    data() {
      return{
        KStimeList: [],
        jx1: [],
        jx2: [],
        jx3: [],
        isJx1: false,
        isJx2: false,
        isJx3: true,
        num: 0,
        hour1: "0",
        hour2: "1",
        minute1: '0',
        minute2: '0',
        second1: '0',
        second2: '0',
      }
    },
    created() {
      this._getjx();
      this._getKsTime();
      this._putTimeList();
    },
    methods: {
      _getjx() {
        axios.get('api/jx').then((res) => {
          this.jx1 = res.data[0].list1;
          this.jx2 = res.data[1].list2;
          this.jx3 = res.data[2].list3;
        })
      },
      _getKsTime() {
        let times = 2 * 60 * 60;
        let timer = setInterval((() => {
          times--;
          let h = Math.floor(times / (60 * 60));
          let m = Math.floor(times / 60 % 60);
          let s = times % 60;
          /*   this.hour1 = h > 10 ? Math.floor(h / 10) : 0;
             this.hour2 = h % 10;
             this.minute1 = m > 10 ? Math.floor(m / 10) : 0;
             this.minute2 = m % 10;
             this.second1 = s > 10 ? Math.floor(s / 10) : 0;
             this.second2 = s % 10;*/
          if (this.minute1 === 0 && this.minute2 === 0) {
            clearInterval(timer);
          }
        }), 1000);

      },
      _putTimeList() {
        let List = [
          {
            date: "",
            time: "10:00"
          },
          {
            date: "",
            time: "15:00"
          },
          {
            date: "",
            time: "20:00"
          },
        ];
        let nowDate = new Date().toLocaleDateString();
        let timo = List.filter((p) => {
          return p.time == "10:00";
        });
        timo[0].date = nowDate;
        let timo1 = List.filter((p) => {
          return p.time == "15:00";
        });
        timo1[0].date = nowDate;
        let timo2 = List.filter((p) => {
          return p.time == "20:00";
        });
        timo2[0].date = nowDate;
        this.KStimeList = List;
      },
      tab(index) {
        this.num = index;
        if (this.num == 0) {
          this.isJx1 = true;
          this.isJx2 = false;
          this.isJx3 = false;
        }
        else if (this.num == 1) {
          this.isJx2 = true;
          this.isJx1 = false;
          this.isJx3 = false;
        }
        else if (this.num == 2) {
          this.isJx3 = true;

          this.isJx1 = false;
          this.isJx2 = false;
        }
      },
      showjx1(index) {
        this.$router.push({path: '/GoodsDetails'})
      },
      showjx2(index) {
        this.$router.push({path: '/GoodsDetails'})
      },
      showjx3(index) {
        this.$router.push({path: '/GoodsDetails'})
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";

  .yc-kellsecond {
    .yc-kellsecond-title {
      font-size: @font-size-large-x;
      text-align: center;
      color: @color-green;
    }
    .yc-kellsecond-time {
      display: flex;
      align-items: center;
      #time-div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50px;
        background-color: @color-F0;
        border: 1px solid @color-white;
        text-align: center;
      }
      .active {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        border: 1px solid @color-white;
        background-color: @color-green;
      }
    }
    .yc-kellsecond-test {
      width: 95%;
      height: 30px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      div:first-child {
        flex: 1;
        text-align: left;
      }
      .yc-kellsecond-timeend {
        color: @color-red;
        flex: 1;
        text-align: right;
      }
    }
    #ks {
      height: 190px;
      overflow: hidden;
      .yc-kellsecond-goods-list {
        display: flex;
        overflow: scroll;
        overflow-y: hidden;
        .yc-kellsecond-goods-list-div {
          display: flex;
          margin: 10px 0 10px 10px;
          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
              margin-top: 5px;
            }
            span:last-child {
              color: @color-red;
            }
          }

        }
      }

    }
  }


</style>
