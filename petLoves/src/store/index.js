import Vue from 'vue'
import Vuex from 'vuex'
import yj from './yj'
import goods from './goods'
import lwj from './lwj'
import ordrers from './ordrers'
import petowns from './petowns'
import services from './services'
<<<<<<< HEAD
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
    
=======
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    ordrers,
    petowns,
    services,
    goods,
    lwj,yj
>>>>>>> 8cb565583a2b4bbdbc6683932b6ea094a242e9c7
  }
>>>>>>> 4e22087ac5f4382c56e1264bc6d7fa7b3fb7eb62

})








