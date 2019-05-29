import axios from 'axios';
import qs from 'qs';
import toast from '@/utils/toast.js';
import Promise from 'es6-promise';
import { handleParams, getUserInfo, local } from './cl_utils.js';
Promise.polyfill();

export const urlRegex = /^https?:\/\/(([%a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[%a-zA-Z0-9_-](\?)?)*)*$/i;
const API_ROOT = process.env.API_ROOT;
let host = process.env.NODE_ENV === 'development' ? API_ROOT : window.location.origin;

const CancelToken = axios.CancelToken;
var service = axios.create({
  baseURL: host,
  timeout: 30000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
});
service.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
});
service.interceptors.response.use(data => {
  return data.data;
}, error => {
  if (!error.response) {
    toast.error({message: '未知错误!'});
  } else if (error.response.status === 504 || error.response.status === 404) {
    toast.error({message: '服务器被吃了⊙﹏⊙∥'});
  } else if (error.response.status === 403) {
    toast.error({message: '权限不足,请联系管理员!'});
  } else {
    // toast.error({message: '页面请求异常，请刷新页面~'});
  }
  return Promise.reject(error);
});

let isLocal = process.env.NODE_ENV === 'development';
let testSite = 'https://gcxt-beta.myfuwu.com.cn';
// 本地如果调用的https://gcxt-huangcf.myyscm.com接口则所有接口需要附加/imy/m/ClMain
// 本地如果调用的纯飞本地的接口则所有接口不需要需要附加/imy/m/ClMain

function doPost (url, data, option) {
  function getAccrossToken () {
    return new Promise((resolve, reject) => {
      let params = {};
      params.sec_key = getUserInfo().sec_key || '';
      params.user_id = getUserInfo().user_guid || '';
      service({
        method: 'post',
        url: '/user/get-access-token',
        data: params
      }).then(res => {
        if (res.success) {
          let erpUserinfo = local.get('erp_userinfo', true);
          erpUserinfo.access_token = res.data || '';
          local.set('erp_userinfo', erpUserinfo);
          doService();
        } else {
          reject(res);
        }
      });
    });
  }
  function doService () {
    return new Promise((resolve, reject) => {
      if (!option.noHandleData) {
        data = handleParams(data || {});
      }
      service({
        method: 'post',
        url,
        data: data,
        cancelToken: new CancelToken(c => {
          if (option && option.cancel && typeof option.cancel === 'function') {
            option.cancel(c);
          }
        })
      }).then(res => {
        if (res.success) {
          resolve(res);
        } else {
          if (res.code === '0000') {
            // 重新获取token
            getAccrossToken();
          } else {
            if (!data.noTipError) {
              toast.error({
                message: res.message || '页面请求异常，请刷新页面~'
              });
            }
            reject(res);
          }
        }
      }, error => {
        reject(error);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }
  return doService();
}
// 请求方式的配置
export default {
  // option cancel将请求对象传出去   noHandleData使用原始参数，不进行参数加工
  post (url, data = {}, option = {}) {
    if (process.env.API_ROOT === testSite) { // 开发环境且访问接口为 testSite
      if (!data.use_origin) {
        url = '/imy/m/ClMain' + url;
      }
    } else {
      if (!isLocal && !data.use_origin) { // 线上环境所有接口默认加/imy/m/ClMain
        url = '/imy/m/ClMain' + url;
      } else {
        // 默认直接使用url  即本地调用纯飞本地接口
      }
    }
    return doPost(url, data, option);
    // return new Promise((resolve, reject) => {
    //   data = handleParams(data || {});
    //   service({
    //     method: 'post',
    //     url,
    //     data: data,
    //     cancelToken: new CancelToken(c => {
    //       if (option && option.cancel && typeof option.cancel === 'function') {
    //         option.cancel(c)
    //       }
    //     })
    //   }).then(res => {
    //     if (res.success) {
    //       resolve(res);
    //     } else {
    //       if (!data.noTipError) {
    //         toast.error({
    //           message: res.message || '页面请求异常，请刷新页面~'
    //         })
    //       }
    //       reject(res);
    //     }
    //   }, error => {
    //     reject(error);
    //   }).catch((error) => {
    //     reject(error)
    //   })
    // })
  }
};
