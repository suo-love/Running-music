import axios from "axios"
import { serverUrl} from "./tools";
const instance = axios.create({
  timeout: 5000, // 请求超时时间
  baseURL: serverUrl, // 请求的基础地址
})

/**
 * 发起get请求
 * @param {*} url
 * @param {*} params
 */
export const get = (url, params) => instance.get(url, { params });

/**
 * 发起post请求
 * @param {*} url
 * @param {*} data
 */
export const post = (url, data) => instance.post(url, data);

/**
 * put请求
 * @param {*} url
 * @param {*} data
 */
export const put = (url, data) => instance.put(url, data);

/**
 * delete请求
 * @param {*} url
 */
export const del = (url) => instance.delete(url);

