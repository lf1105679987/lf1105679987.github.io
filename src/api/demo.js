/**
 * 项目调用管理
 */
import axios from '@/utils/axios.js';
import api from './api.js';
/**
 * 示例
 * @param {Object} data 参数
 */
export const fetchDemo = (data) => {
  return axios.post(api.demo[1], data);
};
