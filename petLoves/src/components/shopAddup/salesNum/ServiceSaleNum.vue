<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="月销售统计" name="月销售统计">
        <div class id="servicesChart" ref="servicesChart" style="width:1000px;height:500px;"></div>
      </el-tab-pane>
      <el-tab-pane label="季度销售统计" name="季度销售统计">
        <div class id="quarterChart" ref="quarterChart" style="width:1000px;height:500px;"></div>
      </el-tab-pane>
      <el-tab-pane label="年销售统计" name="年销售统计">
        <div class id="yearChart" ref="yearChart" style="width:1000px;height:500px;"></div>
      </el-tab-pane>
    </el-tabs>
    <!-- <div class id="servicesChart" ref="servicesChart" style="width: 600px;height:400px;"></div> -->
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/line";
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/grid";
import "echarts/extension/bmap/bmap";

import axios from "axios";
// import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("services");
export default {
  data() {
    return {
      orders: [],
      month1: [],
      month2: [],
      month3: [],
      month4: [],
      month5: [],
      month6: [],
      month7: [],
      month8: [],
      month9: [],
      month10: [],
      month11: [],
      month12: [],
      quarter1:[],
      quarter2:[],
      quarter3:[],
      quarter4:[],
      year: [],
      yearNum:[],
      serviceNames:[]
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // this.getShopsId();
      this.showChart();
    });
  },
  computed: {
    ...mapState(["shopsId"]),
    option() {
      console.log(this, "i===========================================");
      return {
        title: {
          text: "服务月统计"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.serviceNames
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "一月",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.month1
          },
          {
            name: "二月",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.month2
          },
          {
            name: "三月",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.month3
          },
          {
            name: "四月",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: this.month4
          },
          {
            name: "五月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month5
          },
          {
            name: "六月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month6
          },
          {
            name: "七月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month7
          },
          {
            name: "八月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month8
          },
          {
            name: "九月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month9
          },
          {
            name: "十月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month10
          },
          {
            name: "十一月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month11
          },
          {
            name: "十二月",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: this.month12
          }
        ]
      };
    },
    quarterOption() {
      // console.log(this, "i===========================================");
      return {
        title: {
          text: "服务季度统计"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: [
            "一季度",
            "二季度",
            "三季度",
            "四季度"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.serviceNames
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "一季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.quarter1
          },
          {
            name: "二季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.quarter2
          },
          {
            name: "三季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.quarter3
          },
          {
            name: "四季度",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: this.quarter4
          }
        ]
      };
    },
    yearOption() {
      // console.log(this, "i===========================================");
      return {
        title: {
          text: "服务季度统计"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ['年销量']
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.serviceNames
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "一季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: this.yearNum
          }
        ]
      };
    }
  },
  methods: {
    ...mapActions(["getShopsId"]),
    showChart() {
      axios({
        method: "get",
        url: "/getSession"
      }).then(res => {
        console.log(res.data.shopsId, "session");
        let shopsId = res.data.shopsId;
        axios({
          method: "get",
          url: "/services/servicesNum",
          params: {
            shopsId: shopsId
          }
        }).then(res => {
          console.log(res.data.resultData,"resultData");
          this.serviceNames = res.data.serviceNames;
          //每个月各个服务的统计
          for (let i = 0; i < res.data.resultData.length; i++) {
            if (i + 1 == 1) {
              this.month1 = res.data.resultData[i];
            }
            if (i + 1 == 2) {
              this.month2 = res.data.resultData[i];
            }
            if (i + 1 == 3) {
              this.month3 = res.data.resultData[i];
            }
            if (i + 1 == 4) {
              this.month4 = res.data.resultData[i];
            }
            if (i + 1 == 5) {
              this.month5 = res.data.resultData[i];
            }
            if (i + 1 == 6) {
              this.month6 = res.data.resultData[i];
            }
            if (i + 1 == 7) {
              this.month7 = res.data.resultData[i];
            }
            if (i + 1 == 8) {
              this.month8 = res.data.resultData[i];
            }
            if (i + 1 == 9) {
              this.month9 = res.data.resultData[i];
            }
            if (i + 1 == 10) {
              this.month10 = res.data.resultData[i];
            }
            if (i + 1 == 11) {
              this.month11 = res.data.resultData[i];
            }
            if (i + 1 == 12) {
              this.month12 = res.data.resultData[i];
            }
          }
          let myChart = echarts.init(this.$refs.servicesChart);
          myChart.setOption(this.option, true);

          //每个季度各个服务的销售量统计
          
          for(let i = 0 ; i<this.month1.length; i++){
            this.quarter1.push(this.month1[i] + this.month2[i] + this.month3[i]);
            this.quarter2.push(this.month4[i] + this.month5[i] + this.month6[i])
            this.quarter3.push(this.month7[i] + this.month8[i] + this.month9[i])
            this.quarter4.push(this.month10[i] + this.month11[i] + this.month12[i])
          }
          // console.log(this.quarter1,this.quarter2,this.quarter3,"3333333333333333333333333333333333333333")
          let quarterChart = echarts.init(this.$refs.quarterChart);
          quarterChart.setOption(this.quarterOption, true);

          //年各个服务销售统计
          for(let i = 0;i < this.quarter1.length ;i++){
            this.yearNum.push(this.quarter1[i]+this.quarter2[i]+this.quarter3[i]+this.quarter4[i]);
          }

          let yearChart = echarts.init(this.$refs.yearChart);
          yearChart.setOption(this.yearOption, true);
        });
      });

      // console.log(this.option, "thishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    }
  }
};
</script>

<style>
</style>
