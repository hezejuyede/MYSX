<template>
  <div id="search" class="search">
    <div class="search-saoyisao">
      <i class="iconfont icon-saoyisaoerweimasaomasaomiao"></i>
      <span class="saoyisao-test">扫一扫</span>
    </div>
    <div class="search-logo">
      <span class="">YC</span>
    </div>
    <div class="sousuo">
      <i class="iconfont icon-sousuo"></i>
      <form action="" method="get">
        <input
          type="text"
          placeholder="新鲜鸡腿"
          class="SearchInput"
          @click="intoSearch"/>
      </form>
    </div>
    <div class="search-login" v-show="login ==='1'">
      <div  @click="outLogin">退出</div>
    </div>
    <div class="search-login" v-show="login !=='1'">
      <div  @click="UserLogin">登录</div>
    </div>
    <div class="search-message" >
      <div class="search-message-wd" v-show="login ==='1'">12</div>
      <div>
        <i class="iconfont icon-xiaoxi1" @click="goToMessage"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'index',
    data() {
      return {
        userName: "",
        login: "",
      }
    },
    created() {
      this._getUserInfo()
    },
    methods: {
      _getUserInfo() {
        if (sessionStorage.getItem("userInfo") === null) {
          console.log("用户还没有登录")
        }
        else {
          let UserInfo = sessionStorage.getItem("userInfo");
          UserInfo = JSON.parse(UserInfo);
          this.userName = UserInfo.username;
          this.login = UserInfo.state;
        }


      },
      outLogin() {
        sessionStorage.clear();
        window.location.reload();
      },
      UserLogin() {
        this.$router.push({path: '/Login'})
      },
      intoSearch() {
        this.$router.push({path: "/search"})
      },
      goToMessage(){
        this.$router.push({path:'/LxKf'})
      }

    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../../common/less/base";
  #search {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: @sousuo;
    .search-saoyisao {
      flex: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-saoyisaoerweimasaomasaomiao {
        font-size: @font-size-large-x;
      }
    }
    .search-logo {
      flex: 2;
      font-size: @font-size-large-x;
      color: @color-green;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .sousuo {
      position: relative;
      flex: 12;
      .icon-sousuo {
        position: absolute;
        top: 8px;
        left: 10px;
        z-index: 9;
        font-size: @font-size-large-xx;
      }
      .SearchInput {
        height: 40px;
        width: 100%;
        padding-left: 40px;
        font-size: @font-size-medium-x;
        border: 1px solid @color-F0;
        border-radius: 20px;
        background-color: @color-white;
        position: relative;

      }
    }
    .search-login {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .search-message {
      flex: 2;
      height: 40px;
      display: flex;
      line-height: 37px;
      justify-content: flex-start;
      position: relative;
      .search-message-wd{
        position: absolute;
        top: 1px;
        right: 6px;
        width: 17px;
        height: 17px;
        text-align: center;
        line-height: 17px;
        border-radius: 50%;
        background-color: @color-red;
        color: @color-white;
      }
      .icon-xiaoxi1{
        color: @color-green;
        margin-bottom: 5px;
        font-size: @font-size-large;
      }

    }

  }
</style>
