// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入echarts(全局引用配合jquery)
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

//引入iview框架
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)

import directives from '../directive/directives.js'
directives(Vue)
//引入axios
import axios from 'axios'
import Qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

