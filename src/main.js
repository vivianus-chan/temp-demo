// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import './assets/base.css'
// import 'normalize.css'
import vueWechatTitle from 'vue-wechat-title'
import axios from 'axios'
import qs from 'qs'
// import utils from './utils/utils'
// import './utils/qrcode.js'

Vue.prototype.axios = axios
Vue.prototype.qs = qs
// Vue.prototype.utils = utils
Vue.use(vueWechatTitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
