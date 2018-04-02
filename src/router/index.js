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
import cartProduct from '../components/buyProduct/cartProduct.vue'
import PayPage from '../components/payPage/payPage.vue'

import NowRec from '../components/navbar/nowRec/nowRec.vue'
import Discount from '../components/navbar/Discount/Discount.vue'
import FreeEat from '../components/navbar/freeEat/freeEat.vue'
import LogisticsInfo from '../components/navbar/jxlh/jxlh.vue'
import LxKf from '../components/navbar/LxKf/LxKf.vue'
import myOrder from '../components/navbar/myOrder/myOrder.vue'
import TsCy from '../components/navbar/TsCy/TsCy.vue'
import weekSell from '../components/navbar/weekSell/weekSell.vue'
import XsMs from '../components/navbar/XsMs/XsMs.vue'
import YcJx from '../components/navbar/ycjx/ycjx.vue'








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
    },
    {
      path: '/cartProduct',
      name: 'cartProduct',
      component: cartProduct
    },
    {
      path: '/PayPage',
      name: 'PayPage',
      component: PayPage
    },



    {
      path: '/nowRec',
      name: 'NowRec',
      component: NowRec
    }
    ,
    {
      path: '/Discount',
      name: 'Discount',
      component: Discount
    }
    ,
    {
      path: '/FreeEat',
      name: 'FreeEat',
      component: FreeEat
    }
    ,
    {
      path: '/LogisticsInfo',
      name: 'LogisticsInfo',
      component: LogisticsInfo
    }
    ,
    {
      path: '/LxKf',
      name: 'LxKf',
      component: LxKf
    }
    ,
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    }
    ,
    {
      path: '/TsCy',
      name: 'TsCy',
      component: TsCy
    }
    ,
    {
      path: '/weekSell',
      name: 'weekSell',
      component: weekSell
    } ,
    {
      path: '/XsMs',
      name: 'XsMs',
      component: XsMs
    } ,
    {
      path: '/YcJx',
      name: 'YcJx',
      component: YcJx
    }



  ]
})
