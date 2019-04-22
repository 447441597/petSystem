import Vue from 'vue'
import Vuex from 'vuex'
import zyz from './zyz'
import lwj from './lwj'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    zyz,lwj
  }
})
