import Vue from 'vue'
import axios from 'axios'
import env from './env'

const service = axios.create(env)

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})
Vue.prototype.$http = service
