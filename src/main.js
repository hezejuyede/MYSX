import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/less/base.less'
import axios from 'axios'
import VueLazylord from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazylord, {
  loading: require('./common/image/logo.png')
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    Hub: new Vue()
  }
});
