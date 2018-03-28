<template>
  <div id="register">
    <header class="register-header">
      <i class="iconfont icon-left-trangle" @click="backHome"></i>
      <h3>亿成用户注册</h3>
    </header>
    <main class="register-main">
      <section>
        <div class="input-div">
          <div class="">用户名:</div>
          <div class="">
            <input
              @blur="username1Blur(username1)"
              @focus="username1Focus(username1)"
              type="text"
              placeholder="请输入用户名"
              v-model="username1">
          </div>
        </div>
        <div class="errText">
          {{username1ErrText}}
        </div>
      </section>
      <section >
        <div class="input-div">
          <div class="">密码:</div>
          <div class="">
            <input
              @blur="password1Blur(password1)"
              @focus="password1Focus(password1)"
              type="password"
              placeholder="请输入密码" v-model="password1">
          </div>
        </div>
        <div class="errText">
          {{password1ErrText}}
        </div>
      </section>
      <section >
        <div class="input-div">
          <div class="">确认密码:</div>
          <div class="">
            <input

              @blur="password2Blur(password2)"
              @focus="password2Focus(password2)"
              type="password"
              placeholder="请输入确认密码"
              v-model="password2">
          </div>
        </div>
        <div class="errText">
          {{password2ErrText}}
        </div>
      </section>
      <section >
        <div class="input-div">
          <div class="">邮箱:</div>
          <div class="">
            <input
              @blur="emailBlur(email)"
              @focus="emailFocus(email)"
              type="text"
              placeholder="请输入邮箱"
              v-model="email">
          </div>
        </div>
        <div class="errText">
          {{emailErrText}}
        </div>
      </section>
      <section >
        <div class="input-div">
          <div class="">手机号:</div>
          <div class="">
            <input

              @blur="phoneBlur(phone)"
              @focus="phoneFocus(phone)"
              type="text"
              placeholder="请输入手机号"
              v-model="phone">
          </div>
        </div>
        <div class="errText">
          {{phoneErrText}}
        </div>
      </section>
      <modal
        :msg="message"
        :isHideModal="HideModal">
      </modal>
    </main>
    <footer class="register-footer">
      <div class="" @click="register">
        <span>点击注册</span>
      </div>
    </footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import Modal from '../../bese/modal/modal.vue'
  import {getNowTime} from '../../api/config'
  export default {
    name: 'register',
    data(){
      return {
        message: '',
        HideModal: true,

        username1: '',
        username1ErrText:'',
        username1State: false,


        password1: '',
        password1ErrText: '',
        password1State: false,



        password2: '',
        password2ErrText: '',
        password2State: false,



        email: '',
        emailErrText: '',
        emailState: false,



        phone: '',
        phoneErrText: '',
        phoneState: false,



      }
    },
    components: {Modal},
    methods: {
      username1Blur(username1) {
        let value = username1;

        if (value.length === 0) {
          this.username1ErrText = "用户名不能为空";
        }
        else if (value.length < 3) {
          this.username1ErrText = "用户名至少为3位";
        }
        else {
          this.username1ErrText = "";
          this.username1State = true
        }

      },

      username1Focus(username1) {

        if (username1.length === 0) {
          this.username1ErrText = "请填写至少4位的用户名";
        }
      },


      password1Blur(password1) {

        let value = password1;

        if (value.length === 0) {
          this.password1ErrText = "密码不能为空";
        }
        else if (value.length < 6) {
          this.password1ErrText = "密码不能少于6位";
        }

        else {
          this.password1ErrText = "";
          this.password1State = true
        }

      },

      password1Focus(password1) {

        if (password1.length === 0) {
          this.password1ErrText = "请填写至少6位密码";
        }

      },



      password2Blur(password2) {
        let password1 =this.password1;

        if (password2.length === 0) {
          this.password2ErrText = "确认密码不能为空";
        }
        else if (password2.length > 0 && password2 !== password1) {
          this.password2ErrText = "两次密码不一样";
        }
        else {
          this.password2ErrText = "";
          this.password2State = true
        }
      },

      password2Focus(password2) {
        if (password2.length === 0) {
          this.password2ErrText = "请填写确认密码";
        }
      },


      emailBlur(email) {
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        let flag = reg.test(email);

        if (email.length === 0) {
          this.emailErrText = "邮箱不能为空";
        }
        else if (email.length > 0 && flag ===false ) {
          this.emailErrText = "邮箱格式错误";
        }
        else {
          this.emailErrText = "";
          this.emailState = true
        }
      },

      emailFocus(email) {
        if (email.length === 0) {
          this.emailErrText = "请填写邮箱";
        }
      },


      phoneBlur(phone)  {
        let reg = /^1[34578][0-9]{9}$/;
        let flag = reg.test(phone);
        if (phone.length === 0) {
          this.phoneErrText = "手机号不能为空";
        }
        else if (flag ===false) {
          this.phoneErrText = "手机号格式不正确";
        }
        else {
          this.phoneErrText = "";
          this.phoneState = true
        }
      },

      phoneFocus(phone) {
        if (phone.length === 0) {
          this.phoneErrText = "请填写手机号";
        }
      },


      backHome() {
        this.$router.push({path: "/login"})
      },
      register() {
        if (this.username1State === true && this.password1State === true && this.password2State === true && this.emailState === true && this.phoneState === true) {

          let time = getNowTime();
          axios.post('/api/userRegister', {
            username1: this.username1,
            password1: this.password1,
            password2: this.password2,
            email: this.email,
            phone: this.phone,
            time: time
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "注册成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true;
                  that.$router.push({path: "/Login"})
                }

                setTimeout(a, 2000);


              }
              else if (res.data === "2") {
                this.message = "该用户已经注册";
                this.HideModal = false;
                const that = this;

                function b() {
                  that.message = "";
                  that.HideModal = true;
                  that.username1 = '';
                }

                setTimeout(b, 2000);


              }
              else if (res.data === "-1") {
                this.message = "注册失败";
                this.HideModal = false;
                const that = this;

                function c() {
                  that.message = "";
                  that.HideModal = true;
                }

                setTimeout(c, 2000);


              }
            })
            .catch((err) => {
              console.log(err)
            })
        }


      }
    },
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";
  .register-header{
    height: 50px;
    background-color: @color-F0;
    position: relative;
    text-align: center;
    line-height: 50px;
    font-size: @font-size-medium-x;
    .icon-left-trangle{
      font-size: @font-size-large-xxxxx;
      position: absolute;
      left: 10px;
    }

  }
  .register-main{
    section {
      height: 70px;
      border-bottom: 1px solid @color-F0;
      position: relative;
      .input-div{
        width: 90%;
        height: 50px;
        line-height: 50px;
        margin: 10px auto;
        display: flex;
        align-content: center;
        position: relative;

        div:first-child {
          height: 50px;
          flex: 3;
          font-size: @font-size-large;
        }
        div:last-child {
          height: 50px;
          flex: 7;
          input {
            font-size: @font-size-medium;
          }
        }
      }
      .errText {
        position: absolute;
        bottom: 5px;
        left: 5%;
        color: @color-red;

      }

    }



  }
  .register-footer{
    div{
      width: 90%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin: 10px auto;
      font-size: @font-size-large;
      background-color: @color-F0;
    }
  }





</style>
