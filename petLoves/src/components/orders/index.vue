<template>
    <div>
      <el-tabs type="border-card" @tab-click='clg'>
    <el-tab-pane label="服务订单">
    <tabcomponent :shopsId="shopsId"/>
    </el-tab-pane>
    <el-tab-pane label="商品订单">
    <tabshopscomponent :shopsId="shopsId"/>
    </el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
import tabcomponent from "../../common/tabcomponent/tabcomponent.vue";
import tabshopscomponent from "../../common/tabcomponent/tabshopscomponent.vue";
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "ordrers"
);
export default {
  data() {
    return {
      shopsId: "",
      select: true
    };
  },
  components: {
    tabcomponent,
    tabshopscomponent
  },
  created() {
    axios({
      method: "get",
      url: "/getSession"
    }).then(res => {
      let id = res.data._id;
      axios({
        method: "get",
        url: "/users/" + id
      }).then(info => {
        this.shopsId = info.data.shopsId;
        let playload = {
          ordersType: 1,
          id: this.shopsId
        };
        this.getOrders(playload);
        this.setOrsers(1);
      });
    });
  },
  methods: {
    ...mapActions(["getOrders", "getOrdersStatus", "getServicesOrders"]),
    ...mapMutations(["setTab", "setOrsers"]),
    clg(value) {
      if (value.label == "商品订单" && this.shopsId != "") {
        console.log("object");
        let playload = {
          ordersType: 0,
          id: this.shopsId
        };
        this.setTab("商品订单");
        this.setOrsers(1);
        this.getOrders(playload);
      } else if (value.label == "服务订单" && this.shopsId != "") {
        let playload = {
          ordersType: 1,
          id: this.shopsId
        };
        this.setTab("服务订单");
        this.getOrders(playload);
      } else{
        this.$alter("没有登录","警告")
      }
    }
  }
};
</script>

<style>
</style>
