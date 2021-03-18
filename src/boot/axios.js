import Vue from 'vue'
import axios from 'axios'
import env from './env'

const service = axios.create(env)
// 请求拦截器
service.interceptors.request.use((config) => {
  return Promise.resolve(config)
}, (error) => {
  return Promise.reject(error)
})

// // // 响应拦截器
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
