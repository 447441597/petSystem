import Vue from 'vue'
import Vuex from 'vuex'
import yj from './yj'
import goods from './goods'
import lwj from './lwj'
import ordrers from './ordrers'
import petowns from './petowns'
import services from './services'
import users from './users'
import serverType from './serverType'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    petowns, services,ordrers,users,lwj,goods,yj,serverType
  },
  state: {

  },
<<<<<<< HEAD
 
=======
  actions: {
    
  }
>>>>>>> 4e22087ac5f4382c56e1264bc6d7fa7b3fb7eb62

})








