import axios from 'axios'
import {axiosRequest} from './ajax'

let base = ''
let hostName = 'http://10.8.115.107:8080'

// Login 页面，用户登陆接口
export const requestLogin = params => {
  return axios.post('/users/login', params)
    .then(res => {
      console.log('返回数据: ', res)
      return res
    }).catch(err => {
      console.log('请求失败: ', err)
      return 500
    })
}

// Basic 页面，获取 userid
export const getUserId = (params) => {
  return axiosRequest({
    method: 'get',
    uri: '/oauth/user',
    host: hostName,
    params: params
  }).then(res => {
    return res
  }).catch(err => {
    console.log('请求失败: ', err)
    return err
  })
}

export const getUserList = params => {
  return axios.get(`${base}/user/list`, {
    params: params
  })
}

export const getUserListPage = params => {
  return axios.get(`${base}/user/listpage`, {
    params: params
  })
}

export const removeUser = params => {
  return axios.get(`${base}/user/remove`, {
    params: params
  })
}

export const batchRemoveUser = params => {
  return axios.get(`${base}/user/batchremove`, {
    params: params
  })
}

export const editUser = params => {
  return axios.get(`${base}/user/edit`, {
    params: params
  })
}

export const addUser = params => {
  return axios.get(`${base}/user/add`, {
    params: params
  })
}
