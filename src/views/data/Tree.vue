<style lang="scss" scoped>
  @import "../../assets/scss/Input";
</style>

<template>
  <div class="box">
    <div class="block">
      <!-- Tree 树形控件 -->
      <!-- show-checkbox 显示可选 -->
      <!-- default-expanded-keys 设置默认展开节点 -->
      <!-- default-checked-keys 设置默认选中的节点，必须设置node-key，其值为节点数据中的一个字段名，该字段在树中是唯一的 -->
      <el-tree
        :data="data2"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[1,2,3]"
        :default-checked-keys="[5]"
        :props="defaultProps">
      </el-tree>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>
