
import axios from 'axios';
const instance = axios.create();
instance.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
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
debugger;
// const baseURL = process.env.NODE_ENV === 'development' ? test : product;
const baseURL = globalConfig.proxy;
const API = {
  login: baseURL + '/user/login', // 登录
  register: baseURL + '/user/register', // 注册
  addSample: baseURL + '/sample/addSample', // 添加样本
  sampleList: baseURL + '/sample/search', // 用户端样本列表
  sampleListManage: baseURL + '/sample/selectCond', // 管理端样本列表
  sendEmail: baseURL + '/trainResult/sendMail', // 训练结果发送邮件
  trainResult: baseURL + '/trainResult/search', // 训练结果
  forgetPwd: baseURL + '/user/forget', // 忘记密码
  updatePwd: baseURL + '/user/updatePwd', // 更新密码
  updateUser: baseURL + '/user/update', // 更新用户信息
  getUserList: baseURL + '/user/search' // 获取用户列表
  // getUserList: baseURL + '/user/search'
};
export {instance, API};
