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
