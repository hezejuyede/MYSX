import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios'
import './common/less/base.less'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
