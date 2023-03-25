import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from "./store/index.js";
// 按需导入element
import "./plugins/element.js";

import './assets/common/index.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')

