<template>
    <div>
        <h1>供应商管理</h1>
    <Addprovider ></Addprovider>
    <Tableprovider ></Tableprovider>
   <Updateprovider ></Updateprovider>
 
    </div>
</template>

<script>
import axios from 'axios'

import  Addprovider from './addprovider'
import  Tableprovider from './tableprovider'
import  Updateprovider from './updateprovider'

import { createNamespacedHelpers } from 'vuex'
const {mapActions } = createNamespacedHelpers('yj')
export default {
 data() {
                return {
                    providers: [],
                     provider: {},
                    pagination: {}
                }
            },
               created() {
             this.setProviders()
            },
            methods: {
                  ...mapActions(["setProviders"]),
              
            },
            components: {
                Addprovider,
                Tableprovider,
                Updateprovider,
                
            },
}
</script>

<style>

</style>
