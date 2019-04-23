import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: {
    setShopsOrders(state, data) {
      state.orders = data;
    },
  },
  actions: {
    getOrders({ commit },ordersType) {
      let page = 1;
      let rows = 5;
      ordersType = ordersType;
      axios({
        method: "get",
        url: "/orders",
        params: {
          page,
          rows,
          ordersType
        }
      }).then(res => {
        commit('setShopsOrders',res.data.rows);
      });
    }
  }
};
