<style lang="scss" scoped>
  @import "../../assets/scss/Others";
</style>

<template>
  <div class="box">
    <!-- 走马灯 -->
    <div class="block">
      <p>走马灯：</p>
      <!-- el-carousel：走马灯，在有限空间内，循环播放同一类型的图片、文字等内容 -->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 信息提示 -->
    <div class="block">
      信息提示：
      <!-- el-tooltip：信息提示，placement：提示信息出现位置 -->
      <el-tooltip class="item" effect="dark" content="提示文字文本" placement="top-start">
        <el-button>信息提示</el-button>
      </el-tooltip>
    </div>
    <!-- 对话框 -->
    <div class="block">
      对话框：
      <!-- el-button：Button 组件默认提供7种主题，由type属性来定义，默认为default。 -->
      <el-button @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
      <!-- el-dialog：弹出框，title：标题，visible：是否显示 Dialog，支持 .sync 修饰符 -->
      <!-- before-close：关闭之前执行 -->
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible" :before-close="handleClose">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 弹出框 -->
    <div class="block">
      弹出框：
      <!-- el-popover：弹出框，与 Tooltip 很类似，但是可显示信息变多 -->
      <!-- ref：设置索引 -->
      <!-- width：设置宽度 -->
      <!-- trigger：设置何时触发 Popover ，提供三种触发方式：hover, click 和 focus -->
      <el-popover
        ref="popover4"
        placement="right"
        width="500"
        trigger="hover">
        <el-table :data="gridData">
          <el-table-column width="150" property="date" label="日期"></el-table-column>
          <el-table-column width="100" property="name" label="姓名"></el-table-column>
          <el-table-column width="300" property="address" label="地址"></el-table-column>
        </el-table>
      </el-popover>
      <el-button v-popover:popover4>hover 激活</el-button>
    </div>
    <!-- 折叠面板 -->
    <div class="block">
      <p>折叠面板：</p>
      <!-- el-collapse：可同时展开多个面板，面板之间不影响，也可以支持手风琴折叠 -->
      <!-- 默认展开使用 v-model 绑定 -->
      <el-collapse v-model="activeNames">
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 卡片 -->
    <div class="block">
      <p>卡片：</p>
      <!-- el-card：卡片，信息聚合在卡片容器中展示 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">卡片名称</span>
          <el-button style="float: right;" type="primary">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogVisible: false,
        activeNames: ['1']
      }
    },
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      }
    }
  }
</script>
