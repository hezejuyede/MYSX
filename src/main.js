import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/less/base.less'
import VueLazylord from 'vue-lazyload'
import VDistpicker from 'v-distpicker'
import Croppa from 'vue-croppa'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';








Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazylord, {
  loading: require('./common/image/logo.png')
});
Vue.component('v-distpicker', VDistpicker);
Vue.use(Croppa);
Vue.use(VueSocketio, socketio('http://localhost:3000'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    Hub: new Vue()
  }
});
