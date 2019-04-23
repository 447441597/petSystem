import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default{
    namespaced:true,
    state: {
        providers: [],
        provider:{},
        pagination:{},
        visible:false,
    
        search: {
            value: "",
            type: ""
          },
    },
    mutations: {
        setProviders(state, providers) {
            state.providers = providers
            console.log(state,state)
           
        },
        provider(state,provider){
            state.provider = provider
        },
        setPagination(state, pagination) {
            state.pagination = pagination
        },
        setVisible(state, visible) {
            state.visible = visible
        },

        setSearch(state, search) {
            state.search = search;
          },
          
       
    },
    actions: {
        setProviders({commit,state}, payload = {},) {
            let page = payload.page || 1;
            let rows = payload.rows || 5;
            let type = state.search.type ||"";
            let value =state.search.value ||"";
            axios({
                method: "get",
                url: "/providers",
                params:{
                    page,
                    rows,
                    type,
                    value
                }
            }).then((res)=>{
                commit("setProviders",res.data.rows)
                commit("setPagination",res.data)
                commit("setSearch",{type,value})
            })
        },
        updateprovider({commit},id){
            console.log(id)
            axios({
                method:"get",
                url:"/providers/"+id,
             }).then((res)=>{
                 console.log(res.data,'查询当前列')
                 console.log(res.data,'查询当前列')
                commit("provider",res.data)
                commit("setVisible",true)
                commit("setUpVisible",false)
                
               
               
             })
        },



    }
}