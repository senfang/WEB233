<template>
  <div class="header">
    <div class="topHeader">
      <div class="top container">
        <span>财富热线：400-9999-9999</span>
        <ul>
          <li><a href="javascript:void(0)" @click="regist">免费注册</a>&nbsp;|&nbsp;<a href="javascript:void(0)" @click="login">登录</a></li>
          <li>
            <span>官方公众号</span>
            <div>
            </div>
          </li>
          <li><span>帮助中心</span></li>
        </ul>
      </div>
    </div>
    <header>
      <nav>
        <div class="head container">
          <div class="logo">
            <img src=""/>
          </div>
          <ul class="menu">
            <li class="active"><a href="/">首页</a></li>
            <li><a href="/invest">我要投资</a></li>
            <li><a>我要借款</a></li>
            <li><a>安全保障</a></li>
            <li><a>关于我们</a></li>
          </ul>
          <div class="option">
            <el-button @click="regist">注册享高息</el-button>
            <el-button @click="login">登录</el-button>
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

