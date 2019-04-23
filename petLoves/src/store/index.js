import Vue from 'vue'
import Vuex from 'vuex'

import ordrers from './ordrers'
import users from './users'
import petowns from './petowns'
import services from './services'
import lwj from './lwj'
// import yj from './yj'
import goods from 'goods'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    petowns, services,ordrers,users,lwj,goods
  },
  state: {

  },
  actions: {
    
  }

})








