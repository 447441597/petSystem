import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

VUe.use(Vuex);

export default{
    nmaespaced:true,
    state:{
        shopsOrders:[],
        servicesOrders:[]
    },
    mutations:{
        setShopsOrders(state,data){
            state.shopsOrders = data
        },
        setServicesOrders(state,data){
            state.servicesOrders = data
        }
    },
    actions:{
        
    }
}