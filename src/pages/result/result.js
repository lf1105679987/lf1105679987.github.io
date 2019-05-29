import Vue from 'vue';
import Main from './result.vue';
import '@/utils/init.js';
Vue.component(Main.name, Main);
(function () {
  return new Vue({
    el: '#root',
    template: '<Main></Main>'
  });
})();
