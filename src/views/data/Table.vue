<template>
  <section>
    <!--工具条-->
    <el-col :span='24' class='toolbar' style='padding-bottom: 0px;'>
      <el-form :inline='true' :model='filters'>
        <el-form-item>
          <el-input v-model='filters.name' placeholder='姓名'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' v-on:click='getUsers'>查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type='primary' @click='handleAdd'>新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <!-- stripe属性可以创建带斑马纹的表格 -->
    <!-- 默认情况下，Table 组件是不具有竖直方向的边框的，可以使用 border 属性，它接受一个Boolean -->
    <!-- el-table元素中定义了height属性，即可实现固定表头的表格 -->
    <!-- 在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false -->
    <!-- v-loading，只需要绑定Boolean即可产生loading效果 -->
    <!-- v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方 -->
    <el-table :data='users' stripe border height='360' highlight-current-row v-loading='listLoading' element-loading-text='拼命加载中' @selection-change='selsChange' style='width: 100%;'>
      <el-table-column type='selection' width='55'>
      </el-table-column>
      <el-table-column type='index' label='序号' width='80'>
      </el-table-column>
      <el-table-column prop='name' label='姓名' width='120' sortable>
      </el-table-column>
      <el-table-column prop='sex' label='性别' width='100' :formatter='formatSex' sortable>
      </el-table-column>
      <el-table-column prop='age' label='年龄' width='100' sortable>
      </el-table-column>
      <el-table-column prop='birth' label='生日' width='120' sortable>
      </el-table-column>
      <el-table-column prop='addr' label='地址' min-width='180' sortable>
      </el-table-column>
      <el-table-column label='操作' width='150'>
        <template scope='scope'>
          <el-button size='small' @click='handleEdit(scope.$index, scope.row)'>编辑</el-button>
          <el-button type='danger' size='small' @click='handleDel(scope.$index, scope.row)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span='24' class='toolbar'>
      <el-button type='danger' @click='batchRemove' :disabled='this.sels.length===0'>批量删除</el-button>
      <!-- size-change 事件处理页码大小变动时候触发的事件 -->
      <!-- current-change 事件处理当前页变动时候触发的事件 -->
      <el-pagination
        @size-change='handleSizeChange'
        @current-change='handleCurrentChange'
        :current-page='currentPage'
        :page-sizes='[10, 20, 30, 40]'
        :page-size='pageCount'
        layout='total, sizes, prev, pager, next, jumper'
        :total='total'
        style='float:right;'>
      </el-pagination>
    </el-col>

    <!--编辑界面-->
    <el-dialog title='编辑' v-model='editFormVisible' :close-on-click-modal='false'>
      <el-form :model='editForm' label-width='80px' :rules='editFormRules' ref='editForm'>
        <el-form-item label='姓名' prop='name'>
          <el-input v-model='editForm.name' auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='性别'>
          <el-radio-group v-model='editForm.sex'>
            <el-radio class='radio' :label='1'>男</el-radio>
            <el-radio class='radio' :label='0'>女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='年龄'>
          <el-input-number v-model='editForm.age' :min='0' :max='200'></el-input-number>
        </el-form-item>
        <el-form-item label='生日'>
          <el-date-picker type='date' placeholder='选择日期' v-model='editForm.birth'></el-date-picker>
        </el-form-item>
        <el-form-item label='地址'>
          <el-input type='textarea' v-model='editForm.addr'></el-input>
        </el-form-item>
      </el-form>
      <div slot='footer' class='dialog-footer'>
        <el-button @click.native='editFormVisible = false'>取消</el-button>
        <el-button type='primary' @click.native='editSubmit' :loading='editLoading'>提交</el-button>
      </div>
    </el-dialog>

    <!--新增界面-->
    <el-dialog title='新增' v-model='addFormVisible' :close-on-click-modal='false'>
      <el-form :model='addForm' label-width='80px' :rules='addFormRules' ref='addForm'>
        <el-form-item label='姓名' prop='name'>
          <el-input v-model='addForm.name' auto-complete='off'></el-input>
        </el-form-item>
        <el-form-item label='性别'>
          <el-radio-group v-model='addForm.sex'>
            <el-radio class='radio' :label='1'>男</el-radio>
            <el-radio class='radio' :label='0'>女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='年龄'>
          <el-input-number v-model='addForm.age' :min='0' :max='200'></el-input-number>
        </el-form-item>
        <el-form-item label='生日'>
          <el-date-picker type='date' placeholder='选择日期' v-model='addForm.birth'></el-date-picker>
        </el-form-item>
        <el-form-item label='地址'>
          <el-input type='textarea' v-model='addForm.addr'></el-input>
        </el-form-item>
      </el-form>
      <div slot='footer' class='dialog-footer'>
        <el-button @click.native='addFormVisible = false'>取消</el-button>
        <el-button type='primary' @click.native='addSubmit' :loading='addLoading'>提交</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
  import util from '../../assets/js/util'
  import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api'

  export default {
    data () {
      return {
        filters: {
          name: ''
        },
        users: [],
        total: 0,
        page: 1,
        pageCount: 20,
        listLoading: false,
        currentPage: 1,
        sels: [], // 列表选中列
        editFormVisible: false, // 编辑界面是否显示
        editLoading: false,
        editFormRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        },
        // 编辑界面数据
        editForm: {
          id: 0,
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        },
        addFormVisible: false, // 新增界面是否显示
        addLoading: false,
        addFormRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        },
        // 新增界面数据
        addForm: {
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        }
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
        this.pageCount = val
        this.getUsers(this.page, this.name, this.pageCount)
      },
      // 性别显示转换
      formatSex: function (row, column) {
        return row.sex === 1 ? '男' : row.sex === 0 ? '女' : '未知'
      },
      handleCurrentChange (val) {
        console.log(`切换到 ${val} 页`)
        this.page = val
        this.getUsers(this.page, this.name, this.pageCount)
      },
      // 获取用户列表
      getUsers () {
        let para = {
          page: this.page,
          name: this.filters.name,
          pageCount: this.pageCount
        }
        this.listLoading = true
        getUserListPage(para).then((res) => {
          this.total = res.data.total
          this.users = res.data.users
          this.listLoading = false
        })
      },
      // 删除
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
      // 显示编辑界面
      handleEdit: function (index, row) {
        this.editFormVisible = true
        this.editForm = Object.assign({}, row)
      },
      // 显示新增界面
      handleAdd: function () {
        this.addFormVisible = true
        this.addForm = {
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        }
      },
      // 编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true
              let para = Object.assign({}, this.editForm)
              para.birth = (!para.birth || para.birth === '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd')
              editUser(para).then((res) => {
                this.editLoading = false
                this.$message({
                  message: '提交成功',
                  type: 'success'
                })
                this.$refs['editForm'].resetFields()
                this.editFormVisible = false
                this.getUsers()
              })
            })
          }
        })
      },
      // 新增
      addSubmit: function () {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true
              let para = Object.assign({}, this.addForm)
              para.birth = (!para.birth || para.birth === '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd')
              addUser(para).then((res) => {
                this.addLoading = false
                this.$message({
                  message: '提交成功',
                  type: 'success'
                })
                this.$refs['addForm'].resetFields()
                this.addFormVisible = false
                this.getUsers()
              })
            })
          }
        })
      },
      selsChange: function (sels) {
        this.sels = sels
      },
      // 批量删除
      batchRemove: function () {
        var ids = this.sels.map(item => item.id).toString()
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true
          let para = { ids: ids }
          batchRemoveUser(para).then((res) => {
            this.listLoading = false
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getUsers()
          })
        }).catch(() => {

        })
      }
    },
    mounted () {
      this.getUsers()
    }
  }
</script>
