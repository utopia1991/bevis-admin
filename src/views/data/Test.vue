<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>

<template>
  <el-tabs v-model="active" type="border-card">
    <el-tab-pane label="测试1" name="1">
      <el-row :gutter="20">
        <el-col :span="2">ID：</el-col>
        <el-col :span="20">
          <el-input v-model="input0" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">姓名：</el-col>
        <el-col :span="20">
          <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">地址：</el-col>
        <el-col :span="20">
          <el-input v-model="input2" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">年龄：</el-col>
        <el-col :span="20">
          <el-input v-model="input3" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">出生：</el-col>
        <el-col :span="20">
          <el-input v-model="input4" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2">性别：</el-col>
        <el-col :span="20">
          <el-input v-model="input5" placeholder="请输入内容" :formatter='formatSex'></el-input>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="测试2" name="2">
      测试2
    </el-tab-pane>
    <el-tab-pane label="测试3" name="3">测试3</el-tab-pane>
    <el-tab-pane label="测试4" name="4">测试4</el-tab-pane>
  </el-tabs>

</template>
<script>
  export default {
    data () {
      return {
        active: '1',
        input0: this.$route.query.id,
        input1: this.$route.query.name,
        input2: this.$route.query.addr,
        input3: this.$route.query.age,
        input4: this.$route.query.birth,
        input5: this.$route.query.sex
      }
    },
    methods: {
      formatSex: function (row, column) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
      }
    },
    mounted () {
    }
  }
</script>
