import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import qs from 'qs'
// import { Button, Select } from 'element-ui'
import './assets/icon/iconfont.css'

Vue.use(ElementUI)
// Vue.use(Button)//at.alicdn.com/t/font_2237485_brwu1loddnv.css
// Vue.use(Select)

axios.defaults.baseURL = 'http://127.0.0.1:5050'
// 客户端跨域基本路径
// axios.defaults.baseURL="/api";
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.prototype.qs = qs

Vue.prototype.moment = moment;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
