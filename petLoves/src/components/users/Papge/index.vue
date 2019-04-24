<template>
    <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pagination.eachpage"
          :current-page="pagination.curpage"
          :total="pagination.total"
          @current-change="change"
          >
        </el-pagination>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('users')
export default {
  computed:{
          ...mapState(["pagination"])
      },
      methods:{
          ...mapActions(["setPersons"]),
          page(item){
              this.setPersons({page:item,rows:5,})
          },
          change(current){
              this.setPersons({page:current,rows:this.pagination.eachpage})
          },
          
          prev(){
              if(this.pagination.curpage>1){
                  this.setPersons({page:this.pagination.curpage-1,rows:5,})
              }
          },
           next(){
           if(this.pagination.curpage<=this.pagination.maxpage){
                  this.setPersons({page:this.pagination.curpage+1,rows:5,})
              }
            }
}
}
</script>

<style>
</style>
