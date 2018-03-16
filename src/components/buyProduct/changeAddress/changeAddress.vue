<template>
  <div id="changeAddress">
    <div class="changeAddress-top">
      <i class="iconfont icon-left-trangle" @click="goBack"></i>
      <span>选择收货地址</span>
      <span class="manageAddress" @click="manageAddress">管理</span>
    </div>
    <div class="changeAddress-bottom">
      <div class="changeAddress-bottom-template" v-for="(item,index) in addressList">
        <div class="changeAddress-bottom-template-top">{{item.top}}</div>
        <div class="changeAddress-bottom-template-bottom">
          {{item.bottom}}
          <i class="iconfont icon-bianji" @click="updateAddress(index)"></i>
          <i class="iconfont icon-shanchu" @click="deleteAddress(index)"></i>
        </div>
      </div>
    </div>
    <add
      @showHideAdd="showHideAdd"
      :cites="cites"
      :isCitySelect="isCitySelect"></add>
    <modal
      :msg="message"
      :isHideModal="HideModal">
    </modal>
    <div class="newAddress">
      <span @click="addAddress">新增收货地址</span>
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Add from "../../../bese/address/address.vue"
  import Modal from '../../../bese/modal/modal.vue'





  export default {
    components: {
      Add,
      Modal
    },
    name: 'changeAddress',

    data() {
      return {
        addressList: [],
        cites:"",
        isCitySelect:true,
        hideAdd: true,
        message:'',
        HideModal:true

      }
    },
    created() {
      this._getUserInfo();
      this._getAddress();
    },
    methods: {
      _getUserInfo() {
      },
      _getAddress() {
        axios.post("/api/getUserAddressList")
          .then((res) => {
            if (res.data.length > 0) {
              this.addressList = res.data;
            }

          })
          .catch((err) => {
            console.log(err)
          })
      },
      addAddress() {
        this.isCitySelect = false;

      },
      updateAddress(index) {
        axios.post("/updateUserAddressList",{
          index:index
        })
          .then((res) => {

          })
          .catch((err) => {
          })
      },

      deleteAddress(index) {
        axios.post("/api/deleteUserAddressList",{
          index:index
        })
          .then((res) => {
            if (res.data === "1") {
              this.message = "删除成功";
              this.HideModal = false;
              const that = this;

              function a() {
                that.message = "";
                that.HideModal = true;
                window.location.assign("/ChangeAddress")
              }

              setTimeout(a, 2000);
            }
          })
          .catch((err) => {
          })
      },

      goBack() {
        this.$router.push({path: "/BuyProduct"})
      },

      manageAddress() {
        alert("hhahah")
      },

      showHideAdd(ev){
        this.isCitySelect = ev
      }

    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";

  #changeAddress {
    background-color: @color-F0;
    .changeAddress-top {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: @font-size-large;
      position: relative;
      background-color: @color-white;
      border-bottom: 1px solid @color-F0;
      .icon-left-trangle {
        position: absolute;
        top: 0;
        left: 20px;
        font-size: @font-size-large-xxxxx;

      }
      .manageAddress {
        position: absolute;
        top: 0;
        right: 20px;
        font-size: @font-size-large;
      }
    }
    .changeAddress-bottom-template {
      border-bottom: 1px solid @color-F0;
      margin-bottom: 5px;
      background-color: @color-white;
      .changeAddress-bottom-template-top {
        width: 95%;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;

      }
      .changeAddress-bottom-template-bottom {
        width: 95%;
        margin: 0 auto;
        height: 60px;
        position: relative;
        .icon-bianji{
          font-size: @font-size-large-xx;
          position: absolute;
          bottom: 10px;
          right: 40px;
        }
        .icon-shanchu{
          font-size: @font-size-large-xx;
          position: absolute;
          bottom: 10px;
          right: 5px;
        }

      }

    }
    .newAddress{
      width: 100%;
      position: fixed;
      bottom: 0;
      height: 50px;
      z-index: 99;
      background-color: @color-red;
      color: @color-white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: @font-size-large;
    }

  }

</style>
