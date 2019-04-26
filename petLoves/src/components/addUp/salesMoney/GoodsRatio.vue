<template>
     <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="每月商品总销售额统计"></el-radio-button>
            
           
        </el-radio-group>
         <el-radio-group v-model="type" @change="showChart1">
         
            <el-radio-button label="每季度商品总销售额统计"></el-radio-button>
           
        </el-radio-group>
         <div class="total"  id="myChart" ref="myChart"></div>
              <div  class="total1"  id="jidu" ref="jidu"></div>
     
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
      type: "每月商品销售总额统计图",
       type: "每季度商品销售总额统计图",
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      Jun: "",
      Jul: "",
      Aug: "",
      Sep: "",
      Oct: "",
      Nov: "",
      Dec: "",
      first:"",
      second:"",
      third:"",
      fourth:"",
    //  show: false,
    //   show1: false,

    };
  },
  created() {
    this.month();
  },
  methods: {
    showChart() {
      console.log("chart");
      let myChart = echarts.init(this.$refs.myChart);
      let jidu = echarts.init(this.$refs.jidu);
      myChart.setOption(this.option, true);
        jidu.setOption(this.option2, false);
    // this.show = true;
    //   this.show1= false;
       
    },
     showChart1() {
      console.log("chart");
      let myChart = echarts.init(this.$refs.myChart);
      let jidu = echarts.init(this.$refs.jidu);
         jidu.setOption(this.option2, true);
           myChart.setOption(this.option, false);
    //        this.show1 = true;
    //   this.show= false;
    },
    //查询所有数据
    month() {
      let Insalesall = [];
      let arr = [];
      axios({
        method: "get",
        url: "/orders/all"
      }).then(res => {
        console.log(res.data[0].status);
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "订单已完成") {
            arr.push(res.data[i]);
          }
        }
        for (let i = 0; i < arr.length; i++) {
     
          let obj = {
            time: arr[i].time,
            money: arr[i].money
          };
      
          Insalesall.push(obj);
       
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
        // var firsttotal=0;
        //  var secondtotal=0;
        //   var thirdtotal=0;
        //    var fourthtotal=0;
        for (let i = 0; i < Insalesall.length; i++) {
          //截取日期的字符串
          let date = Insalesall[i].time.split("-");

          switch (date[1]) {
            case "01": {
              onetotal += parseInt(Insalesall[i].money);
         
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
            // firsttotal=onetotal+twototal+threetotal;
            // secondtotal=fourtotal+fivetotal+sixtotal;
            // thirdtotal=seventotal+eighttotal+ninetotal;
            // fourthtotal=tentotal+eleventotal+twelvetotal;
   
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

        //  this.first = firsttotal;
        //    this.second = secondtotal;
        //      this.third = thirdtotal;
        //        this.fourth = fourthtotal;

       
      });
    }
  },
  computed: {
    option() {
      return {
        title: {
          text: "月商品销售总额统计图"
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
     option2() {
      return {
        title: {
          text: "每季度服务销售总额统计图"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: [
           "第一季度",
            "第二季度",
            "第三季度",
            "第四季度"
           
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              this.Jan+this.Feb+ this.Mar,
             this.Apr+this.May+this.Jun,
 this.Jul+this.Aug+this.Sep,
 this.Oct+this.Nov+this.Dec
            ],
            type: "bar",
            itemStyle:{
                normal:{
                    color:"green"
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
.total1 {
  width: 100%;
  height: 500px;

  
}
</style>

