<style lang="scss" scoped>
  @import "../../assets/scss/Input";
</style>

<template>
  <div class="box">
    <div class="block">
      Message 消息提示，主动操作后的反馈提示：
      <!-- Element 注册了一个$message方法用于调用，Message 可以接收一个字符串作为参数，它会被显示为正文内容 -->
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </div>
		<div class="block">
      MessageBox 弹框，模态对话框组件：
      <el-button @click="open5">点击打开 Message Box</el-button>
    </div>
		<div class="block">
      MessageBox 弹框带提交内容：
      <el-button @click="open6">点击打开 Message Box</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      open () {
        this.$message('这是一条消息提示')
      },
      open2 () {
        this.$message({
          // 如果需要可手动关闭的 Message，可以使用showClose字段
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          // 设置type字段可以定义不同的状态，默认为info
          type: 'success'
        })
      },
      open3 () {
        this.$message({
          // 拥有可控的 duration，设置0为不会被自动关闭，默认为 3000 毫秒
          duration: 1000,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },
      open4 () {
        this.$message.error('错了哦，这是一条错误消息')
      },
      open5 () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // then 是点击确定触发
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          // catch 是点击取消触发
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      open6 () {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    }
  }
</script>
