import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
//nedb数据库
import db from './datastore'
Vue.prototype.$db = db

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

// // rem适配
// function setRem() {
//   var whdef = 100/1920;// 表示1920的设计图,使用100PX的默认值
//   var bodyWidth = document.body.clientWidth;// 当前窗口的宽度
//   var rem = bodyWidth * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
//   document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
// }
// window.addEventListener('load', setRem);
// window.addEventListener('resize', setRem);