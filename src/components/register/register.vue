<template>
  <div id="register">
    <header class="register-header">
      <i class="iconfont icon-left-trangle" @click="backHome"></i>
      <h3>亿成用户注册</h3>
    </header>
    <main class="register-main">
      <section class="">
        <div class="">用户名</div>
        <div class="">
          <input type="text" placeholder="请输入用户名" ref="username1">
        </div>
      </section>
      <section class="">
        <div class="">密码</div>
        <div class="">
          <input type="password" placeholder="请输入密码" ref="password1">
        </div>
      </section>
      <section class="">
        <div class="">确认密码</div>
        <div class="">
          <input type="password" placeholder="请输入确认密码" ref="password2">
        </div>
      </section>
      <section class="">
        <div class="">邮箱</div>
        <div class="">
          <input type="text" placeholder="请输入邮箱" ref="email">
        </div>
      </section>
      <section class="">
        <div class="">手机号</div>
        <div class="">
          <input type="text" placeholder="请输入手机号" ref="phone">
        </div>
      </section>
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
  export default {
    name: 'register',
    data(){
      return{

      }
    },
    components: {},
    methods: {
      backHome(){
        this.$router.push({path: "/login"})
      },
      register(){
        axios.post('/api/userRegister', {
          username1: this.$refs.username1.value,
          password1: this.$refs.password1.value,
          password2: this.$refs.password2.value,
          email: this.$refs.email.value,
          phone: this.$refs.phone.value
        })
          .then((res) => {
          if (res.data ==1){
            alert("注册成功")
            window.location.assign("/")
          }
          else if(res.data ==2){
            alert("该用户已经注册")
          }
          else if(res.data ==-1){
            alert("注册失败")
          }
          })
          .catch((err) => {
            console.log(err)
          })
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
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    section{
      width: 90%;
      height: 50px;
      margin: 10px auto;
      display: flex;
      line-height: 50px;
      align-content: center;
      border-bottom: 1px solid @color-F0;
      div:first-child{
        flex: 3;
      }
      div:last-child{
        flex: 7;
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
