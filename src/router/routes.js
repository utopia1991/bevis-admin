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
import Others from '../views/data/Others'
import Notice from '../views/notice/Notice'
import Message from '../views/notice/Message'
import Notification from '../views/notice/Notification'
import VUEX from '../views/others/Vuex'
import Echarts from '../views/others/Echarts'

// 配置路由
let routes = [
  { path: '/login', component: Login, name: '登录', hidden: true },
  { path: '/404', component: NotFound, name: '404', hidden: true },
  { path: '/', redirect: '/index', hidden: true },
  { path: '/', component: Layout, name: '表单', iconCls: 'fa fa-wpforms',
    children: [
      { path: '/index', component: Index, name: '主页', hidden: true },
      { path: '/basic', component: Basic, name: '基础样式' },
      { path: '/input', component: Input, name: '输入框' },
      { path: '/picker', component: Picker, name: '特殊选择器' },
      { path: '/form', component: Form, name: '综合表单' }
    ]
  },
  { path: '/', component: Layout, name: '数据渲染', iconCls: 'fa fa-clipboard',
    children: [
      { path: '/list', component: List, name: '列表' },
      { path: '/table', component: Table, name: '表格' },
      { path: '/tree', component: Tree, name: '树形控件' },
      { path: '/others', component: Others, name: '其他控件' }
    ]
  },
  { path: '/', component: Layout, name: '提示信息', iconCls: 'fa fa-info-circle',
    children: [
      { path: '/notice', component: Notice, name: 'Alert 警告' },
      { path: '/message', component: Message, name: 'Message 消息提示' },
      { path: '/notification', component: Notification, name: 'Notification 通知' }
    ]
  },
  { path: '/', component: Layout, name: '其他', iconCls: 'fa fa-pie-chart',
    children: [
      { path: '/vuex', component: VUEX, name: 'Vuex' },
      { path: '/echarts', component: Echarts, name: 'Charts' }
    ]
  },
  { path: '*', hidden: true, redirect: { path: '/404' } }
]

export default routes
