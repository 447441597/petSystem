import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    orders: [],
    pagination: {
      total: "",
      eachpage: ""
    }
  },
  mutations: {
    setShopsOrders(state, data) {
      state.orders = data;
    },
    setPagination(state, data) {
      state.pagination.total = data.total,
      state.pagination.eachpage = data.eachpage
      // console.log(state.pagination,'pagination')
    }
  },
  actions: {
    getOrders({ commit },playload) {
      console.log('object',playload)
      let page = 1;
      let rows = 5;
      let ordersType = playload.ordersType || 0;
      let type = playload.type || '';
      let value = playload.value || '';
      axios({
        method: "get",
        url: "/orders",
        params: {
          page,
          rows,
          ordersType,
          type,
          value
        }
      }).then(res => {
        console.log(res, "请求会的数据");
        commit("setPagination", res.data);
        commit("setShopsOrders", res.data.rows);
      });
    },
    getOrdersStatus({ commit }, playload) {
      let page = 1;
      let rows = 5;
      let status = playload.ordersType || 0;
      axios({
        method: "get",
        url: "/orders/status",
        params: {
          page,
          rows,
          status
        }
      }).then(res => {
        // console.log(res.data, "请求来的状态数据");
        commit("setPagination", res.data);
        commit("setShopsOrders", res.data.rows);
      });
    }
  }
};
