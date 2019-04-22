import Vue from 'vue'
import Vuex from 'vuex'


import zyz from './zyz'
// import users from './users'
import petowns from './petowns'
import services from './services'
// import lwj from './lwj'
// import yj from './yj'
// import goods from 'goods'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    zyz, petowns, services
  }
})
