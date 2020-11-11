import axios from 'axios'
// import { Notify } from 'vant';
// import NProgress from 'nprogress'
import { serverUrl } from './tools'
const instance = axios.create({
  timeout: 5000, // 请求超时时间
  baseURL: serverUrl, // 请求的基础地址
  withCredentials: true
})
// 全局请求拦截，在发起请求之前触发
// 1.添加全局loading
// 在请求头中添加token
// instance.interceptors.request.use(function (config) {
//   NProgress.start()
//   return config;
// }, function (error) {

//   return Promise.reject(error);
// });

// 全局相应拦截，网络请求返回之后触发，可以做错误处理，比如请求超时
// 清除loading
// 错误异常处理
// instance.interceptors.response.use(function (response) {
//   NProgress.done()
//   return response.data;
// }, function (error) {
//   NProgress.done()
//   if(error.message && error.message.indexOf('timeout')>-1){
//     Notify({
//       type:'danger',
//       message:'网络不稳定,请刷新重试'
//     });
//   }
//   console.dir(error)
//   return Promise.reject(error);
// });
/**
 * 发起get请求
 * @param {*} url
 * @param {*} params
 */
export const get = (url, params) => instance.get(url, { params })

/**
 * 发起post请求
 * @param {*} url
 * @param {*} data
 */
export const post = (url, data) => instance.post(url, data)

/**
 * put请求
 * @param {*} url
 * @param {*} data
 */
export const put = (url, data) => instance.put(url, data)

/**
 * delete请求
 * @param {*} url
 */
export const del = url => instance.delete(url)
