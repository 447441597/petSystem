<template>
    <div>
        <el-button type="success"  @click="selected(true)">服务订单</el-button>
        <el-button type="success"  @click="selected(false)">商品订单</el-button>
        <template v-if="select">
        <el-card class="box-card" >
            <div slot="header" class="clearfix">
                <h2>服务订单</h2>
                <el-button style="float: left; padding: 3px" type="success" round>未完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round>已完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round>全部订单</el-button>                
            </div>
            <tabcomponent />
        </el-card>
        </template>
        <template v-else>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>商品订单</h2>
                <el-button style="float: left; padding: 3px" type="success" round>未完成订单</el-button>
                <el-button style="float: left; padding: 3px;" type="success" round>已完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round>全部订单</el-button>                
            </div>
            <tabcomponent />
        </el-card>
        </template>
    </div>
</template>

<script>
import tabcomponent from "../../common/tabcomponent/tabcomponent.vue";
// import axios from 'axios'
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("zyz");
export default {
  components: {
    tabcomponent
  },
  created(){
      this.getOrders();
  },
  data() {
    return {
      select: true
    };
  },
  methods: {
      ...mapActions(['getOrders']),
    selected(data) {
      this.select = data;
    }
  }
};
</script>

<style>
</style>
