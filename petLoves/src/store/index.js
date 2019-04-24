import Vue from 'vue'
import Vuex from 'vuex'
import yj from './yj'
import goods from './goods'
import lwj from './lwj'
import ordrers from './ordrers'
import petowns from './petowns'
import services from './services'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    ordrers,
    petowns,
    services,
    goods,
    lwj,yj
  }

})








