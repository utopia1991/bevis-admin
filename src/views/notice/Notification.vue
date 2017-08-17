<style lang="scss" scoped>
  @import "../../assets/scss/Input";
</style>

<template>
  <div class="box">
    <div class="block">
      Notification 通知，悬浮出现在页面右上角：
      <el-button
        plain
        @click="open">
        可自动关闭
      </el-button>
      <el-button
        plain
        @click="open2">
        不会自动关闭
      </el-button>
    </div>
		<div class="block">
      带 icon，显示「成功、警告、消息、错误」类的消息：
      <el-button
        plain
        @click="open3">
        成功
      </el-button>
      <el-button
        plain
        @click="open4">
        警告
      </el-button>
      <el-button
        plain
        @click="open5">
        消息
      </el-button>
      <el-button
        plain
        @click="open6">
        错误
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      open () {
        const h = this.$createElement

        this.$notify({
          title: '标题名称',
          message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        })
      },
      open2 () {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        })
      },
      open3 () {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          // Element 为 Notification 组件准备了四种通知类型：success, warning, info, error
          type: 'success'
        })
      },
      open4 () {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        })
      },
      open5 () {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        })
      },
      open6 () {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息',
          // Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕顶部偏移一段距离
          offset: 100
        })
      }
    }
  }
</script>
