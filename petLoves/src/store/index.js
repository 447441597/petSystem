import Vue from 'vue'
import Vuex from 'vuex'
import yj from './yj'
import goods from './goods'
import lwj from './lwj'
import ordrers from './ordrers'
import petowns from './petowns'
import services from './services'
<<<<<<< HEAD
import lwj from './lwj'
import goods from "./goods"
import yj from './yj'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    ordrers,
    users,petowns,
    services,
    goods,
    lwj,yj
=======
import users from './users'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    petowns, services,ordrers,users,lwj,goods,yj
  },
  state: {

  },
  actions: {
    
>>>>>>> af674090e5c6282e990366955774f3ba9372d712
  }

})








