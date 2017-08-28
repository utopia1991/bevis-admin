<style lang="scss" scoped>
  @import "../assets/scss/Login.scss";
</style>

<template>
  <section class="bg" @keypress="show($event)">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%; margin-bottom:10px;" @click="handleSubmit('ruleForm')" :loading="logining">登录</el-button>
        <div class="clearfix"></div>
        <el-button type="default" style="width:100%;" @click="handleReset('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  import { requestLogin, requestLoginMock } from '../api/api'
  import '../assets/js/MD5'

  export default {
    data () {
      return {
        logining: false,
        ruleForm: {
          account: '',
          checkPass: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'change' }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      show (ev) {
        if (ev.keyCode === 13) {
          this.handleSubmit('ruleForm')
        }
      },
      handleReset (ruleForm) {
        this.$refs[ruleForm].resetFields()
      },
      handleSubmit (ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.logining = true

            // 本地 mock 使用开始
            // var loginParamsMock = {
            //   login_name: this.ruleForm.account,
            //   password: this.ruleForm.checkPass
            // }
            // requestLoginMock(loginParamsMock).then(res => {
            //   this.logining = false
            //
            //   if (res.data.code === 500) {
            //     this.$message({
            //       message: res.data.msg,
            //       type: 'error'
            //     })
            //   }
            //
            //   if (res.data.code === 200) {
            //     // 登陆成功之后将返回的data存入localStorage
            //     let curTime = 30 * 60 * 1000
            //     localStorage.setItem('user', JSON.stringify({data: res.data, time: curTime}))
            //     // 登陆之后跳转到主页
            //     this.$router.push({ path: '/index' })
            //   } else {
            //     this.$message({
            //       message: res.data.msg,
            //       type: 'error'
            //     })
            //   }
            // })
            // 本地 mock 使用结束

            // 本地跨域开发使用
            var loginParams = {
              login_name: this.ruleForm.account,
              password: window.getMD5Value(this.ruleForm.checkPass)
            }
            requestLogin(loginParams).then(res => {
              this.logining = false
              console.log('zzzz', res)
              if (res === 500) {
                this.$message({
                  message: '登陆失败',
                  type: 'error'
                })
              }

              if (res.status === 200) {
                // 登陆成功之后将返回的 data 存入 localStorage
                let curTime = 30 * 60 * 1000
                localStorage.setItem('user', JSON.stringify({data: res.data, time: curTime}))
                // 登陆之后跳转到主页
                this.$router.push({ path: '/index' })
              } else {
                this.$message({
                  message: res.message,
                  type: 'error'
                })
              }
            })
          }
        })
      }
    }
  }
</script>
