import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    ordersLength: '',
    pagination: {
      total: "",
      eachpage: ""
    },
    ordersData:[],
    tab:'服务订单'
  },
  mutations: {
    setShopsOrders(state, data) {
      // console.log(data,"++++++++++++++++++++++++++")
      state.ordersLength = data;
    },
    setTab(state,data){
      console.log(data,'dingdan')
      state.tab = data
    },
    // 
    pages(state, objec) {
      // console.log(objec, "================================");
      let page = objec.curpage || 1;
      let rows = 3;
      // let count = 0;
      let obj = [];
      let arr1 = [];
      for (let j = 1; j <= objec.rows.length; j++) {
        // console.log(j / rows,objec.rows.length / rows,'////////////////')
        arr1.push(objec.rows[j-1]);
        if (j % rows == 0 || j / rows == objec.rows.length / rows) {
          // count++;
          obj.push(arr1);
          arr1 = [];
        }
      }
      state.ordersData = obj;
      // console.log(state.ordersData, "0-----------------------------");
    }
  },
  actions: {
    getOrders({ commit }, playload) {
      //请求订单（商品和服务）
      // console.log('object',playload)
      let page = playload.page || 1;
      let rows = playload.rows || 1000;
      let ordersType = playload.ordersType || 0;
      let type = playload.type || "";
      let value = playload.value || "";
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
        console.log(res.data, "请求会的数据");
        commit("pages", res.data);
        commit("setShopsOrders",res.data.rows.length)
      });
    },


    getOrdersStatus({ commit }, playload) {
      //请求完成状态  
      console.log(playload)
      let page = 1;
      let rows = 5;
      let ordersType = playload.ordersType || 0;
      let sta = playload.sta;
      axios({
        method: "get",
        url: "/orders/status",
        params: {
          page,
          rows,
          ordersType,
          sta 
        }
      }).then(res => {
        console.log(res.data, "请求来的状态数据");
        commit("pages",res.data)
        commit("setShopsOrders", res.data.length);
      });
    }
  }
};
