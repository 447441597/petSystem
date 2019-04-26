import Vue from 'vue'
import Router from 'vue-router'
import Manage from './components/manage'
import Register from './components/register'
import Login from './components/login'
import Users from './components/users'
import Shops from './components/shops'
import Providers from './components/providers'
import PetOwns from './components/petOwns'
import ShopManage from './components/shopManage'
import Goods from './components/goods'
import Services from './components/services'
import Orders from './components/orders'
import ShopAddup from './components/shopAddup'
import GoodsRatio from './components/addUp/salesMoney/GoodsRatio'
import ServicesRatio from './components/addUp/salesMoney/ServicesRatio'
import GoodsMoneyRatio from './components/addUp/salesMoneyRatio/GoodsMoneyRatio'
import ServicesMoneyRatio from './components/addUp/salesMoneyRatio/ServicesMoneyRatio'
import GoodsSaleNum from './components/shopAddup/salesNum/GoodsSaleNum'
import ServiceSaleNum from './components/shopAddup/salesNum/ServiceSaleNum'
import GoodsMoney from './components/shopAddup/shopSalesMoney/GoodsMoney'
import ServiceMoney from './components/shopAddup/shopSalesMoney/ServiceMoney'
import Apply from './components/apply/index.vue'
import MapRatio from './components/addUp/map/index.vue'
import SalesMoneyRatio from './components/addUp/salesMoneyRatio'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    { path: "/", component: Login },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/apply", component: Apply },
    {
      path: "/manage",
      component: Manage,
      children:[
        {
          path:"/manage/users",
          component:Users
        },
        {
          path:"/manage/shops",
          component:Shops
        },
        {
          path:"/manage/petOwns",
          component:PetOwns
        },
        {
          path:"/manage/providers",
          component:Providers
        },
        {
          path:"/manage/GoodsRatio",
          component:GoodsRatio
        },
        {
          path:"/manage/ServicesRatio",
          component:ServicesRatio
        },
        {
          path:"/manage/GoodsMoneyRatio",
          component:GoodsMoneyRatio
        },
        {
          path:"/manage/ServicesMoneyRatio",
          component:ServicesMoneyRatio
        },
        {
          path:"/manage/MapRatio",
          component:MapRatio
        }
      ]
    },
    {
      path: "/shopManage",
      component: ShopManage,
      children:[
        {
          path:"/shopManage/goods",
          component:Goods
        },
        {
          path:"/shopManage/services",
          component:Services,
        },
        {
          path:"/shopManage/orders",
          component:Orders
        },
        {
          path:"/shopManage/GoodsSaleNum",
          component:GoodsSaleNum
        },
        {
          path:"/shopManage/ServiceSaleNum",
          component:ServiceSaleNum
        },
        {
          path:"/shopManage/GoodsMoney",
          component:GoodsMoney
        },
        {
          path:"/shopManage/ServiceMoney",
          component:ServiceMoney
        }
      ]
    }
  ]
})
