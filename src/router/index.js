import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/classify/classify.vue'
import Details from '../components/details/details.vue'
import GoodsDetails from '../components/goodsDetails/goodsDetails.vue'
import Index from '../components/index/index.vue'
import Login from '../components/loggin/login.vue'
import Register from '../components/register/register.vue'
import ShoppingCart from '../components/shoppingCart/shoppingCart.vue'
import UserInfo from '../components/userInfo/userInfo.vue'
import Nearby from '../components/nearby/nearby.vue'
import Search from '../components/search/search.vue'
import BuyProduct from '../components/buyProduct/buyProduct.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/GoodsDetails/',
      name: 'GoodsDetails',
      component: GoodsDetails
    },
    {
      path: '/Nearby',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/BuyProduct',
      name: 'BuyProduct',
      component: BuyProduct
    }
  ]
})
