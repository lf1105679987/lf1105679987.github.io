
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
const test = 'http://47.110.70.236:8010';
// product
const product = 'http://47.110.70.236:8010';
const baseURL = process.env.NODE_ENV === 'development' ? test : product;
const API = {
  login: baseURL + '/user/login',
  register: baseURL + '/user/register',
  addSample: baseURL + '/sample/addSample',
  sampleList: baseURL + '/sample/search',
  sendEmail: baseURL + '/trainResult/sendMail',
  trainResult: baseURL + '/trainResult/search',
  forgetPwd: baseURL + '/user/forget',
  updatePwd: baseURL + '/user/updatePwd',
  updateUser: baseURL + '/user/update'
};
export {instance, API};
