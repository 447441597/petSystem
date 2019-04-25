<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="月销售统计" name="月销售统计">
          <div class id="servicesChart" ref="servicesChart" style="width: 600px;height:400px;"></div>
      </el-tab-pane>
      <el-tab-pane label="季度销售统计" name="季度销售统计">季度销售统计</el-tab-pane>
      <el-tab-pane label="年销售统计" name="年销售统计">年销售统计</el-tab-pane>
    </el-tabs>
    <!-- <div class id="servicesChart" ref="servicesChart" style="width: 600px;height:400px;"></div> -->
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      type: "班级人数统计",
      activeName: 'first'
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.showChart();
    });
  },
  computed: {
    options() {
      return {
        title: {
          text: "按月统计"
        },
        legend:{
            data:[{
                name:"销量"
            }]
        },
        tooltip: {},
        xAxis: {
          data: ["清洁","美容"]
        },
        yAxis: {},
        series: [
          {
            name: "销售量",
            type: "bar",
            data: [20,40,10,50]
          }
        ]
      };
    }
  },
  methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        console.log(this.activeName)
      },
      showChart(){
          let myChart = echarts.init(this.$refs.servicesChart);
          myChart.setOption(this.options, true);
      }
    // showChart() {
    //   console.log("chart");
    //   let myChart = echarts.init(this.$refs.myChart);

    //   if (this.type == "班级人数统计") {
    //     axios({
    //       url: "/classes/classesTotal",
    //       method: "get"
    //     }).then(res => {
    //       this.classAxisData = res.data.axisData;
    //       this.classSeriesData = res.data.seriesData;
    //       myChart.setOption(this.classesOptions, true);
    //     });
    //   }
    // }
  }
};
</script>

<style>
</style>
