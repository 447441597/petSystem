<template>
<div>
    <el-select v-model="value6" placeholder="请选择">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      >
      <div @click="look">
        <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </div>
      
    </el-option>
    </el-select>
    <div id="myChart" :style="{width: '800px', height: '500px'}"></div>
</div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      chartdata: [
        { value: 235, name: "视频广告" },
        { value: 274, name: "联盟广告" },
        { value: 310, name: "邮件营销" },
        { value: 335, name: "直接访问" },
        { value: 400, name: "搜索引擎" }
      ],
      cities: "",
      value6: "北京"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
      this.orders();
      this.look();
    });
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: '服务销售占比统计（月度）' },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: this.chartdata
          }
        ]
      });
    },
    look() {
      axios({
        method: "get",
        url: "/petOwns/cite",
        params: {
          cite: this.value6
        }
      }).then(res => {
        let arr = [];
        for (let i in res.data.mon) {
          arr.push({ value: ~~res.data.mon[i], name: `${res.data.tim[i].match(/\d+/g)[1]}月份` });
        }
        this.chartdata = arr;
        this.drawLine();
      });
    },
    orders() {
      axios({
        method: "get",
        url: "/petOwns/orders"
      }).then(res => {
        var hash = [];
        for (var i = 0; i < res.data.length; i++) {
          for (var j = i + 1; j < res.data.length; j++) {
            if (res.data[i].value === res.data[j].value) {
              ++i;
            }
          }
          hash.push(res.data[i]);
        }
        this.cities = hash;
      });
    }
  }
};
</script>

<style>
</style>
