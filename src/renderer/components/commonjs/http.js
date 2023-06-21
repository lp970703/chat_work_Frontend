/*
 * @Description: 
 * @Author: weiguo.cao
 * @Date: 2021-06-10 13:39:26
 * @LastEditTime: 2023-03-30 15:12:45
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import axios from 'axios';
import Vue from 'vue'
import router from '../../router'
import { message } from "ant-design-vue";
import store from "../../store"

// 创建axios实例
// const instance = axios.create({
//   timeout: 30000,
//   baseURL: window.REQUEST_URL.baseUrl,
// })
Vue.prototype.$request = axios;
// window.$isDev = process.env.NODE_ENV === "development"//true 开发 
const request = axios.create({
  timeout: 30000,
  baseURL: window.REQUEST_URL.baseUrl,
})
request.interceptors.request.use(function (config) {
    store.state.spinning = true;
    // 在发送请求之前做些什么
    // config.headers['Authorization'] = "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE2LCJ1c2VybmFtZSI6Ilx1OTVlYlx1NGUzZFx1NTQxYiIsInVzZXJfZW1haWwiOiJsaWp1bi55YW5AY3ljbG9uZS1yb2JvdGljcy5jb20iLCJyYW5kb21fbnVtIjoiMHg2MmY5ZTQzYSIsImlzX291dHNpZGVfdXNlciI6ZmFsc2UsImV4cCI6MTY2MDcxNjg1OC45NTgxMywiYXVkIjoiQVVEX1dFQiJ9.Rhjd4ZdNtz6DNXULkUSFS2542vbDxmYI_lcNHzItSLw'
    if(localStorage.getItem('loginInfo')){
      config.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
    }
    if(config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })
//添加响应拦截器
request.interceptors.response.use(function (response) {
  store.state.spinning = false;
    return response.data;
  }, function (error) {
  store.state.spinning = false; 
    // 对响应错误做点什么
    // token 已过期，重定向到登录页面
    if(401==error.response.status){
      message.destroy();
      message.error('token失效 请重新登录')
      localStorage.clear();
      sessionStorage.clear();
      window.location.href=window.REQUEST_URL.loginUrl
    }else if(403==error.response.status){
      message.error(error.response.data.message)
      router.replace({
        path: '/403',
      })
    }else{
      message.destroy();
      message.error(error.response.data.message)
    }
    return Promise.reject(error);
});
  
export default request;