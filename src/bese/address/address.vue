<template>
  <div v-bind:class="{citySelect:isCitySelect}">
    <div class="citySelect-div">
      <div class="citySelect-div-top">
        <span>填写地址</span>
        <i class="iconfont icon-guanbi " @click="closeModal"></i>
      </div>
      <v-distpicker
        type="mobile"
        @selected="onSelected"
        :province="select.province"
        :city="select.city"
        :area="select.area"
        :placeholders="placeholders"></v-distpicker>
      <div class="citySelect-div-city">地址:{{citys}}</div>
      <div class="citySelect-div-address">
        <input
          name="address"
          type="text"
          v-model="cityDetails"
          @blur="addressBlur(cityDetails)"
          @focus="addressFocus(cityDetails)"
          placeholder="填写详细地址">
        <i class="iconfont icon-right-trangle"></i>
        <p class="TextP">{{addressText}}</p>
      </div>
      <div class="citySelect-div-name">
        <input
          @blur="nameBlur(name)"
          @focus="nameFocus(name)"
          name="name"
          type="text"
          placeholder="姓名"
          v-model="name"/>
        <i class="iconfont icon-right-trangle"></i>
        <p class="TextP">{{nameText}}</p>
      </div>
      <div class="citySelect-div-iphone">
        <input
          @blur="phoneBlur(phone)"
          @focus="phoneFocus(phone)"
          name="phone"
          type="number"
          placeholder="电话"
          v-model="phone"/>
        <i class="iconfont icon-right-trangle"></i>
        <p class="TextP">{{phoneText}}</p>
      </div>
      <button @click="QRTJ">确认提交</button>
      <modal
        :msg="message"
        :isHideModal="HideModal">
      </modal>

    </div>
  </div>

</template>
<script type="text/ecmascript-6">

  import VDistpicker from 'v-distpicker';
  import axios from 'axios';
  import Modal from '../../bese/modal/modal.vue'





  export default {
    name: 'citySelect',
    props: ['isCitySelect','showHideAdd'],
    data() {
      return {
        placeholders: {
          province: '请选择所在省份',
          city: '请选择所在城市',
          area: "请选择所在县区"
        },
        select: {
          province: '',
          city: '',
          area: '',
        },
        cityDetails: '',
        name:'',
        phone:'',
        citys:'',

        message: "",
        HideModal:true,


        addressText: '',
        addressState:false,

        nameText: '',
        nameState:false,

        phoneText: '',
        phoneState:false
      }
    },
    components: {
      Modal,
      'v-distpicker': VDistpicker
    },


    methods: {
      addressBlur(cityDetails) {
        if (cityDetails.length === 0) {
          this.addressText = "详细地址不能为空";
        }
        else {
          this.addressText = "";
          this.addressState = true
        }

      },
      addressFocus(cityDetails) {
        if (cityDetails.length === 0) {
          this.addressText = "请填写地址"
        }
      },

      nameBlur(name) {
        if (name.length === 0) {
          this.nameText = "收货人不能为空";
        }
        else {
          this.nameText = "";
          this.nameState = true
        }

      },
      nameFocus(name) {
        if (name.length === 0) {
          this.nameText = "请填写姓名"
        }
      },

      phoneBlur(phone) {

        let reg = /^1[34578][0-9]{9}$/;
        let flag = reg.test(phone);

        if (phone.length === 0) {
          this.phoneText = "手机号不能为空";
        }
        else if (phone.length > 0 && flag === false) {
          this.phoneText = "手机号格式不正确";
        }
        else {
          this.phoneText = "";
          this.phoneState = true
        }
      },
      phoneFocus(phone) {
        if (phone.length === 0) {
          this.phoneText = "请填写电话";
        }
      },

      onSelected(data) {
        this.citys = data.province.value + data.city.value + data.area.value;


      },


      closeModal() {
        this.isCitySelect1 = true;
        this.$emit("showHideAdd", this.isCitySelect1)

      },


      QRTJ() {
        if (this.citys !== "" && this.phoneState === true && this.nameState === true && this.addressState === true) {
          let address = {
            citys: this.citys,
            cityDetails: this.cityDetails,
            name: this.name,
            phone: this.phone,
          };
          axios.post("/api/setUserAddressList", {
            address: address
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";

                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true;
                  window.location.reload();

                }

                setTimeout(a, 2000);


              }
            })
            .catch((err) => {
              console.log(err)
            });
        }
        else {
          alert("收货信息不能为空")
        }


      }

    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .citySelect {
    display: none;
  }

  .citySelect-div {

    width: 100%;
    height: 240%;
    position: absolute;
    background-color: @color-white;
    top: 0;
    left: 0;
    z-index: 999;
    .citySelect-div-top {
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
      position: relative;
      .icon-guanbi {
        position: absolute;
        right: 20px;
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        font-size: 20px;
        background-color: @color-green;
        color: @color-white;
      }
    }
    .citySelect-div-city{
      width: 95%;
      height: 50px;
      margin: 25px auto;
      border: 1px solid @color-F0;
      line-height: 50px;
      font-size: @font-size-large;
    }
    .citySelect-div-address {
      width: 95%;
      height: 50px;
      margin: 25px auto;
      border: 1px solid @color-F0;
      input {
        width: 90%;
        height: 50px;
        font-size: @font-size-large;
        padding-left: 5px;

      }

    }
    .citySelect-div-name {
      width: 95%;
      height: 50px;
      border: 1px solid @color-F0;
      margin: 25px auto;
      input {
        width: 90%;
        height: 50px;
        font-size: @font-size-large;
        padding-left: 5px;

      }
    }
    .citySelect-div-iphone {
      width: 95%;;
      height: 50px;
      margin: 25px auto;
      border: 1px solid @color-F0;
      input {
        width: 90%;
        height: 50px;
        font-size: @font-size-large;
        padding-left: 5px;

      }
    }
    .TextP{
      color: red;
    }

    button {
      display: block;
      width: 80%;
      margin: 20px auto;
      background-color: @color-green;
      color: @color-white;
      border-radius: 10%;
      font-size: @font-size-medium;
      height: 30px;
      line-height: 30px;
    }

  }


</style>


