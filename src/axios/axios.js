import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router/routes'

const axiosPlugin = axios.create({
  // baseURL: '/', // 因为我本地做了反向代理
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带 cookie 这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 添加响应拦截器
axiosPlugin.interceptors.response.use(
  res => {
    // 对响应数据做些事
    if (res.data && !res.data.success) {
      Message({ // 饿了么的消息弹窗组件
        showClose: true,
        message: res.data.error.message.message ? res.data.error.message.message : res.data.error.message,
        type: 'error'
      })
      return Promise.reject(res.data.error.message)
    }
    return res
  },
  error => {
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
    if (!window.localStorage.getItem('user')) {
      router.push({
        path: '/login'
      })
    } else {
      // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间,返回去登录页
      let lifeTime = JSON.parse(window.localStorage.getItem('user')).time * 1000
      let nowTime = (new Date()).getTime() // 当前时间的时间戳
      if (nowTime > lifeTime) {
        Message({
          showClose: true,
          message: '登录状态信息过期,请重新登录',
          type: 'error'
        })
        router.push({
          path: '/login'
        })
      }
    }
    // 下面是接口回调的 status，一些错误页面都会指向对应的报错页面
    if (error.response.status === 403 || error.response.status === 404) {
      router.push({
        path: '/404'
      })
    }
    if (error.response.status === 500 || error.response.status === 502) {
      router.push({
        path: '/500'
      })
    }
    // 返回 response 里的错误信息
    return Promise.reject(error)
  }
)

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default axiosPlugin
