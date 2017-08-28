<style scoped lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <el-col :span="24" class="main">
    <!--导航菜单-->
    <el-col :span="4" class="aside">
      <MiddelNav></MiddelNav>
    </el-col>
    <!-- 页面主体部分 -->
    <el-col class="content-container" :span="20">
      <div class="grid-content bg-purple-light">
        <el-col :span="24" class="breadcrumb-container">
          <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </el-col>
  </el-col>
</template>

<script>
  import MiddelNav from './MiddleNav'

  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    components: {
      MiddelNav
    },
    methods: {
    }
  }
</script>
