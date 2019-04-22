import axios from 'axios'

export default{
    namespaced:true,
    state: {
        Providers: [],
        Provider:{},
        pagination:{},
        visible:false,
        
        searchInfo: {
            value: "",
            type: ""
          },
    },
    mutations: {
        setProviders(state, providers) {
            state.providers = providers
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

        setSearch(state, data) {
            state.searchInfo = data;
          },
          
       
    },
    actions: {
        setProviders({commit}, payload = {},) {
            let page = payload.page || 1;
            let rows = payload.rows || 5;
            let type = payload.type ||"";
            let value =payload.value ||"";
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
            })
        },
        updateprovider({commit},id){
            console.log(id)
            axios({
                method:"get",
                url:"/providers/"+id,
             }).then((res)=>{
                 console.log(res.data)
                commit("provider",res.data)
                commit("setVisible",true)
                commit("setUpVisible",false)
               
               
             })
        },

    }
}