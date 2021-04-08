import Vue from 'vue'
import axios from 'axios'
// import env from './env'

const service = axios.create({
  baseURL: 'https://gpcard.playinjoy.com/page/proxy2',
  timeout: 2000,
  withCredentials: true,
  headers: {
    'Set-Cookie': 'collect_session_id=1617853813140mZBzhMwPNmsX2HjQ',
    'Content-Type': 'application/json'
  }
})
// 请求拦截器
service.interceptors.request.use((config) => {
  return Promise.resolve(config)
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((config) => {
  if (config && config.Message === '成功') {
    return Promise.resolve(config.data)
  } else {
    const arr = []
    return Promise.resolve(arr)
  }
}, (err) => {
  console.log(err, 'err')
  return Promise.reject(err)
})

Vue.prototype.$http = service
