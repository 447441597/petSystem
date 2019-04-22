// // import Vue from 'vue'
// // import Vuex from 'vuex'
// import axios from "axios"
// // Vue.use(Vuex)
// export default {
//   namespaced: true,
//   strict: true,
//   state: {
//     info: [],
//     pagiNation: {},
//   },
//   mutations: {
//     setInfo(state, info) {
//       state.info = info;
//     },
//     setpagiNation(state, pagiNation) {
//       state.pagiNation = pagiNation;
//     },
//   },
//   actions: {
//     setStudents({ commit }, payload = {}) {
//       let page = payload.page || 1;
//       let rows = payload.rows || 5;
//       axios({
//         method: "get",
//         url: "/applys",
//         params: { page, rows }
//       }).then(res => {
//         // console.log(res);
//         commit("setInfo", res.data.rows);
//         commit("setpagiNation", res.data);
//       });
//     },
//   }
// };
