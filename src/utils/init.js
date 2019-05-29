import Vue from 'vue';
import '@/utils/shim.js';
import '@/stylesheets/index.scss';
import globalCmpt from '@/components/global-cmpts/index';

Vue.config.productionTip = false;
Vue.use(globalCmpt);
