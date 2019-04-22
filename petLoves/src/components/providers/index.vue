<template>
    <div>
    <Addprovider ></Addprovider>
    <Tableprovider ></Tableprovider>
 

 
    
    </div>
</template>

<script>
import axios from "axios";
import Addprovider from './addprovider'
import Tableprovider from './tableprovider'
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
               
            },

}
</script>

<style>

</style>

