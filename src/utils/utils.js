/**
 * buildUrl   Function of URL link splicing parameters
 * @param {String} url Links requiring splicing parameters
 * @param {Object} opt Objects that need to splice parameters into links
 * @returns {String} Return the link completed by splicing
 */
export const buildUrl = (url, opt = {}) => {
  const hasParams = url.indexOf('?') > -1;
  let paramsStrList = [];
  Object.keys(opt).forEach(el => {
    paramsStrList.push(`${el}=${opt[el]}`);
  });
  if (hasParams) {
    url = url + '&' + paramsStrList.join('&');
  } else {
    url = url + '?' + paramsStrList.join('&');
  }
  return url;
};

export const getUrlParams = () => {
  const url = location.href.split('?')[1];
  if (url) {
    const search = url.split('&');
    const obj = {};
    search.forEach(ele => {
      const key = ele.split('=')[0];
      const val = ele.split('=')[1];
      obj[key] = val;
    });
    return obj;
  }
  return {};
};
export const CookieUtil = {
  // 设置cookie
  set: function (name, value, expires, domain, path, secure) {
    var cookieText = '';
    cookieText += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += '; expires=' + expires.toGMTString();
    }
    if (path) {
      cookieText += '; path=' + path;
    }
    if (domain) {
      cookieText += '; domain=' + domain;
    }
    if (secure) {
      cookieText += '; secure';
    }
    document.cookie = cookieText;
  },
  // name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
  // 获取cookie
  get: function (name) {
    const cookieName = encodeURIComponent(name) + '=';
    let cookieStart = document.cookie.indexOf(cookieName);
    let cookieValue = '';
    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
  },
  // 删除cookie
  unset: function (name, domain, path, secure) {
    this.set(name, '', Date(0), domain, path, secure);
  }
};

export const getUserInfo = () => {
  let userinfo = {};
  try {
    userinfo = JSON.parse(CookieUtil.get('userinfo')) || {};
  } catch (error) {
    userinfo = {};
  }
  return userinfo;
};
