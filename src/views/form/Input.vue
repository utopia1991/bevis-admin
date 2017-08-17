<style lang="scss" scoped>
  @import "../../assets/scss/Input";
</style>

<template>
  <div class="box">
    <!-- Radio 单选框 -->
		<div class="block">
      Radio 单选框：
      <!-- el-radio：用 Radio 组件，只需要设置v-model绑定变量 -->
      <!-- 选中意味着变量的值为相应 label属性的值，label可以是String或者Number -->
      <!-- 结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model -->
      <!-- 在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，还提供了change事件来响应变化，它会传入一个参数value -->
      <el-radio-group v-model="radio1">
        <el-radio :label="1">选项1</el-radio>
        <el-radio :label="2">选项2</el-radio>
        <el-radio :label="3">选项3</el-radio>
        <el-radio disabled :label="4">禁用</el-radio>
      </el-radio-group>
      <!-- 使用disabled使其禁用 -->
    </div>
    <!-- 按钮样式单选框 -->
    <div class="block">
      按钮样式单选框：
      <el-radio-group v-model="radio2">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" :disabled="true"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <!-- 多选框组 -->
    <div class="block">
      多选框组：
      <!-- el-checkbox 的 label属性是该 checkbox 对应的值 -->
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <!-- checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可 -->
      <!-- 使用 min 和 max 属性能够限制可以被勾选的项目的数量 -->
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="checkbox" :min="1" :max="4">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- 带icon输入框 -->
    <div class="block">
      输入框：
      <!-- 可以通过 icon 属性在 input 组件尾部增加显示图标 -->
      <!-- 可以通过 on-icon-click 钩子函数来在点击图标后执行需要的逻辑 -->
      <el-input
        placeholder="请输入"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick" class="input2">
      </el-input>
    </div>
    <!-- 文本域 -->
    <div class="block">
      文本域：
      <!-- 用于输入多行文本信息，通过将 type 属性的值指定为 textarea -->
      <!-- 通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整 -->
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea" class="textarea">
      </el-input>
    </div>
    <!-- 复合型输入框 -->
    <div class="block">
      复合型输入框：
      <el-input placeholder="请输入内容" v-model="input5" class="multiInput" icon="search" :on-icon-click="handleIconClick">
        <!-- 可通过 slot 来指定在 input 中前置 prepend 或者后置 append 内容 -->
        <el-select v-model="preSelect" slot="prepend" placeholder="请选择" class="preSelect">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <!-- <el-button slot="append" icon="search"></el-button> -->
      </el-input>
    </div>
    <!-- 计数器 -->
    <div class="block">
      计数器：
      <!-- el-input-number 元素中使用 v-model 绑定变量即可，变量的初始值即为默认值 -->
      <!-- 设置step属性可以控制步长，接受一个Number -->
      <el-input-number v-model="num3" :step="2"></el-input-number>
    </div>
    <!-- Select 单选 -->
    <div class="block">
      Select 单选：
      <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
      <!-- 为el-select设置 clearable 属性，则可将选择器清空。clearable属性仅适用于单选 -->
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- Select 多选 -->
    <div class="block">
      Select 多选：
      <!-- 为el-select设置multiple属性即可启用多选 -->
      <el-select v-model="value2" multiple placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- 级联选择器 -->
    <div class="block">
      级联选择器：
      <!-- Cascader 的options属性指定选项数组即可渲染出一个级联选择器 -->
      <!-- 通过expand-trigger可以定义展开子级菜单的触发方式 -->
      <el-cascader
        expand-trigger="hover"
        :options="options3"
        v-model="selectedOptions2"
        @change="handleChange">
      </el-cascader>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳']

  export default {
    data () {
      return {
        radio1: 1,
        radio2: '上海',
        checkAll: true,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
        input2: '',
        textarea: '',
        preSelect: '',
        input5: '',
        num3: 5,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options3: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        value: '',
        value2: ''
      }
    },
    methods: {
      handleChange (value) {
        console.log(value)
      },
      handleIconClick (e) {
        console.log(e.target)
      },
      handleCheckAllChange (event) {
        this.checkedCities = event.target.checked ? cityOptions : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>
