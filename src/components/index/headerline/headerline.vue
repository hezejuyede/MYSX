<template>
  <div class="index-headerLine">
    <div class="yc-headline" ref="headerline">
      <div ref="headerlineD" class="yc-headline-box">
        <div class="yc-headline-div" v-for="(item,index) in headerLines">
          <span>生鲜头条:</span>
          <router-link to="" class="yc-headline-firsta">
            {{item.text}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';

  export default {
    name: 'index-headerLine',
    data() {
      return {
        headerLines: []
      }
    },
    mounted() {
      this.changeHeaderLine();
    },
    created() {
      this._getheaderLine();
    },
    methods: {
      changeHeaderLine() {
        let headerline = this.$refs.headerline;
        let headerlineD = this.$refs.headerlineD;
        let a = 0;
        setInterval(() => {
          a++;
          if (a == 3) {
            a = 0
          }
          let l = -20 * a;
          headerlineD.style.top = l + "px";
        }, 3000)

      },
      _getheaderLine() {
        axios.get('/api/headerLine')
          .then((res) => {
            this.headerLines = res.data;
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";
  .yc-headline {
    width: 95%;
    margin: 5px auto 5px auto;
    height: 20px;
    position: relative;
    overflow: hidden;
    .yc-headline-box {
      width: 90%;
      height: 60px;
      position: relative;
      top: 0;
      left: 0;
      .yc-headline-div {
        height: 20px;
        span {
          font-size: @font-size-medium-x;
          color: @color-green;
        }
        a {
          color: @color-red;
        }
      }
    }
  }

</style>
