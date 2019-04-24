import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);
export default {
    namespaced:true,
    state: {
        show:[],
        updt:{},
        updatadialog:false,
        pagination:{},
    },
    mutations: {
        setshow(state, data) {
            state.show = data;
        },
        updt(state,data){
            state.updt= data
            //   console.log("stata",state.updt.images[0])
        },
        setVisible(state,Visible){
            state.updatadialog = Visible  
          
        },
        setVisible1(state,Visible){
            state.updatadialog = Visible  
        },
        setPagination(state, pagination) {
            state.pagination = pagination
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
                commit("setPagination",res.data)
            })
        },
       Updata({commit},id){
            // console.log(id,'修改传的id')
            axios({
                method:"get",
                url:"/goods/"+id,
             }).then((res)=>{
                //  console.log(res.data,'shuju')
                commit("updt",res.data)
                commit("setVisible",true)
             })
        },
        setVisible1({commit}){
            commit("setVisible1",false)
        }
    }
   
}
