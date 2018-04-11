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
    <div class="search-login">
      <div v-if="login ==='1'" @click="outLogin">退出</div>
    </div>
    <div class="search-login">
      <div v-if="login !=='1'" @click="UserLogin">登录</div>
    </div>
    <div class="search-message">
      <div>
        <i class="iconfont icon-xiaoxi1"></i>
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
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .search-message {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

    }
    .icon-xiaoxi1{
      color: @color-green;
      margin-right: 2px;
    }
  }
</style>
