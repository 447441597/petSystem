<template>
    <div>
        <!-- <h1>服务商品销售金额</h1> -->
        <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar"
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import axios from "axios";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            type: "班级人数统计",
            classAxisData: [],
            classSeriesData: [],
            ageAxisData: [],
            ageSeriesData: [],
            shopsCountData: [],
            shopsData: [],
            zoom: 0
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.showChart();
        });
    },

methods: {
        showChart() {
            console.log("chart");
            let myChart = echarts.init(this.$refs.myChart);
                axios({
                    url: "/goods/fw",
                    method: "get"
                }).then(res => {
                    console.log(res,"===================")
                    let series = {}
                    let ass = []
                      let date = new Date();
                        let date1 = JSON.stringify(date).substring(0, 11);
                        date1 = date1.slice(6, 8)
                        for(let i=0;i<6;i++){
                            this.classAxisData.push(`${date1}月`)
                            date1--;
                            if(date1 == 0){
                                date1 = 12
                            }
                        }
                        let dat = new Date();
                        let dat1 = JSON.stringify(dat).substring(0, 11);
                        dat1 = dat1.slice(6, 8)
                        
                        for(let a in res.data){
                                
                                for(let s =0;s<6;s++){
                                console.log(dat1,'++++++++++++++',a.substring(1))
                                    dat1--
                                    if(dat1==0){
                                        dat1 = 12
                                    }
                                    if(a.substring(1) == ~~dat1){
                                    // a = `y${a}`
                                    res.data[a] * 40
                                    console.log(res.data[a] * 40,"0000000000")
                                    ass.push(res.data[a] * 40)
                                }else{
                                    ass.push(0)
                                }
                                }
                            }
                            ass.length = 6;
                        // console.log(ass,"=======+++++++++",,"+++++++===========")
                    //  = res.data.axisData; // 月份名字
                    this.classSeriesData = ass; // 信息
                    myChart.setOption(this.classesOptions, true);
                    console.log(this.classAxisData,"+++222222++++",this.classSeriesData)
                });
            }
        },
    computed:{
        classesOptions() {
            return {
                title: {
                    text: "店铺所有商品近6个月的月销售额统计"
                },
                tooltip: {},
                xAxis: {
                    data: this.classAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "服务",
                        type: "bar",
                        data: this.classSeriesData
                    }
                ]
            };
        },
    }
}
</script>

<style scoped>
.total {
    width: 100%;
    height: 700px;
}
</style>


