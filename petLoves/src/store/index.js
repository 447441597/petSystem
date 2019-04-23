import Vue from 'vue'
import Vuex from 'vuex'

import ordrers from './ordrers'
import users from './users'
import petowns from './petowns'
import services from './services'
import lwj from './lwj'
import goods from "./goods"
// import yj from './yj'
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








