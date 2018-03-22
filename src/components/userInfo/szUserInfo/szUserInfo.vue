<template>
  <div :class="{szUserInfo: isSzUserInfo}">
    <div class="szUserInfo-div">
      <div class="szUserInfo-div-top">
        <i class="iconfont icon-left-trangle" @click="goToBlack"></i>
        <span>个人信息</span>
      </div>
      <div class="szUserInfo-template first">
        <div class="szUserInfo-template-left">头像</div>
        <div class="szUserInfo-template-center">
          <img
            @click="croppa.chooseFile();SHAvatar()"
            :src="avatar" alt=""
            style="width: 80px;height: 80px;border-radius: 50%">
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div class="szUserInfo-template">
        <div class="szUserInfo-template-left">电话</div>
        <div class="szUserInfo-template-center" @click="changePhone">
          {{phone}}
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div :class="{hide:isPhone}">
        <div class="XGInput">
          <div class="XGInput-left">修改电话:</div>
          <div class="XGInput-center">
            <input
              @blur="phoneBlur(phone)"
              type="text"
              v-model="phone"/>
          </div>
          <div class="XGInput-right" @click="setPhone">
            提交修改
          </div>
        </div>
        <div :class="{errText:isPhoneErrText}">
          {{phoneErrText}}
        </div>
      </div>
      <div class="szUserInfo-template">
        <div class="szUserInfo-template-left">邮箱</div>
        <div class="szUserInfo-template-center" @click="changeEmail">
          {{email}}
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div :class="{hide:isEmail}">
        <div class="XGInput">
          <div class="XGInput-left">修改邮箱:</div>
          <div class="XGInput-center">
            <input
              @blur="emailBlur(email)"
              type="text"
              v-model="email"/></div>
          <div class="XGInput-right" @click="setEmail">
            提交修改
          </div>
        </div>
        <div :class="{errText:isEmailErrText}">
          {{emailErrText}}
        </div>
      </div>
      <div class="szUserInfo-template">
        <div class="szUserInfo-template-left">昵称</div>
        <div class="szUserInfo-template-center" v-if="id.length===0" @click="changeId">
          修改/添加
        </div>
        <div class="szUserInfo-template-center" v-if="id.length>0" @click="changeId">
          {{id}}
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div :class="{hide:isId}">
        <div class="XGInput">
          <div class="XGInput-left">修改昵称:</div>
          <div class="XGInput-center">
            <input
              @blur="idBlur(id)"
              type="text"
              v-model="id"/></div>
          <div class="XGInput-right" @click="setId">
            提交修改
          </div>
        </div>
        <div :class="{errText:isIdErrText}">
          {{idErrText}}
        </div>
      </div>
      <div class="szUserInfo-template">
        <div class="szUserInfo-template-left">年龄</div>
        <div class="szUserInfo-template-center" v-if="age.length===0" @click="changeAge">
          修改/添加
        </div>
        <div class="szUserInfo-template-center" v-if="age.length>0" @click="changeAge">
          {{age}}
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div :class="{hide:isAge}">
        <div class="XGInput">
          <div class="XGInput-left">修改年龄:</div>
          <div class="XGInput-center">
            <input
              @blur="ageBlur(age)"
              type="number"
              v-model="age"/></div>
          <div class="XGInput-right" @click="setAge">
            提交修改
          </div>
        </div>
        <div :class="{errText:isAgeErrText}">
          {{ageErrText}}
        </div>
      </div>
      <div class="szUserInfo-template">
        <div class="szUserInfo-template-left">性别</div>
        <div class="szUserInfo-template-center" v-if="sex.length===0" @click="changeSex">
          修改/添加
        </div>
        <div class="szUserInfo-template-center" v-if="sex.length>0" @click="changeSex">
          {{sex}}
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div :class="{hide:isSex}">
        <div class="XGInput">
          <div class="XGInput-left">修改性别:</div>
          <div class="XGInput-center">
            <input
              @blur="sexBlur(sex)"
              type="text"
              v-model="sex"/></div>
          <div class="XGInput-right" @click="setSex">
            提交修改
          </div>
        </div>
        <div :class="{errText:isSexErrText}">
          {{sexErrText}}
        </div>
      </div>
      <div class="szUserInfo-template">
        <div class="szUserInfo-template-left">密码</div>
        <div class="szUserInfo-template-center" @click="changePassword">
          修改/添加
        </div>
        <div class="szUserInfo-template-right">
          <i class="iconfont icon-right-trangle"></i>
        </div>
      </div>
      <div :class="{hide:isPassword}">
        <div class="XGInput">
          <div class="XGInput-left">初始密码:</div>
          <div class="XGInput-center">
            <input
              @blur="password1Blur(password1)"
              type="password"
              v-model="password1"/></div>
        </div>
        <div :class="{errText:isPassword1ErrText}">
          {{password1ErrText}}
        </div>
      </div>
      <div :class="{hide:isPassword}">
        <div class="XGInput">
          <div class="XGInput-left">设置密码:</div>
          <div class="XGInput-center">
            <input
              @blur="password3Blur(password3)"
              type="password"
              v-model="password3"/></div>
        </div>
        <div :class="{errText:isPassword3ErrText}">
          {{password3ErrText}}
        </div>
      </div>
      <div :class="{hide:isPassword}">
        <div class="XGInput">
          <div class="XGInput-left">确认密码:</div>
          <div class="XGInput-center">
            <input
              @blur="password2Blur(password2)"
              type="password"
              v-model="password2"/></div>
          <div class="XGInput-right" @click="setPassword">
            提交修改
          </div>
        </div>
        <div :class="{errText:isPassword2ErrText}">
          {{password2ErrText}}
        </div>
      </div>


      <div :class="{HSAvatar:isHSAvatar}">
        <div class="CZAvatar">

          <div class="CZAvatar-top">
            <croppa
              @init="onInit"
              :width="340"
              :height="340"
              prevent-white-space
              v-model="croppa"
              disable-click-to-choose>
            </croppa>
          </div>
          <div class="CZAvatar-bottom">
            <div class="" @click="backFirst">返回上级</div>
            <div class="" @click="croppa.chooseFile()">从新选择</div>
            <div class="" @click="uploadAvatar">点击上传</div>
          </div>

        </div>

      </div>
      <modal
        :msg="message"
        :isHideModal="HideModal">
      </modal>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import 'vue-croppa/dist/vue-croppa.css'
  import Modal from '../../../bese/modal/modal.vue'

  export default {
    name: 'szUserInfo',
    props: ['isSzUserInfo', 'showHideSzUserInfo'],
    components: {
      Modal
    },
    data() {
      return {
        croppa: {},
        avatar: '',
        message: '',
        HideModal: true,

        age: '',
        ageState: false,
        ageErrText: '',
        isAgeErrText: false,

        sex: '',
        sexState: false,
        sexErrText: '',
        isSexErrText: false,

        id: '',
        idState: false,
        idErrText: '',
        isIdErrText: false,

        phone: '',
        phoneState: false,
        phoneErrText: '',
        isPhoneErrText: false,


        email: '',
        emailState: false,
        emailErrText: '',
        isEmailErrText: false,

        password1: '',
        password2: '',
        password3: '',
        passwordState: false,
        isPassword: true,
        password1ErrText: '',
        password2ErrText: '',
        password3ErrText: '',
        isPassword1ErrText: false,
        isPassword2ErrText: false,
        isPassword3ErrText: false,


        isHSAvatar: true,
        isPhone: true,
        isSex: true,
        isAge: true,
        isId: true,
        isEmail: true


      }
    },
    created() {
      this._getUserInfo()

    },
    methods: {
      _getUserInfo() {
        axios.get('/api/getUserInfo')
          .then((res) => {
            this.avatar = res.data.avatar;
            this.age = res.data.age;
            this.sex = res.data.sex;
            this.id = res.data.name;
            this.email = res.data.email;
            this.phone = res.data.phone
          })
          .catch((err) => {
            console.log(err)
          })
      },
      goToBlack() {
        this.isSzUserInfo1 = true;
        this.$emit("showHideSzUserInfo", this.isSzUserInfo1);

      },


      onInit() {
        this.croppa.addClipPlugin((ctx, x, y, w, h) => {
          /*
           * ctx: canvas context
           * x: start point (top-left corner) x coordination
           * y: start point (top-left corner) y coordination
           * w: croppa width
           * h: croppa height
          */
          ctx.beginPath();
          ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true);
          ctx.closePath()
        })

      },
      SHAvatar() {
        this.isHSAvatar = false
      },
      backFirst() {
        this.isHSAvatar = true;
      },
      uploadAvatar() {
        if (!this.croppa.hasImage()) {
          alert('还没有上传图片');
          return
        }
        this.croppa.generateBlob((blob) => {
          var fd = new FormData();
          fd.append('file', blob);
          fd.append('other', 'blahblahblah')
          console.log(fd)
          /* axios.post('/api/UserChangeAvatar',{
          avatar:fd
        })
          .then((res)=>{
          if(res.data==="1"){
            alert("修改成功")
          }
          })
          .catch((err)=>{
          console.log(err)
          })*/
        })
      },


      changeSex() {
        if (this.isSex === true) {
          this.isSex = false
        }
        else if (this.isSex === false) {
          this.isSex = true
        }
      },
      changeAge() {
        if (this.isAge === true) {
          this.isAge = false
        }
        else if (this.isAge === false) {
          this.isAge = true
        }
      },
      changeId() {
        if (this.isId === true) {
          this.isId = false
        }
        else if (this.isId === false) {
          this.isId = true
        }
      },
      changePhone() {
        if (this.isPhone === true) {
          this.isPhone = false
        }
        else if (this.isPhone === false) {
          this.isPhone = true
        }

      },
      changeEmail() {
        if (this.isEmail === true) {
          this.isEmail = false
        }
        else if (this.isEmail === false) {
          this.isEmail = true
        }
      },
      changePassword() {
        if (this.isPassword === true) {
          this.isPassword = false
        }
        else if (this.isPassword === false) {
          this.isPassword = true
        }
      },


      phoneBlur(phone) {
        let reg = /^1[34578][0-9]{9}$/;
        let flag = reg.test(phone);
        if (phone.length === 0) {
          this.isPhoneErrText = true;
          this.phoneErrText = "手机号不能为空";
        }
        else if (flag === false) {
          this.isPhoneErrText = true;
          this.phoneErrText = "手机号格式不正确";
        }
        else {
          this.phoneErrText = "";
          this.isPhoneErrText = false;
          this.phoneState = true
        }
      },

      emailBlur(email) {
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        let flag = reg.test(email);

        if (email.length === 0) {
          this.isPhoneErrText = true;
          this.emailErrText = "邮箱不能为空";
          this.isEmailErrText = true;
        }
        else if (email.length > 0 && flag === false) {
          this.isPhoneErrText = true;
          this.emailErrText = "邮箱格式错误";
          this.isEmailErrText = true;
        }
        else {
          this.emailErrText = "";
          this.isEmailErrText = false;
          this.emailState = true
        }
      },

      idBlur(id) {
        if (id.length === 0) {
          this.isIdErrText = true;
          this.idErrText = "ID不能为空";
        }
        else if (id.length < 2) {
          this.idErrText = "ID至少为2位";
          this.isIdErrText = true;

        }
        else {
          this.idErrText = "";
          this.idState = true;
          this.isIdErrText = false;
        }

      },

      sexBlur(sex) {
        if (sex.length === 0) {
          this.sexErrText = "性别不能为空";
          this.isSexErrText = true;
        }
        else if (sex === "男" || sex === "女") {
          this.sexErrText = "";
          this.sexState = true;
          this.isSexErrText = false;
        }
        else {
          this.sexErrText = "性别只能为男或女";
          this.isSexErrText = true;
        }

      },

      ageBlur(age) {
        if (age.length === 0) {
          this.ageErrText = "年龄不能为空";
          this.isAgeErrText = true;
        }
        else {
          this.ageErrText = "";
          this.ageState = true;
          this.isAgeErrText = false;
        }
      },


      password1Blur(password1) {

        if (password1.length === 0) {
          this.password1ErrText = "密码不能为空";
          this.isPassword1ErrText = true;
        }
        else if (password1.length < 6) {
          this.password1ErrText = "密码不能少于6位";
          this.isPassword1ErrText = true;
        }

        else {
          this.password1ErrText = "";
          this.isPassword1ErrText = false;
        }

      },
      password2Blur(password2) {
        let password3 = this.password3;

        if (password2.length === 0) {
          this.password2ErrText = "确认密码不能为空";
          this.isPassword2ErrText = true;
        }
        else if (password2.length > 0 && password2 !== password3) {
          this.password2ErrText = "两次密码不一样";
          this.isPassword2ErrText = true;
        }
        else {
          this.password2ErrText = "";
          this.passwordState = true;
          this.isPassword2ErrText = true;
        }
      },
      password3Blur(password3) {

        if (password3.length === 0) {
          this.password3ErrText = "密码不能为空";
          this.isPassword3ErrText = true;
        }
        else if (password3.length < 6) {
          this.password3ErrText = "密码不能少于6位";
          this.isPassword3ErrText = true;
        }

        else {
          this.password3ErrText = "";
          this.isPassword3ErrText = false;
        }

      },

      setSex() {
        if (this.sexState === true) {
          axios.post("/api/UserChangeSex", {
            sex: this.sex
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true
                }

                setTimeout(a, 2000);
              }

            })
            .catch((err) => {
              console.log(err)
            })

        }
        else {
          this.message = "信息填写错误";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
      },
      setAge() {
        if (this.ageState === true) {
          axios.post("/api/UserChangeAge", {
            age: this.age
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true
                }

                setTimeout(a, 2000);
              }

            })
            .catch((err) => {
              console.log(err)
            })

        }
        else {
          this.message = "信息填写错误";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
      },
      setId() {
        if (this.idState === true) {
          axios.post("/api/UserChangeID", {
            id: this.id
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true
                }

                setTimeout(a, 2000);
              }

            })
            .catch((err) => {
              console.log(err)
            })

        }
        else {
          this.message = "信息填写错误";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
      },
      setPhone() {
        if (this.phoneState === true) {
          axios.post("/api/UserChangePhone", {
            phone: this.phone
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true
                }

                setTimeout(a, 2000);
              }

            })
            .catch((err) => {
              console.log(err)
            })

        }
        else {
          this.message = "信息填写错误";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }

      },
      setEmail() {
        if (this.emailState === true) {
          axios.post("/api/UserChangeEmail", {
            email: this.email
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true
                }

                setTimeout(a, 2000);
              }

            })
            .catch((err) => {
              console.log(err)
            })

        }
        else {
          this.message = "信息填写错误";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
      },
      setPassword() {
        if (this.passwordState === true) {
          axios.post("/api/UserChangePassWord", {
            password1: this.password1,
            password2: this.password2
          })
            .then((res) => {
              if (res.data === "1") {
                this.message = "修改成功";
                this.HideModal = false;
                const that = this;

                function a() {
                  that.message = "";
                  that.HideModal = true
                }

                setTimeout(a, 2000);
              }

            })
            .catch((err) => {
              console.log(err)
            })

        }
        else {
          this.message = "信息填写错误";
          this.HideModal = false;
          const that = this;

          function a() {
            that.message = "";
            that.HideModal = true
          }

          setTimeout(a, 2000);
        }
      }


    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";

  .szUserInfo {
    display: none;

  }

  .szUserInfo-div {
    position: fixed;
    max-width: 640px;
    width: 100%;
    height: 150%;
    z-index: 100;
    background-color: @color-F0;
    .szUserInfo-div-top {
      width: 95%;
      padding-left: 10px;
      margin: 10px auto 10px auto;
      height: 50px;
      line-height: 50px;
      font-size: @font-size-large;
      background-color: @color-white;

    }
    .szUserInfo-template {
      width: 95%;
      margin: 0 auto;
      height: 50px;
      display: flex;
      background-color: @color-white;
      align-items: center;
      border: 1px solid @color-F0;
      .szUserInfo-template-left {
        flex: 6;
        padding-left: 10px;
      }
      .szUserInfo-template-center {
        flex: 3;
      }
      .szUserInfo-template-right {
        flex: 1;
      }

    }
    .XGInput {
      width: 95%;
      margin: 0 auto;
      display: flex;
      height: 50px;
      padding-left: 10px;
      background-color: @color-white;
      align-items: center;
      justify-content: center;
      .XGInput-left {
        flex: 1;
      }
      .XGInput-center {
        flex: 2;
        input {
          height: 40px;
          border-left: 1px solid @color-F0;
          border-right: 1px solid @color-F0;
          font-size: @font-size-medium-x;
        }
      }
      .XGInput-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        background-color: @color-green;
        color: @color-white;
        border-radius: 10%;

      }
      .first {
        height: 90px;
      }

    }
    .hide {
      display: none;
    }

    .first {
      height: 90px;
    }
  }

  .HSAvatar {
    display: none;
  }

  .CZAvatar {
    position: fixed;
    top: 0;
    max-width: 640px;
    width: 100%;
    height: 100%;
    z-index: 101;
    background-color: @color-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .CZAvatar-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      > div {
        width: 150px;
        height: 30px;
        margin: 5px 0 5px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: @color-green;
        color: @color-white;
        border-radius: 10%;
        font-size: @font-size-large;
      }
    }

  }

  .errText {
    width: 95%;
    margin: 0 auto;
    background-color: @color-white;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    color: #d93f30;
  }

</style>
