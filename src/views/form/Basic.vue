<style lang="scss" scoped>
  @import "../../assets/scss/Basic";
</style>

<template>
  <div class="box">
    <!-- Icon 图标 -->
		<div class="block">
			<p>Icon 图标：</p>
			<!-- el-icon-* 定义了一些基础图标 -->
			<i class="el-icon-edit"></i>
			<i class="el-icon-share"></i>
			<i class="el-icon-delete"></i>
			<i class="el-icon-circle-check"></i>
			<i class="el-icon-circle-close"></i>
			<i class="el-icon-upload"></i>
			<i class="el-icon-delete"></i>
			<i class="el-icon-document"></i>
			<i class="el-icon-star-off"></i>
		</div>
    <!-- Badge 标记 -->
		<div class="block">
			<p>Badge 标记：</p>
      <el-badge :value="12" class="badge">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="200" :max="99" class="badge">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge value="new" class="badge">
        <el-button size="small">评论</el-button>
      </el-badge>
      <!-- 除了数字外，设置is-dot属性，它接受一个Boolean -->
      <el-badge is-dot class="badge">数据查询</el-badge>
		</div>
    <!-- Tag 标签 -->
    <div class="block">
			<p>Tag 标签：</p>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        :closable="true"
        :type="tag.type"
        style="margin-right:20px;">
      {{tag.name}}
      </el-tag>
		</div>
    <!-- 进度条 -->
    <div class="block">
			<p>线形进度条：</p>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0" class="progress"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70" class="progress"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success" class="progress"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception" class="progress"></el-progress>
		</div>
    <!-- 进度条 -->
    <div class="block">
			<p>环形进度条：</p>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <!-- 按钮 -->
    <div class="block">
			<p>按钮：</p>
			<!-- el-button：按钮 -->
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<!-- 禁用按钮：使用disabled属性来定义按钮是否可用，它接受一个Boolean值 -->
			<el-button :plain="true" :disabled="true">主要按钮</el-button>
			<!-- 设置了不同的type属性对应的样式（可选值同上） -->
			<el-button type="success">成功按钮</el-button>
	    <el-button type="warning">警告按钮</el-button>
	    <el-button type="danger">危险按钮</el-button>
	    <el-button type="info">信息按钮</el-button>
			<!-- 设置icon属性即可，icon 的列表可以参考 Element 的 icon 组件 -->
			<el-button type="primary" icon="search">搜索</el-button>
			<!-- 要设置为 loading 状态，只要设置loading属性为true即可 -->
			<el-button type="primary" :loading="true">加载中</el-button>
			<!-- 额外的尺寸：large、small、mini，通过设置size属性来配置它们 -->
			<el-button type="primary" size="small">小型按钮</el-button>
		</div>
    <!-- 基础布局 -->
    <div class="block">
			<p>基础布局：</p>
			<!-- el-row：行，el-col：列 -->
			<!-- 每一行分成24等份 -->
			<el-row>
  			<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
			</el-row>
			<el-row>
			  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
			</el-row>
			<p>对齐方式：</p>
			<!-- 将 type 属性赋值为 'flex'，可以启用 flex 布局 -->
			<!-- 通过 justify 属性来指定 start, center, end, space-between, space-around 定义子元素的排版 -->
			<el-row type="flex" class="row-bg" justify="space-around">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<p>分栏间隔：</p>
			<!-- Row 组件 提供 gutter 属性来指定每一栏之间的间隔，单位是px -->
			<el-row :gutter="20">
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>
			<p>混合布局：</p>
			<el-row :gutter="20">
			  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
			  <el-col :span="10"><div class="grid-content bg-purple"></div></el-col>
			  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
  import { getUserId } from '../../api/api'

  export default {
    data () {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }
        ]
      }
    },
    mounted () {
      getUserId().then(res => {
        console.log('授权请求成功：', res)
      }).catch(err => {
        console.log('请求失败', err)
        this.$router.push({ path: '/login' })
      })
    }
  }
</script>
