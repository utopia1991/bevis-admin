import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css' // 引入 font-awesome 图标库
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './router/routes'
// import Mock from './mock' // mock 模拟数据，当真实请求的时候关闭mock
// Mock.bootstrap() // mock 模拟数据，当真实请求的时候关闭mock

Vue.use(ElementUI) // 使用 elment UI
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history', // 使用history模式，去除url中的/#/，但是同时需要后端配置
  routes
})

// 全局路由中间件，权限设置
// to: 即将要进入的目标路由，from: 当前导航正要离开的路由，执行效果依赖 next
router.beforeEach((to, from, next) => {
  // 当前页面即将进入 login 页面（登出）去除 localStorage 中的 user 信息
  if (to.path === '/login') {
    localStorage.removeItem('user')
  }
  let user = JSON.parse(localStorage.getItem('user'))
  // 目的页面不是 login 页但是 user 信息不存在则跳转到 login 页
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
