<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="月销售统计" name="月销售统计">
          <div class id="servicesChart" ref="servicesChart" style="width:700px;height:400px;"></div>
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
import 'echarts/lib/chart/line';
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/grid';
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
  created(){
    axios({
      method:"get",
      url:"/orders/all",
    }).then((res) => {
      console.log(res.data);
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.showChart();
    });
  },
  computed: {
    // options() {
    //   return {
    //     title: {
    //       text: "按月统计"
    //     },
    //     legend:{
    //         data:[{
    //             name:"销量"
    //         }]
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: ["清洁","美容"]
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: "销售量",
    //         type: "bar",
    //         data: [20,40,10,50]
    //       }
    //     ]
    //   };
    // }
    option (){
      return {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'一月',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'二月',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'三月',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'四月',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'五月',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
    }
    }
  },
  methods: {
      // handleClick(tab, event) {
      //   console.log(this.activeName)
      // },
      showChart(){
          let myChart = echarts.init(this.$refs.servicesChart);
          myChart.setOption(this.option, true);
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
  }
</script>

<style>
</style>
