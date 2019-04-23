<template>
    <div>
      <el-tabs type="border-card" @tab-click='clg'>
    <el-tab-pane label="服务订单">
    <el-button style="float: left; padding: 3px" type="success" round @click="unfinished">未完成订单</el-button>
    <el-button style="float: left; padding: 3px" type="success" round @click="finish">已完成订单</el-button>
    <el-button style="float: left; padding: 3px" type="success" round @click="allOrders">全部订单</el-button>
    <tabcomponent/>
    </el-tab-pane>
    <el-tab-pane label="商品订单">
                <el-button style="float: left; padding: 3px" type="success" round @click="unfinished">未完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="finish">已完成订单</el-button>
                <el-button style="float: left; padding: 3px" type="success" round @click="allOrders">全部订单</el-button> 
            <tabshopscomponent />
    </el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
import tabcomponent from "../../common/tabcomponent/tabcomponent.vue";
import tabshopscomponent from "../../common/tabcomponent/tabshopscomponent.vue";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("ordrers");
export default {
  components: {
    tabcomponent,
    tabshopscomponent
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
    ...mapActions(["getOrders","getOrdersStatus"]),
    clg(value) {
      if (value.label == "商品订单") {
        this.getOrders(1);
      } else if (value.label == "服务订单") {
        this.getOrders(0);  
      }
    },
    unfinished() {
      // 未完成订单
      this.getOrdersStatus(1);
    },
    finish() {
      // 完成订单
      this.getOrdersStatus(2);
    },
    allOrders() {
      // 全部订单
      this.getOrdersStatus(0);
    }
  }
};
</script>

<style>
</style>
