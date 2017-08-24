<style lang="scss" scoped>
  .toolbar {
    padding-bottom: 0px
  }
</style>

<template>
  <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="列表" name="first">
      <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
          <el-form :inline="true" :model="filters">
            <el-form-item>
              <el-input v-model="filters.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="getUser">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <!--列表-->
        <template>
          <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%">
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120" sortable>
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100" sortable>
            </el-table-column>
            <el-table-column prop="birth" label="生日" width="120" sortable>
            </el-table-column>
            <el-table-column prop="addr" label="地址" min-width="180" sortable>
            </el-table-column>
            <el-table-column label='操作' width='150'>
              <template scope='scope'>
                <router-link :to="{ name:'test', query: scope.row }">
                  <el-button size='small'>编辑</el-button>
                </router-link>
                <el-button type='danger' size='small' @click='handleDel(scope.$index, scope.row)'>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </section>
    </el-tab-pane>
    <el-tab-pane label="富文本框" name="second">
      <div class="hello">
        <div id="editor" type="text/plain" style="width:100%;height:380px;"></div>
        <button @click="submits">保存</button>
        <button @click="xieru">写入</button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>

</template>
<script>
  import { getUserList, removeUser } from '../../api/api'
  import '../../assets/libs/ueditor/ueditor.config'
  import '../../assets/libs/ueditor/ueditor.all.min'
  import '../../assets/libs/ueditor/ueditor.parse.min'
  import '../../assets/libs/ueditor/lang/zh-cn/zh-cn'
  // import '../../../static/libs/kityformula-plugin/addKityFormulaDialog'
  // import '../../../static/libs/kityformula-plugin/getKfContent'
  // import '../../../static/libs/kityformula-plugin/defaultFilterFix'

  export default {
    data () {
      return {
        filters: {
          name: ''
        },
        activeName2: 'first',
        loading: false,
        users: [],
        ue: '',
        uedata: [],
        xierudata: []
      }
    },
    methods: {
      submits () {
        this.uedata.push(window.UE.getEditor('editor').getContent())
        console.log(this.uedata.join('\n'))
      },
      xieru () {
        window.UE.getEditor('editor').setContent('欢迎使用ueditor')
      },
      handleClick (tab, event) {
        console.log(tab, event)
      },
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true
          let para = { id: row.id }
          removeUser(para).then((res) => {
            this.listLoading = false
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getUsers()
          })
        }).catch(() => {

        })
      },
      // 性别显示转换
      formatSex: function (row, column) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
      },
      // 获取用户列表
      getUser: function () {
        let para = {
          name: this.filters.name
        }
        this.loading = true
        getUserList(para).then((res) => {
          this.users = res.data.users
          this.loading = false
        })
      }
    },
    mounted () {
      this.getUser()
      this.ue = window.UE.getEditor('editor', {
        BaseUrl: ''
        // toolbars:[]
      })
    }
  }
</script>
