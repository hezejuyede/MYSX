<template>
  <div id="changeAddress">
    <div class="changeAddress-top">
      <i class="iconfont icon-left-trangle" @click="goBack"></i>
      <span>选择收货地址</span>
      <span class="manageAddress" @click="manageAddress">管理</span>
    </div>
    <div class="changeAddress-bottom">
      <div class="changeAddress-bottom-template" v-for="(item,index) in addressList">
        <div class="changeAddress-bottom-template-top">
          {{item.name}}{{item.phone}}
          <span class="szmr" @click="szmr(index)">设为默认</span>
        </div>
        <div class="changeAddress-bottom-template-bottom">
          {{item.citys}}{{item.cityDetails}}

          <i class="iconfont icon-bianji"
             @click="updateAddress(index,item.name,item.phone,item.citys,item.cityDetails,)"></i>
          <i class="iconfont icon-shanchu" @click="deleteAddress(index)"></i>
        </div>
      </div>
    </div>
    <add
      @showHideAdd="showHideAdd"
      :cites="cites"
      :isCitySelect="isCitySelect"></add>
    <update-address
      @showHideUpdateAdd="showHideUpdateAdd"
      :isUpdateCitySelect="isUpdateCitySelect"
      :upindex="index"
      :upname='name'
      :upphone='phone'
      :upcitys='citys'
      :upcityDetails='cityDetails'>
    </update-address>
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
  import UpdateAddress from '../../../bese/address/updateAddress.vue'
  import Modal from '../../../bese/modal/modal.vue'





  export default {
    components: {
      Add,
      Modal,
      UpdateAddress
    },
    name: 'changeAddress',

    data() {
      return {
        addressList: [],
        cites: "",
        isCitySelect: true,
        hideAdd: true,

        message: '',
        HideModal: true,


        isUpdateCitySelect:true,
        index: '',
        name: '',
        phone: '',
        citys: '',
        cityDetails:''
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

      updateAddress(index, name, phone, citys, cityDetails) {
        this.isUpdateCitySelect = false;
        this.index = index;
        this.name = name;
        this.phone = phone;
        this.citys = citys;
        this.cityDetails = cityDetails;



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

      szmr(index) {
        axios.post('/api/mrUserAddressList', {
          index: index
        })
          .then((res) => {
            if (res.data === "1") {
              this.message = "设置成功";
              this.HideModal = false;
              const that = this;

              function a() {
                that.message = "";
                that.HideModal = true;
                window.location.assign("/ChangeAddress")
              }

              setTimeout(a, 2000);
            }
            else if (res.data === "-1") {
              this.message = "设置失败";
              this.HideModal = false;
              const that = this;

              function b() {
                that.message = "";
                that.HideModal = true;
              }

              setTimeout(b, 2000);
            }
          })
          .catch((err)=>{
            console.log(err)
          })

      },


      showHideAdd(ev){
        this.isCitySelect = ev
      },

      showHideUpdateAdd(ev){
        this.isUpdateCitySelect = ev
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
        position: relative;
        .szmr{
          position: absolute;
          top:0;
          right: 0;

        }

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
