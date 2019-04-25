<template>
    <div>
      <el-tabs type="border-card" @tab-click='clg'>
    <el-tab-pane label="服务订单">
    <tabcomponent/>
    </el-tab-pane>
    <el-tab-pane label="商品订单">
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
const { mapState, mapActions, mapMutations} = createNamespacedHelpers("ordrers");
export default {
  components: {
    tabcomponent,
    tabshopscomponent
  },
  created() {
    let playload = {
      ordersType: 1
    };
    this.getOrders(playload);
    this.setOrsers(1)
  },
  data() {
    return {
      select: true
    };
  },
  methods: {
    ...mapActions(["getOrders", "getOrdersStatus", "getServicesOrders"]),
    ...mapMutations(["setTab","setOrsers"]),
    clg(value) {
      if (value.label == "商品订单") {
        console.log('object')
        let playload = {
          ordersType: 0
        };
        this.setTab('商品订单')
        this.setOrsers(1)
        this.getOrders(playload);
      } else if (value.label == "服务订单") {
        let playload = {
          ordersType: 1
        };
        this.setTab('服务订单')
        this.getOrders(playload);
      }
    },
   
  }
};
</script>

<style>
</style>
