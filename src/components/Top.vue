<style scoped lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <el-col :span="24" class="header">
    <el-col :span="4" class="logo logo-width"></el-col>
    <el-col :span="20" class="userinfo">
      <el-menu :span="18" theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <i class="fa fa-home"></i>
          <router-link to="/" class="menu-items">主页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <!-- <template slot="title">
            <i class="fa fa-files-o"></i>
            <span class="menu-items">项目</span>
          </template>
          <el-menu-item index="2-1">
            <router-link to="/">选项1</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/">选项2</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/">选项3</router-link>
          </el-menu-item> -->
          <el-dropdown>
            <span class="el-dropdown-link" style="color:#fff;">
              <i class="fa fa-files-o"></i>
              下拉菜单
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
                <el-dropdown-item>黄金糕</el-dropdown-item>
              </router-link>
              <router-link to="/">
                <el-dropdown-item>狮子头</el-dropdown-item>
              </router-link>
              <router-link to="/">
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="fa fa-cog"></i>
          <router-link to="/" class="menu-items">插件</router-link>
        </el-menu-item>
      </el-menu>
      <el-dropdown :span="3" trigger="hover" class="username">
        <span class="el-dropdown-link userinfo-inner">
          {{sysUserName}}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom-end">
        <el-col :span="1" @click.native="logout" class="logout">
          <i class="fa fa-circle-o-notch"></i>
        </el-col>
      </el-tooltip>
    </el-col>
  </el-col>
</template>

<script>
export default {
  data () {
    return {
      sysUserName: '',
      activeIndex: '1'
    }
  },
  mounted () {
    var user = localStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      // 取到 localstorage 用户名且展示
      this.sysUserName = user.user_name || ''
    }
  },
  methods: {
    // 退出登录
    logout: function () {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('user')
        _this.$router.push('/login')
      }).catch((err) => {
        console.log('错误：', err)
      })
    }
  }
}
</script>
