import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);
export default {
    namespaced:true,
    state: {
        show:[],
    },
    mutations: {
        setshow(state, data) {
            state.show = data;
        },
    },
    actions:{
        getshow({commit}, payload = {},) {
            let page = payload.page || 1;
            let rows = payload.rows || 5;
            let type = payload.type ||"";
            let value =payload.value ||"";
            axios({
                method: "get",
                url: "goods/data",
                params:{
                    page,
                    rows,
                    type,
                    value
                }
            }).then((res)=>{
                // console.log(res.data.rows,'res.data.rows');
                commit("setshow",res.data.rows)
            })
        },
    }
}
