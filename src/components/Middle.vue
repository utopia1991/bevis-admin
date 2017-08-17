<style scoped lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <el-col :span="24" class="main">
    <el-col :span="4" class="aside">
      <!--导航菜单-->
      <el-menu theme="dark" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router>
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <el-submenu :index="index+''" v-if="!item.leaf" class="vertical-submenu">
            <template slot="title">
              <i :class="item.iconCls"></i>
              <span class="menu-items">{{item.name}}</span>
            </template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden" class="new-submenu">
              <span class="menu-items">{{child.name}}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
            <i :class="item.iconCls"></i>{{item.children[0].name}}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col class="content-container" :span="20">
      <div class="grid-content bg-purple-light">
        <el-col :span="24" class="breadcrumb-container">
          <strong class="title">{{$route.name}}</strong>
          <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <!-- 页面主体部分 -->
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </el-col>
  </el-col>
</template>

<script>
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
    methods: {
      handleopen () {
        console.log('handleopen')
      },
      handleclose () {
        console.log('handleclose')
      },
      handleselect: function (a, b) {
      }
    }
  }
</script>
