<template>
    <div class="block">
 
  <el-pagination
    layout="prev, pager, next"
    
    :total="pagination.total" :page-size="pagination.eachpage"  @prev-click='prev' @next-click='next' @current-change='change'>
  </el-pagination>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('yj')
export default {

computed:{
   ...mapState(["pagination"])
},
methods:{
      ...mapActions(["setProviders"]),
    prev(){
       this.setProviders({page:~~(this.pagination.curpage)-1})
    },
    next(){
               this.setProviders({page:~~(this.pagination.curpage)+1})
    },
    change(i){
               this.setProviders({page:i})
    },
    click(item){
      
            this.setProviders({page:item,rows:5})
          }
}
}
</script>

<style>

</style>
