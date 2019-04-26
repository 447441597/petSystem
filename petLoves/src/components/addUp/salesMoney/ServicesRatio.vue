<template>
     <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="服务销售额统计图"></el-radio-button>
        </el-radio-group>
         <div class="total" id="myChart" ref="myChart"></div>
         <div class="total" id="quarterChart" ref="quarterChart"></div>
         <div class="total" id="annualChart" ref="annualChart"></div>
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
import axios from "axios";
export default {
  data() {
    return {
      //   type: "每月服务销售总额统计图",
      //一月
      Jan: "",
      //二月；
      Feb: "",
      //三月
      Mar: "",
      //四月
      Apr: "",
      //五月
      May: "",
      //六月
      Jun: "",
      //七月
      Jul: "",
      //八月
      Aug: "",
      //九月
      Sep: "",
      //十月
      Oct: "",
      //十一月
      Nov: "",
      //十二月
      Dec: "",
      date:[]
    };
  },
  created() {
    this.month();
  },
  methods: {
    showChart() {
      console.log("chart");
      let myChart = echarts.init(this.$refs.myChart);
      let quarterChart = echarts.init(this.$refs.quarterChart);
      let annualChart = echarts.init(this.$refs.annualChart);
      annualChart.setOption(this.option3, true);
      quarterChart.setOption(this.option2, true);
      myChart.setOption(this.option, true);
    },
    //查询所有数据
    month() {
      let Insalesall = [];
      let arr = [];
      axios({
        method: "get",
        url: "/orders/all"
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "服务已完成") {
            arr.push(res.data[i]);
          }
        }
        for (let i = 0; i < arr.length; i++) {
          //将所有日期和对应的销售额存入对象
          let obj = {
            time: arr[i].time,
            money: arr[i].money
          };
          //将所有日期和对应的销售额对象存入数组Insalesall
          Insalesall.push(obj);
          // console.log(Insalesall);
        }
        console.log(Insalesall);
        var onetotal = 0;
        var twototal = 0;
        var threetotal = 0;
        var fourtotal = 0;
        var fivetotal = 0;
        var sixtotal = 0;
        var seventotal = 0;
        var eighttotal = 0;
        var ninetotal = 0;
        var tentotal = 0;
        var eleventotal = 0;
        var twelvetotal = 0;
        for (let i = 0; i < Insalesall.length; i++) {
          //截取日期的字符串
         this.date = Insalesall[i].time.split("-");

          switch (this.date[1]) {
            case "01": {
              onetotal = onetotal + parseInt(Insalesall[i].money);
              console.log(this.date[1]);
              // console.log("hhhhhhhhhhhhhhhhhhhhhh",Insalesall[i].money)
              console.log("hhhh", onetotal);
              break;
            }
            case "02": {
              twototal += parseInt(Insalesall[i].money);
              break;
            }
            case "03": {
              threetotal += parseInt(Insalesall[i].money);
              break;
            }
            case "04": {
              fourtotal += parseInt(Insalesall[i].money);
              break;
            }
            case "05": {
              fivetotal += parseInt(Insalesall[i].money);
              break;
            }
            case "06": {
              sixtotal += parseInt(Insalesall[i].money);
              break;
            }
            case "07": {
              seventotal += parseInt(Insalesall[i].money);
              break;
            }
            case "08": {
              eighttotal += parseInt(Insalesall[i].money);
              break;
            }
            case "09": {
              ninetotal += parseInt(Insalesall[i].money);
              break;
            }
            case "10": {
              tentotal += parseInt(Insalesall[i].money);
              console.log("hhhhhhhhhhhhhhhhhhhhhh", Insalesall[i].money);
              console.log("wwwwwwwwwwwww", tentotal);
              break;
            }
            case "11": {
              eleventotal += parseInt(Insalesall[i].money);
              break;
            }
            case "12": {
              twelvetotal += parseInt(Insalesall[i].money);
              break;
            }
          }
        }
        this.Jan = onetotal;
        this.Feb = twototal;
        this.Mar = threetotal;
        this.Apr = fourtotal;
        this.May = fivetotal;
        this.Jun = sixtotal;
        this.Jul = seventotal;
        this.Aug = eighttotal;
        this.Sep = ninetotal;
        this.Oct = tentotal;
        this.Nov = eleventotal;
        this.Dec = twelvetotal;
        console.log(this.Jan, "打印一月");
        console.log(this.Feb, "打印2月");
        console.log(this.May, "打印5月");

      });
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
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              this.Jan,
              this.Feb,
              this.Mar,
              this.Apr,
              this.May,
              this.Jun,
              this.Jul,
              this.Aug,
              this.Sep,
              this.Oct,
              this.Nov,
              this.Dec
            ],
            type: "bar"
          }
        ]
      };
    },
     option3() {
      return {
        title: {
          text: "年度服务销售总额统计图"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: [
            this.date[0]+"年",
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              this.Jan+ this.Feb+ this.Mar+this.Apr+ this.May+ this.Jun+this.Jul+this.Aug+this.Sep+this.Oct+ this.Nov+this.Dec,
            ],
            type: "bar"
          }
        ]
      };
    },
    option2() {
      return {
        title: {
          text: "每季度服务销售总额统计图"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["一季度", "二季度", "三季度", "四季度"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              this.Jan + this.Feb + this.Mar,
              this.Apr + this.May + this.Jun,
              this.Jul + this.Aug + this.Sep,
              this.Oct + this.Nov + this.Dec
            ],
            type: "bar",
            itemStyle: {
              normal: {
                color: "lightblue"
              }
            }
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
