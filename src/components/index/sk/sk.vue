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
    <div>
      <div v-show="num===0" class="yc-kellsecond-test">
        <div v-show="jx1Start ===1" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            请耐心等候
          </div>
          <div class="yc-kellsecond-timeend">
            <span>距开始:</span>
            <span class="num">02</span>
            <span>:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
          </div>
        </div>
        <div v-show="jx1Start ===2" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            正在抢购，先下单先得
          </div>
          <div class="yc-kellsecond-timeend">
            <span>距结束:</span>
            <span class="num">{{hour1}}</span>
            <span>:</span>
            <span class="num">{{minute1}}</span>
            <span>:</span>
            <span class="num">{{second1}}</span>
          </div>
        </div>
        <div v-show="jx1Start ===3" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            已经结束
          </div>
          <div class="yc-kellsecond-timeend">
            <span>已结束:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
          </div>
        </div>
      </div>
      <div v-show="num===1" class="yc-kellsecond-test">
        <div v-show="jx2Start ===1" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            请耐心等候
          </div>
          <div class="yc-kellsecond-timeend">
            <span>距开始:</span>
            <span class="num">02</span>
            <span>:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
          </div>
        </div>
        <div v-show="jx2Start ===2" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            正在抢购，先下单先得
          </div>
          <div class="yc-kellsecond-timeend">
            <span>距结束:</span>
            <span class="num">{{hour2}}</span>
            <span>:</span>
            <span class="num">{{minute2}}</span>
            <span>:</span>
            <span class="num">{{second2}}</span>
          </div>
        </div>
        <div v-show="jx2Start ===3" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            已经结束
          </div>
          <div class="yc-kellsecond-timeend">
            <span>已结束:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
          </div>
        </div>
      </div>
      <div v-show="num===2" class="yc-kellsecond-test">
        <div v-show="jx3Start ===1" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            请耐心等候
          </div>
          <div class="yc-kellsecond-timeend">
            <span>距开始:</span>
            <span class="num">02</span>
            <span>:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
          </div>
        </div>
        <div v-show="jx3Start ===2" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            正在抢购，先下单先得
          </div>
          <div class="yc-kellsecond-timeend">
            <span>距结束:</span>
            <span class="num">{{hour3}}</span>
            <span>:</span>
            <span class="num">{{minute3}}</span>
            <span>:</span>
            <span class="num">{{second3}}</span>
          </div>
        </div>
        <div v-show="jx3Start ===3" class="yc-kellsecond-test-div">
          <div class="yc-kellsecond-leftTitle">
            已经结束
          </div>
          <div class="yc-kellsecond-timeend">
            <span>已结束:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
            <span>:</span>
            <span class="num">00</span>
          </div>
        </div>
      </div>
    </div>
    <div id="ks">
      <div class="yc-kellsecond-goods-list">
        <div
          v-for="(item,index) in jx1"
          v-show="isJx1"
          class="yc-kellsecond-goods-list-div">
          <div>
            <img :src="item.img" width="100" height="100" @click="showjx1(index,item.id,item.sindex)">
            <span class="yc-kellsecond-link-name">{{item.title}}</span>
            <span class="yc-kellsecond-link-pirce">￥{{item.price}}</span>
            <span class="yc-kellsecond-link-buy" @click="showjx1(index,item.id,item.sindex)">立即购买</span>
          </div>
        </div>
        <div
          v-for="(item,index) in jx2"
          v-show="isJx2"
          class="yc-kellsecond-goods-list-div">
          <div>
            <img :src="item.img" width="100" height="100" @click="showjx2(index,item.id,item.sindex)">
            <span class="yc-kellsecond-link-name">{{item.title}}</span>
            <span class="yc-kellsecond-link-pirce">￥{{item.price}}</span>
            <span class="yc-kellsecond-link-buy" @click="showjx2(index,item.id,item.sindex)">立即购买</span>
          </div>
        </div>
        <div
          v-for="(item,index) in jx3"
          v-show="isJx3"
          class="yc-kellsecond-goods-list-div">
          <div>
            <img :src="item.img" width="100" height="100" @click="showjx3(index,item.id,item.sindex)">
            <span class="yc-kellsecond-link-name">{{item.title}}</span>
            <span class="yc-kellsecond-link-pirce">￥{{item.price}}</span>
            <span class="yc-kellsecond-link-buy" @click="showjx3(index,item.id,item.sindex)">立即购买</span>
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
  import axios from 'axios';
  import Modal from '../../../bese/modal/modal.vue'

  export default {
    name: 'yc-kellsecond',
    components: {
      Modal
    },
    data() {
      return{
        message: "",
        HideModal: true,
        KStimeList: [],
        jx1: [],
        jx2: [],
        jx3: [],
        isJx1: false,
        isJx2: false,
        isJx3: true,
        num: 0,
        jx1Start:'',
        jx2Start:'',
        jx3Start:'',

        hour1: "0" + 1,
        minute1: 59,
        second1: 60,

        hour2: "0" + 1,
        minute2: 59,
        second2: 60,

        hour3: "0" + 1,
        minute3: 59,
        second3: 60,






      }
    },
    created() {
      this._getjx();
      this._putTimeList();
      this._getNowTime();

    },
    methods: {
      _getjx() {
        axios.get('/api/jx').then((res) => {
          this.jx1 = res.data[0].list1;
          this.jx2 = res.data[1].list2;
          this.jx3 = res.data[2].list3;
        })
      },
      _getKsTime() {



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
          return p.time === "10:00";
        });
        timo[0].date = nowDate;
        let timo1 = List.filter((p) => {
          return p.time === "15:00";
        });
        timo1[0].date = nowDate;
        let timo2 = List.filter((p) => {
          return p.time === "20:00";
        });
        timo2[0].date = nowDate;
        this.KStimeList = List;
      },


      _getNowTime() {
        let date = new Date();
        let Hours = date.getHours();

        if (Hours >= 10 && Hours < 15) {
          this.num = 0;
          this.isJx1 = true;
          this.isJx2 = false;
          this.isJx3 = false;

          this.jx1Start = 2;
          this.jx2Start = 1;
          this.jx3Start = 1;

          if (this.jx1Start === 2) {
            let timer = setInterval((() => {
              this.second1--;
              if (this.second1 < 10) {
                this.second1 = "0" + this.second1;
                if (this.second1 === "0" + 0) {
                  this.second1 = 59;
                  this.minute1--;
                  if (this.minute1 < 10) {
                    this.minute1 = "0" + this.minute1;
                    if (this.minute1 === "0" + 0) {
                      this.minute1 = 59;
                      this.hour1 = "0" + 0;
                      if (this.hour1 = "0" + 0 && this.minute1 === "0" + 0) {
                        window.clearInterval(timer)
                      }
                    }
                  }
                }
              }
            }), 1000);
          }
        }
        else if (Hours >= 15 && Hours < 20) {
          this.num = 1;
          this.isJx2 = true;
          this.isJx1 = false;
          this.isJx3 = false;

          this.jx1Start = 3;
          this.jx2Start = 2;
          this.jx3Start = 1;


          if (this.jx2Start === 2) {
            let timer = setInterval((() => {
              this.second2--;
              if (this.second2 < 10) {
                this.second2 = "0" + this.second2;
                if (this.second2 === "0" + 0) {
                  this.second2 = 59;
                  this.minute2--;
                  if (this.minute2 < 10) {
                    this.minute2 = "0" + this.minute2;
                    if (this.minute2 === "0" + 0) {
                      this.minute2 = 59;
                      this.hour2 = "0" + 0;
                      if (this.hour2 = "0" + 0 && this.minute2 === "0" + 0) {
                        window.clearInterval(timer)
                      }
                    }
                  }
                }
              }
            }), 1000);
          }

        }
        else if (Hours >= 20 || Hours < 10) {
          this.num = 2;
          this.isJx3 = true;
          this.isJx1 = false;
          this.isJx2 = false;

          this.jx1Start = 1;
          this.jx2Start = 3;
          this.jx3Start = 2;

          if (this.jx3Start === 2) {
            let timer = setInterval((() => {
              this.second3--;
              if (this.second3 < 10) {
                this.second3 = "0" + this.second3;
                if (this.second3 === "0" + 0) {
                  this.second3 = 59;
                  this.minute3--;
                  if (this.minute3 < 10) {
                    this.minute3 = "0" + this.minute3;
                    if (this.minute3 === "0" + 0) {
                      this.minute3 = 59;
                      this.hour3 = "0" + 0;
                      if (this.hour3 = "0" + 0 && this.minute3 === "0" + 0) {
                        window.clearInterval(timer)
                      }
                    }
                  }
                }
              }
            }), 1000);
          }


        }

      },



      tab(index) {
        this.num = index;
        this.sIndex=index;
        if (this.num === 0) {
          this.isJx1 = true;
          this.isJx2 = false;
          this.isJx3 = false;
        }
        else if (this.num === 1) {
          this.isJx2 = true;
          this.isJx1 = false;
          this.isJx3 = false;
        }
        else if (this.num === 2) {
          this.isJx3 = true;

          this.isJx1 = false;
          this.isJx2 = false;
        }
      },

      showjx1(index,id,sindex) {
        if (this.jx1Start === 2) {
          this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
        }
        else if (this.jx1Start === 1) {
          this.message = "秒杀还没有开始";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
        else if (this.jx1Start === 3) {
          this.message = "已经错过秒杀时间，请下次购买";
          this.HideModal = false;
          const that = this;

          function b() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(b, 2000);
        }

      },
      showjx2(index,id,sindex) {
        if (this.jx2Start === 2) {
          this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
        }
        else if (this.jx2Start === 1) {
          this.message = "秒杀还没有开始";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
        else if (this.jx2Start === 3) {
          this.message = "已经错过秒杀时间，请下次购买";
          this.HideModal = false;
          const that = this;

          function b() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(b, 2000);
        }
      },
      showjx3(index,id,sindex) {
        if (this.jx3Start === 2) {
          this.$router.push({path: "/GoodsDetails/", query: {id: id, index: sindex}})
        }
        else if (this.jx3Start === 1) {
          this.message = "秒杀还没有开始";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
        else if (this.jx3Start === 3) {
          this.message = "已经错过秒杀时间，请下次购买";
          this.HideModal = false;
          const that = this;

          function b() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(b, 2000);
        }
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
      width: 100%;
      margin: 0 auto;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .yc-kellsecond-test-div{
        width: 95%;
        margin: 0 auto;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .yc-kellsecond-leftTitle{
        flex: 1;
        display: flex;
        align-items: center;
      }
      .yc-kellsecond-timeend {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: @color-red;
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
          >div{
            width: 130px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 10px 0 10px 10px;
            .yc-kellsecond-link-name{
              margin: 2.5px auto;
            }
            .yc-kellsecond-link-pirce{
              margin: 2.5px auto;
              color: @color-red;
            }
            .yc-kellsecond-link-buy{
              margin: 2.5px auto;
              width: 70px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10%;
              background-color: @color-green;
              color: @color-white;
            }
          }
        }
      }

    }
  }



</style>
