<style scoped lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleselect" unique-opened router>
    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <el-submenu :index="index+''" v-if="!item.leaf" class="vertical-submenu">
        <template slot="title">
          <i :class="item.iconCls"></i>
          <span class="menu-items">{{item.title}}</span>
        </template>
        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden" class="new-submenu">
          <span class="menu-items">{{child.title}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
        <i :class="item.iconCls"></i>{{item.children[0].title}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      handleselect: function () {
      }
    }
  }
</script>
