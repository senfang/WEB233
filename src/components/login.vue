<template>
  <div class="loginBg">
    <div class="content">
      <div class="loginBox">
        <h2>{{msg}}</h2>
        <el-row>
          <el-col>
            <el-input v-model="userInfo.userName" placeholder="请输入手机号"></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-input type="password" v-bind:class="{ err: rules.show }" v-model="userInfo.password" placeholder="请输入密码"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="end">
          <el-col class="remember">
            <el-checkbox v-model="checked">记住手机号</el-checkbox>
          </el-col>
          <el-col class="forget">
            <a href="javascript:;">忘记密码?</a>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" v-show="rules.show" class="rules">请输入正确的密码</el-col>
        </el-row>
        <el-row class="loginBtn">
          <el-col :span="24">
            <el-button @click="login" :loading="logining">登录</el-button>
          </el-col>
        </el-row> 
        <el-row class="linkToReg">
          <el-col :span="24">
            还不是会员？<a href="#">免费注册</a>
          </el-col>
        </el-row> 
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/login.css'
export default {
  name: 'login',
  data () {
    return {
      msg: '登录账号',
      userInfo: {
        userName: '',
        password: ''
      },
      rules: {
        show: false,
        message: ''
      },
      logining: false,
      checked: true
    }
  },
  methods: {
    login (ev) {
      this.logining = true
      this.rules.show = true
    }
  }
}
</script>

