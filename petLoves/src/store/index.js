import Vue from 'vue'
import Vuex from 'vuex'


import orders from './ordrers'
import users from './users'
import petowns from './petowns'
import services from './services'
import lwj from './lwj'
import zyz from './zyz'
import yj from './yj'
import goods from './goods'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{

    zyz,
    lwj,
    orders,
    users,
    petowns,
    services,
    goods,
    yj,
  }
})








