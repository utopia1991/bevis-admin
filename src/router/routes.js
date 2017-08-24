// 引入视图
import Login from '../views/Login'
import NotFound from '../views/404'
import Layout from '../views/Layout'
import Index from '../views/Index'
import Basic from '../views/form/Basic'
import Input from '../views/form/Input'
import Picker from '../views/form/Picker'
import Form from '../views/form/Form'
import Table from '../views/data/Table'
import Tree from '../views/data/Tree'
import List from '../views/data/List'
import Test from '../views/data/Test'
import Others from '../views/data/Others'
import Notice from '../views/notice/Notice'
import Message from '../views/notice/Message'
import Notification from '../views/notice/Notification'
import VUEX from '../views/others/Vuex'
import Echarts from '../views/others/Echarts'

// 配置路由
let routes = [
  { path: '/login', component: Login, name: 'login', hidden: true },
  { path: '/404', component: NotFound, name: '404', hidden: true },
  { path: '/', redirect: '/index', hidden: true },
  { path: '/', component: Layout, iconCls: 'fa fa-wpforms', name: '主页', title: '主页', leaf: true, // 只有一个节点
    children: [
      { path: '/index', component: Index, name: 'index', title: '主页' }
    ]
  },
  { path: '/', component: Layout, iconCls: 'fa fa-wpforms', name: '基础样式', title: '基础样式',
    children: [
      { path: '/basic', component: Basic, name: 'basic', title: '基本组件' },
      { path: '/input', component: Input, name: 'input', title: '输入框' },
      { path: '/picker', component: Picker, name: 'picker', title: '选择器' },
      { path: '/form', component: Form, name: 'form', title: '表单' }
    ]
  },
  { path: '/', component: Layout, iconCls: 'fa fa-clipboard', name: '数据渲染', title: '数据渲染',
    children: [
      { path: '/list', component: List, name: 'list', title: '列表' },
      { path: '/list/test', component: Test, name: 'test', hidden: true },
      { path: '/table', component: Table, name: 'tabel', title: '表格' },
      { path: '/tree', component: Tree, name: 'tree', title: '树形插件' },
      { path: '/others', component: Others, name: 'others', title: '其他控件' }
    ]
  },
  { path: '/', component: Layout, iconCls: 'fa fa-info-circle', name: '提示信息', title: '提示信息',
    children: [
      { path: '/notice', component: Notice, name: 'alert', title: '提示框' },
      { path: '/message', component: Message, name: 'message', title: '信息框' },
      { path: '/notification', component: Notification, name: 'notification', title: '消息框' }
    ]
  },
  { path: '/', component: Layout, iconCls: 'fa fa-pie-chart', name: '其他', title: '其他',
    children: [
      { path: '/vuex', component: VUEX, name: 'vuex', title: 'vuex' },
      { path: '/echarts', component: Echarts, name: 'charts', title: 'charts' }
    ]
  },
  { path: '*', hidden: true, redirect: { path: '/404' } }
]

export default routes
