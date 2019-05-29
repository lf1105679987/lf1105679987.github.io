import Header from './header/index';
import Menu from './menu/index';
import copyRight from './copyright/index';

const components = [ Header, Menu, copyRight ];

const install = function (Vue, options) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  // 2. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  });
};
export default {
  install
};
