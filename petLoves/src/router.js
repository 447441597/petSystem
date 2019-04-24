import Vue from 'vue'
import Router from 'vue-router'
import Manage from './components/manage'
import Register from './components/register'
import Login from './components/login'
import Users from './components/users'
import Shops from './components/shops'
import Providers from './components/providers'
import PetOwns from './components/petOwns'
import AddUp from './components/addUp'
import ShopManage from './components/shopManage'
import Goods from './components/goods'
import Services from './components/services'
import Orders from './components/orders'
import ShopAddup from './components/shopAddup'
import Apply from './components/apply/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", component: Register },
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
          path:"/manage/addUp",
          component:AddUp
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
          component:Services
        },
        {
          path:"/shopManage/orders",
          component:Orders
        },
        {
          path:"/shopManage/shopAddup",
          component:ShopAddup
        }
      ]
    }
  ]
})
