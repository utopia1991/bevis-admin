import axios from 'axios'
import Authorization from '../assets/js/Authorization'

export const axiosRequest = par => {
  let token
  let { method, uri, host, params } = par
  let user = JSON.parse(localStorage.getItem('user'))

  // method, uri, host 三个参数必须传入后端鉴权
  user.method = method
  user.uri = uri
  user.host = host
  token = Authorization.HmacAuth(user)
  axios.defaults.headers.common['Authorization'] = token

  return axios({
    method: method,
    url: uri,
    params: params
  })
}
