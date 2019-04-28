
<template>
    <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="月销售统计"></el-radio-button>
            <el-radio-button label="季度销售统计"></el-radio-button>
            <el-radio-button label="年销售统计"></el-radio-button>
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
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("lwj");
let arr = [];
export default {
  data() {
    return {
      type: "商品销售统计图",
      shopsData: [],
      shopid: "",
      userId: "",
      spring: 0,
      summer: 0,
      aut: 0,
      winter: 0,
      shopData: [],
      yearData: [],
      year: [],
      yearArr: []
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
    showChart(val) {
      axios({
        method: "get",
        url: "/getSession"
      }).then(res => {
        console.log(res.data, "1312312313315112121");
        this.shopid = res.data.shopsId;
      });
      console.log(this.shopid, "sadfbnsadfnbsadgnmsadfghm");
      let myChart = echarts.init(this.$refs.myChart);
      if (this.type == "月销售统计") {
        axios({
          url: "/orders/all",
          method: "get"
        }).then(res => {
          console.log(res, "res");
          for (let j = 1; j <= 12; j++) {
            let n = "0";
            if (j >= 10) {
              n = "";
            }
            let str = 2019 + "-" + n + j;
            let num = 0;
            for (let i = 0; i < res.data.length; i++) {
              let time = res.data[i].time.substring(0, 7);
              if (res.data[i].status == "订单已完成") {
                if (res.data[i].shops._id == this.shopid && time == str) {
                  num++;
                }
              }
            }
            this.shopsData.push(num);
          }
          console.log(this.shopsData, "11111111111111111111");
          myChart.setOption(this.classesOptions, true);
        });
      } else if (this.type == "季度销售统计") {
        let k = 0;
        this.spring = 0;
        this.summer = 0;
        this.aut = 0;
        this.winter = 0;
        axios({
          url: "/orders/all",
          method: "get"
        }).then(res => {
          console.log(res, "res");
          for (let j = 1; j <= 12; j++) {
            let n = "0";
            if (j >= 10) {
              n = "";
            }
            let str = 2019 + "-" + n + j;
            let num = 0;
            for (let i = 0; i < res.data.length; i++) {
              console.log(res.data.length, "12313231");
              let time = res.data[i].time.substring(0, 7);
              if (res.data[i].status == "订单已完成") {
                if (res.data[i].shops._id == this.shopid && time == str) {
                  num++;
                }
              }
            }
            this.shopData.push(num);
          }
          console.log(this.shopData, "11111111111111111111");
          for (k; k < this.shopData.length; k++) {
            if (k >= 2 && k <= 4) {
              this.spring += this.shopData[k];
            } else if (k >= 5 && k <= 7) {
              this.summer += this.shopData[k];
            } else if (k >= 8 && k <= 10) {
              this.aut += this.shopData[k];
            } else if (k == 11 || k == 0 || k == 1) {
              this.winter += this.shopData[k];
            }
          }
          console.log(this.spring, this.summer, this.aut, this.winter);
          myChart.setOption(this.jiduOptions, true);
        });
      } else if (this.type == "年销售统计") {
        axios({
          url: "/orders/all",
          method: "get"
        }).then(res => {
          console.log(res, "res");
           console.log(res.data.length,"--------------------------------")
           let time = ""
          for (let j = 1; j <= res.data.length; j++) {
           
            // let n = "0";
            // if (j >= 10) {
            //   n = "";
            // }
             time += res.data[j].time.substring(0, 4)
            this.year.push(time);
            this.yearArr.push(res.data[j]);
            console.log(this.year, "12312313123123saddsdsadasdas");
            let num = 0;
            console.log(this.yearArr,"scv55555555555555555555")
            for (let i = 0; i <= this.year.length; i++) {
              for (let k = 0; k <= this.yearArr.length; k++) {
                if (this.yearArr[k].status == "订单已完成") {
                  if (this.yearArr[k].shops._id == this.shopid && time == this.year[i].time) {
                    num++;
                  }
                }
              }
              this.yearData.push(num)
            }
            console.log(this.yearData,"qwertwqerwqerwqer")
            // for (let i = 0; i < res.data.length; i++) {
            //   let time = res.data[i].time.substring(0, 7);
            //   if (res.data[i].status == "订单已完成") {
            //     if (res.data[i].shops._id == this.shopid && time == str) {
            //       num++;
            //     }
            //   }
            // }
          }
          // console.log(this.shopsData, "11111111111111111111");
          myChart.setOption(this.yearOptions, true);
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
        yAxis: {},
        series: [
          {
            name: "销售",
            type: "bar",
            data: this.shopsData
          }
        ]
      };
    },
    jiduOptions() {
      return {
        title: {
          text: "年销售统计图",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left"
          // data: ["春", "夏", "秋", "冬"]
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.spring, name: "春" },
              { value: this.summer, name: "夏" },
              { value: this.aut, name: "秋" },
              { value: this.winter, name: "冬" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    },
    yearOptions() {
      return {
        title: {
          text: "季度销售统计图",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["春", "夏", "秋", "冬"]
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.spring, name: "春" },
              { value: this.summer, name: "夏" },
              { value: this.aut, name: "秋" },
              { value: this.winter, name: "冬" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    }
  }
};
</script>
<style scoped>
.total {
  width: 100%;
  height: 500px;
}
</style>

