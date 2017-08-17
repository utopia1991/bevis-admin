<style lang="scss" scoped>
  @import "../../assets/scss/Input";
  .el-alert {
    margin: 20px 0;
  }
</style>

<template>
  <div class="box">
    <div class="block">
      Alert 警告，用于页面中展示重要的提示信息：
      <el-alert
        title="成功提示的文案"
        type="success">
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info">
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning">
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error">
      </el-alert>
    </div>
		<div class="block">
      带有 icon 的 Alert 警告：
      <!-- el-alert：Alert 警告 用于页面中展示重要的提示信息 -->
      <!-- title	标题，必选参数	string -->
      <!-- type	主题	string -->
      <!-- description	辅助性文字。也可通过默认 slot 传入	string -->
      <!-- closable	是否可关闭	boolean -->
      <!-- show-icon	是否显示图标	boolean -->
      <el-alert
        title="成功提示的文案"
        type="success"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon
        @close="hello">
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      hello () {
        alert('hello')
      }
    }
  }
</script>
