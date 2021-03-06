import Vue from 'vue';
import BUS from './bus';
import '@/utils/shim.js';
import '@/stylesheets/index.scss';
import globalCmpt from '@/components/global-cmpts/index';

BUS(Vue);
Vue.config.productionTip = false;
Vue.use(globalCmpt);
