<template>
  <div v-bind:class="{confirm:showHideConfirm}">
    <div class="ysx-confirm">
      <div class="confirm-div">
        <div class="confirm-div-top">
          {{confirmMessage}}
        </div>
        <div class="confirm-div-bottom">
          <div class="confirm-div-bottom-left" @click="userConfirm()">确认</div>
          <div class="confirm-div-bottom-right" @click="userCancel()">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'confirm',
    data() {
      return {
        confirm1: '',
        showHideConfirm1: ""
      }
    },
    methods: {
      userConfirm(){
        this.confirm1=true;
        this.$emit("ConfirmEvent",this.confirm1)



      },
      userCancel(){
        this.showHideConfirm1=true;
        this.$emit("hideConfirm",this.showHideConfirm1)

      }

    },
    props: ['confirmMessage', 'showHideConfirm']
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";
  .confirm{
    display: none;
  }
  .ysx-confirm {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: @color-background-d;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .confirm-div {
      width: 300px;
      height: 120px;
      background-color: @color-white;
      display: flex;
      flex-direction: column;
      .confirm-div-top {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: @color-black;
        border-bottom: 1px solid @color-F0;
      }
      .confirm-div-bottom {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .confirm-div-bottom-left {
          width: 50px;
          height: 30px;
          background-color: @color-green;
          color: @color-white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 25px;
          border-radius: 10%;
        }
        .confirm-div-bottom-right {
          width: 50px;
          height: 30px;
          background-color: @color-green;
          color: @color-white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 25px;
          border-radius: 10%;
        }

      }
    }

  }

</style>
