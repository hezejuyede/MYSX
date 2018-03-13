<template>
  <div id="login">
    <header class="login-header">
      <i class="iconfont icon-left-trangle" @click="backHome"></i>
      <h3>亿成用户登录</h3>
    </header>
    <main class="login-main">
      <section class="changelogin">
        <div class="changelogin-left" @click="mLogin">
          <div v-bind:class="{userlogin:isuserlogin}">账户密码登录</div>
        </div>
        <div class="changelogin-right" @click="mNLogin">
          <div v-bind:class="{dxlogin:isdxlogin}" class="">短信验证码登录</div>
        </div>
      </section>
      <section v-bind:class="{mlgon:ismlogin}">
        <div class="loginInput">
          <div class="login-userName">
            <div class="">账号</div>
            <div class="">
              <input type="text" placeholder="用户名/邮箱/已验证手机" ref="username">
            </div>
            <div>
              <i class="iconfont icon-guanbi"></i>
            </div>
          </div>
          <div class="login-password">
            <div class="">密码</div>
            <div class="">
              <input type="password" placeholder="请输入密码" ref="password">
            </div>
            <div>
              <i class="iconfont icon-guanbi"></i>
            </div>
          </div>
        </div>
      </section>
      <section v-bind:class="{mnlgon:ismnlogin}">
        <div class="mobileLogin">
          <div class="login-getyzm">
            <div class="">
              <input type="text" placeholder="请输入手机号">
            </div>
            <div class="">请点击获取验证码</div>
            <div>
              <i class="iconfont icon-guanbi"></i>
            </div>
          </div>
          <div class="login-putyzm">
            <div class="">
              <input type="password" placeholder="请输入收到的验证码">
            </div>
            <div>
              <i class="iconfont icon-guanbi"></i>
            </div>
          </div>
        </div>
      </section>
      <section class="registerBtn">
        <div class="" @click="login">
          <span>登录</span>
        </div>
        <div class="">
          <span>一键登录</span>
        </div>
      </section>
      <section class="clearfix speedRegiter">
        <div>
          <i class="iconfont icon-mima"></i>
          <span>忘记密码</span>
        </div>
        <div>
          <i class="iconfont icon-phone"></i>
          <span @click="gotoregister">手机快速注册</span>
        </div>
      </section>
    </main>
    <footer class="clearfix login-footer">
      <div class="login-footer-top">
        <div class=""></div>
        <div class="">其他登录方式</div>
        <div class=""></div>
      </div>
      <div class="login-footer-center">
        <i class="iconfont icon-qq"></i>
        <i class="iconfont icon-weixin"></i>
      </div>
      <div class="login-footer-bottom">
        <span class="">登录即代表您已同意亿成隐私政策</span>
      </div>

    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';

  export default {
    name: 'login',
    data() {
      return {
        ismlogin: false,
        ismnlogin: true,
        isuserlogin: true,
        isdxlogin: false
      }

    },
    methods: {
      backHome() {
        this.$router.push({path: "/"})
      },
      mLogin() {
        this.ismlogin = false;
        this.ismnlogin = true;
        this.isuserlogin = true;
        this.isdxlogin = false;
      },
      mNLogin() {
        this.ismlogin = true;
        this.ismnlogin = false;
        this.isuserlogin = false;
        this.isdxlogin = true;
      },
      login() {
        axios.post("/api/userlogin", {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        })
          .then((res) => {
            if (res.data.state === "1") {

              let userInfo = res.data;
              userInfo = JSON.stringify(userInfo);
              console.log(userInfo);
              sessionStorage.setItem("userInfo", userInfo);

              alert("登录成功");
              window.location.assign("/")
            }
            else if (res.data === "2") {
              alert("该用户没有注册")
            }
            else if (res.data === "-1") {
              alert(" 密码错误")
            }

          })
          .catch((err) => {
            console.log(err)
          });
      },
      gotoregister() {
        this.$router.push({path: "/Register"})
      }
    },
    components: {}
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/base";

  .login-header {
    height: 50px;
    line-height: 50px;
    background-color: @color-F0;
    text-align: center;
    position: relative;
    .icon-left-trangle {
      position: absolute;
      top: 0;
      left: 10px;
      font-size: @font-size-large-xxxxx;
    }
    h3 {
      font-size: @font-size-large;
      color: @color-black;
    }

  }

  .login-main {
    .changelogin {
      height: 50px;
      display: flex;
      font-size: @font-size-medium-x;
      align-items: center;
      border: 2px solid @color-F0;
      .changelogin-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
        }
        .userlogin {

          border-bottom: 2px solid @color-red;
        }

      }
      .changelogin-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
        }
        .dxlogin {

          border-bottom: 2px solid @color-red;
        }
      }

    }
    .loginInput {
      height: 100px;
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .login-userName {
        flex: 1;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @color-F0;
        div:first-child {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        div:nth-child(2) {
          flex: 7;
          input {
            height: 30px;
            font-size: @font-size-medium;
          }
        }
        div:last-child {
          flex: 1;
          display: flex;
          align-content: center;
          justify-content: center;
          .icon-guanbi {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: @color-background-d;
            text-align: center;
            line-height: 25px;
            color: @color-white;
          }

        }

      }
      .login-password {
        flex: 1;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @color-F0;
        div:first-child {
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;

        }
        div:nth-child(2) {
          flex: 7;
          input {
            height: 30px;
            font-size: @font-size-medium
          }
        }
        div:last-child {
          flex: 1;
          display: flex;
          align-content: center;
          justify-content: center;
          .icon-guanbi {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: @color-background-d;
            text-align: center;
            line-height: 25px;
            color: @color-white;
          }
        }
      }

    }
    .registerBtn {
      width: 90%;
      margin: 0 auto;
      div:first-child {
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: @font-size-medium-x;
        background-color: @color-F0;
        color: @color-black;
        margin: 10px auto;
      }
      div:last-child {
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 1px solid @color-red;
        font-size: @font-size-medium-x;
        color: @color-red;
        margin: 10px auto;
      }
    }
    .mobileLogin {
      height: 100px;
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .login-getyzm {
        flex: 1;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @color-F0;
        div:first-child {
          flex: 7;
          padding-left: 10%;
        }
        div:nth-child(2) {
          flex: 2;

        }
        div:last-child {
          flex: 1;
          .icon-guanbi {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: @color-background-d;
            text-align: center;
            line-height: 25px;
            color: @color-white;
          }

        }

      }
      .login-putyzm {
        flex: 1;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @color-F0;
        div:first-child {
          flex: 9;
          padding-left: 10%;
        }
        div:last-child {
          flex: 1;
          .icon-guanbi {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: @color-background-d;
            text-align: center;
            line-height: 25px;
            color: @color-white;
          }
        }

      }

    }
    .mnlgon {
      display: none;
    }
    .mlgon {
      display: none;
    }

  }

  .speedRegiter {
    width: 90%;
    margin: 30px auto;
    div:first-child {
      float: left;

    }
    div:last-child {
      float: right;
    }

  }

  .login-footer {
    width: 90%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .login-footer-top {
      flex: 1;
      display: flex;
      align-content: center;
      justify-content: center;
      div:first-child {
        width: 100px;
        height: 3px;
        background-color: @color-F0;
        margin-top: 8px;
        margin-right: 10px;
      }
      div:last-child {
        width: 100px;
        height: 3px;
        background-color: @color-F0;
        margin-top: 8px;
        margin-left: 10px;
      }

    }
    .login-footer-center {
      flex: 1;
      display: flex;
      align-content: center;
      justify-content: center;
      .icon-qq {
        margin-right: 10px;
        color: @color-green;
        font-size: @font-size-large-xx;
      }
      .icon-weixin {
        margin-left: 10px;
        color: @color-green;
        font-size: @font-size-large-xx;
      }

    }
    .login-footer-bottom {
      flex: 1;
      display: flex;
      align-content: center;
      justify-content: center;
      margin-top: 10px;

    }

  }

</style>
