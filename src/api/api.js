
import axios from 'axios';
import { CookieUtil } from '../utils/utils';
import Vue from 'vue';
import { Message } from 'element-ui';
const instance = axios.create();
instance.interceptors.request.use(config => {
  const my_token = CookieUtil.get('my_token');
  config.headers['Authorization'] = my_token;
  return config;
}, err => {
  return Promise.reject(err);
});

// instance.interceptors.response.use(function (response) {
//   return response
// }, function (error) {
//   return Promise.reject(error)
// })

// test
// http://47.110.70.236:8080
// const test = 'http://127.0.0.1:8010';
// product
// const product = 'http://127.0.0.1:8010';
// const baseURL = process.env.NODE_ENV === 'development' ? test : product;
const baseURL = globalConfig.proxy;
const API = {
  login: baseURL + '/user/login', // 登录
  register: baseURL + '/user/register', // 注册
  addSample: baseURL + '/sample/addSample', // 添加样本
  sampleList: baseURL + '/sample/search', // 用户端样本列表
  sampleListManage: baseURL + '/sample/selectCond', // 管理端样本列表
  sendEmail: baseURL + '/trainResult/sendMail', // 训练结果发送邮件
  downLoadResult: baseURL + '/trainResult/download',
  trainResult: baseURL + '/trainResult/search', // 训练结果
  forgetPwd: baseURL + '/user/forget', // 忘记密码
  updatePwd: baseURL + '/user/updatePwd', // 更新密码
  updateUser: baseURL + '/user/update', // 更新用户信息
  getUserList: baseURL + '/user/search' // 获取用户列表
};

/**
 * ajax这个只用那些需要登录的接口
 */
const ajax = axios.create();
ajax.interceptors.request.use(config => {
  const my_token = CookieUtil.get('my_token');
  if (my_token) {
    config.headers['Authorization'] = my_token;
    return config;
  } else {
    return Promise.reject(new Error('un_login'));
  }
}, err => {
  return Promise.reject(err);
});
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    ajax.post(url, data).then(res => {
      resolve(res);
    }).catch(err => {
      if (err.message === 'un_login') {
        Vue.prototype.$bus.$emit('openLogin');
      } else {
        Message.error('System error, Please try again later!');
      }
      reject(err);
    });
  });
};
export {instance, API, post};
