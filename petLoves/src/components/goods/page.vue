<template>
    <div>
        <!-- <a href="#" @click="prev" >上一页</a>
        <a href="#" @click="page(item)" v-for="item in pagination.maxpage" :key="item" id="between">{{item}}</a>
        <a href="#" @click="next" >下一页</a> -->
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pagination.eachpage"
          :current-page="pagination.curpage"
          :total="pagination.total"
          @current-change="change"
          >
        </el-pagination>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('goods')
export default {
      computed:{
          ...mapState(["pagination"])
      },
      methods:{
          ...mapActions(["getshow"]),
          page(item){
              this.getshow({page:item,rows:5,})
          },
          change(current){
              this.getshow({page:current,rows:this.pagination.eachpage})
          },
          
          prev(){
              if(this.pagination.curpage>1){
                  this.getshow({page:this.pagination.curpage-1,rows:5,})
              }
          },
           next(){
           if(this.pagination.curpage<=this.pagination.maxpage){
                  this.getshow({page:this.pagination.curpage+1,rows:5,})
              }
            }
      },
     
}
</script>

<style>
    #between{
        border:1px solid;
        width: 60px;
        height: 60px;
        margin-right: 5px;
        margin-left: 5px;
    }
    a{
        text-decoration: none;
    }
</style>
