<template>
  <div class="header">
    <div class="topHeader">
      <div class="top container">
        <span class="phone">财富热线：400-9999-9999</span>
        <ul>
          <li><a href="javascript:void(0)" @click="regist">免费注册</a>&nbsp;|&nbsp;<a href="javascript:void(0)" @click="login">登录</a></li>
          <li>
            <span class="wx">官方公众号</span>
          </li>
          <li><span class="help">帮助中心</span></li>
        </ul>
        <div class="wxtp"><img src="../assets/images/header/wxtp.png"/></div>
      </div>
    </div>
    <header>
      <nav>
        <div class="head container">
          <div class="logo">
            <img src="../assets/images/header/logo.png"/>
          </div>
          <div class="menuBox">
            <ul class="menu">
              <li class="active"><a href="/">首页</a></li>
              <li><a href="/invest">我要投资</a></li>
              <li><a>我要借款</a></li>
              <li><a>安全保障</a></li>
              <li><a>关于我们</a></li>
            </ul>
          </div>
          <div class="option">
            <a class="btnClass1 regbtn" @click="regist">注册享高息</a>
            <a class="btnClass2 loginbtn" @click="login">登录</a>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '我是主文件'
      }
    },
    methods: {
      regist () {
        this.$router.push({name: 'regist'})
      },
      login () {
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

