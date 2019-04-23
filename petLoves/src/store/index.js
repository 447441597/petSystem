import Vue from 'vue'
import Vuex from 'vuex'

// import users from './users'
import orders from './ordrers'
import petowns from './petowns'
import services from './services'
// import lwj from './lwj'
// import yj from './yj'
// import goods from 'goods'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    petowns, services ,orders
  },
  state: {

  },
  actions: {
    
  }

})








