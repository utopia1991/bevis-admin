<style scoped lang="scss">
  @import "../assets/scss/Layout.scss";
</style>

<template>
  <el-row class="container">
    <!-- 头部导航菜单 -->
    <Top></Top>
    <!-- 中间内容 -->
    <Middle></Middle>
  </el-row>
</template>

<script>
  import Top from '../components/Top'
  import Middle from '../components/Middle'

  export default {
    components: {
      Top,
      Middle
    }
  }
</script>
