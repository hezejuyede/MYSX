<template>
  <div v-bind:class="{hideModal:isHideModal}">
    <div class="modal">
      <div class="modal-message">
        {{msg}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'modal',
    data() {
      return {
      }

    },
    methods: {

    },
    props: ['msg','isHideModal']
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .modal {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-message {
      width: 250px;
      height: 100px;
      color: @color-white;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10%;
      background-color: @color-background-dd;
    }

  }
  .hideModal{
    display: none;
  }

</style>
