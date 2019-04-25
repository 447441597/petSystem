<template>
     <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="每月服务销售总量统计"></el-radio-button>
            <el-radio-button label="每季度服务销售总量统计"></el-radio-button>
            <el-radio-button label="每年服务销售统计"></el-radio-button>
        </el-radio-group>
         <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
//引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/extension/bmap/bmap";
export default {
  data() {
    return {
      //月份总销量
      Insalesall: [],
      //季度总销量
      grossSalesAll: [],
      //年份销售总量
      yearsSalesAll: []
    };
  },
  methods: {
    showChart() {
      console.log("chart");
      let myChart = echarts.init(this.$refs.myChart);
        myChart.setOption(this.option, true);
    }
  },
  computed: {
    option() {
      return {
        title: {
          text: "每月服务销售总额统计图"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月","九月","十月","十一月","十二月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130,150,120,160,180,200,],
            type: "bar"
          }
        ]
      };
    }
  }
};
</script>

<style>
.total {
  width: 100%;
  height: 500px;
}
</style>
