import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Manage from './components/manage'
import Register from './components/register'
import Login from './components/login'
import Users from './components/users'
import Shops from './components/shops'
import Providers from './components/providers'
import PetOwns from './components/petOwns'
import AddUp from './components/addUp'
import ShopManage from './components/shopManage'
import Apply from './components/apply'
import Goods from './components/goods'
import Services from './components/services'
import Orders from './components/orders'
import ShopAddup from './components/shopAddup'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    { path: "/", component: Register },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
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
          path:"/shopManage/apply",
          component:Apply
        },
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
