
<template>
    <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="月销售统计"></el-radio-button>
        </el-radio-group>
        <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/extension/bmap/bmap";
import axios from "axios";
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapState  } = createNamespacedHelpers("lwj");
export default {
  data() {
    return {
      type: "月销售统计图",
      shopsData: [],
      shopid:""
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.showChart();
    });
  },
 computed: {
    ...mapState(["userId"])
  },
  methods: {
    showChart() {
      let myChart = echarts.init(this.$refs.myChart);
      if (this.type == "月销售统计") {
        console.log(this.userId,"qwewqeqwewq")
        axios({
          method:"get",
          url:"/users/"+this.userId,
        }).then(res => {
          console.log(res.data,"1231231234rasdfsadfg")
        });
      } 
    }
  },
  computed: {
    classesOptions() {
      return {
        title: {
          text: "月销售统计图"
        },
        tooltip: {},
        xAxis: {
          data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        },
        yAxis: {},
        series: [
          {
            name: "销售",
            type: "bar",
            data:[5,10,20,5,16,4,8,10,9,16,14,8]
          }
        ]
      };
    },
  }
};
</script>
<style scoped>
.total {
  width: 100%;
  height: 500px;
}
</style>

