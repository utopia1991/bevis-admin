<style lang="scss" scoped>
  @import "../../assets/scss/Input";
</style>

<template>
  <div class="box">
    <!-- 开关 -->
    <div class="block">
      开关：
      <!-- el-switch 绑定v-model到一个Boolean类型的变量 -->
      <!-- 可以使用on-text属性与off-text属性来设置开关的文字描述 -->
      <!-- 使用on-color属性与off-color属性来设置开关的背景色 -->
      <el-switch
        v-model="value1"
        on-color="#13ce66"
        off-color="#ff4949"
        on-text="开"
        off-text="关">
      </el-switch>
    </div>
    <!-- Slider 滑块 -->
    <div class="block">
      Slider 滑块：
      <!-- 设置show-input属性会在右侧显示一个输入框 -->
      <el-slider v-model="value2" show-input></el-slider>
    </div>
    <!-- 时间选择器 -->
    <div class="block">
      时间选择器：
      <el-time-picker
        is-range
        v-model="value3"
        placeholder="选择时间范围">
      </el-time-picker>
    </div>
    <!-- 日期选择器 -->
    <div class="block">
      日期选择器：
      <el-date-picker
        v-model="value4"
        type="daterange"
        align="left"
        placeholder="选择日期范围"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <!-- 时间日期选择器 -->
    <div class="block">
      时间日期选择器：
      <el-date-picker
        v-model="value5"
        type="datetimerange"
        :picker-options="pickerOptions2"
        placeholder="选择时间范围"
        align="left">
      </el-date-picker>
    </div>
    <!-- 文件上传 -->
    <div class="block">
      文件上传：
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传文件</div>
      </el-upload>
    </div>
    <!-- 评分 -->
    <div class="block">
      评分：
      <el-rate
        class="rate"
        v-model="value6"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
      <!-- 为组件设置 disabled 属性表示组件为只读 -->
      <el-rate
        class="rate"
        v-model="value7"
        disabled
        show-text
        text-color="#ff9900"
        text-template="{value}">
      </el-rate>
    </div>
    <!-- 穿梭框 -->
    <div class="block">
      穿梭框：
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value8"
        :data="data8"
        style="display:inline-block">
      </el-transfer>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      const generateData2 = _ => {
        const data = []
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          })
        })
        return data
      }
      return {
        value1: true,
        value2: 50,
        value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        pickerOptions1: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value4: '',
        value5: '',
        value6: null, // 评分必须返回数字或者null
        value7: 3.7,
        fileList: [],
        data8: generateData2(),
        value8: [],
        filterMethod (query, item) {
          return item.pinyin.indexOf(query) > -1
        }
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>
