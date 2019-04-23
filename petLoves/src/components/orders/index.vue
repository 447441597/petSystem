<template>
    <div>
        <el-button type="success"  @click="servicesSelected">服务订单</el-button>
        <el-button type="success"  @click="shopsSelected">商品订单</el-button>
        <template v-if="select">
        <el-card class="box-card" >
            <div slot="header" class="clearfix">
                <h2>服务订单</h2>
                <el-button style="float: left; padding: 3px" type="success" round @click="unfinished">未完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="finish">已完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="allOrders">全部订单</el-button>                
            </div>
            <tabcomponent/>
        </el-card>
        </template>
        <template v-else>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>商品订单</h2>
                <el-button style="float: left; padding: 3px" type="success" round @click="unfinished">未完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="finish">已完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="allOrders">全部订单</el-button>                
            </div>
            <tabcomponent/>
        </el-card>
        </template>
    </div>
</template>

<script>
import tabcomponent from "../../common/tabcomponent/tabcomponent.vue";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("orders");
export default {
  components: {
    tabcomponent
  },
  created() {
    this.getOrders();
  },
  data() {
    return {
      select: true
    };
  },
  methods: {
    ...mapActions(["getOrders"]),
    servicesSelected() {
        //服务订单
      this.select = true;
      this.getOrders(0);
    },
    shopsSelected() {
        //商品订单
      this.select = false;
      this.getOrders(1);
    },
    unfinished() {
      // 未完成订单
      this.getOrders(2);
    },
    finish() {
      // 完成订单
      this.getOrders(3);
    },
    allOrders() {
      // 全部订单
      this.getOrders(4);
    }
  }
};
</script>

<style>
</style>
