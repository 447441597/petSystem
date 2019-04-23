import Vue from 'vue'
import Vuex from 'vuex'


<<<<<<< HEAD
import zyz from './zyz'
import users from './users'
// import petowns from './petowns'
// import services from './services'
=======
import orders from './ordrers'
// import users from './users'
// import petowns from './petowns'
import services from './services'
>>>>>>> main
// import lwj from './lwj'
// import yj from './yj'
// import goods from 'goods'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
<<<<<<< HEAD
    zyz,users,
    // petowns,services,goods,lwj,yj
=======
    orders,
    // users,petowns,
    services,
    // goods,lwj,yj
>>>>>>> main
  }
})
