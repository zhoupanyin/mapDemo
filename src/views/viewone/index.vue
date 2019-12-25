<template>
    <div>
        <div style="width: 600px;height:400px;" ref="chart"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
    data(){
        return{
            option :{
                title: {
                    text: 'ECharts示例'
                },
                tooltip: {},
                legend: {
                    data:['日销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [
                    {
                     name: '日销量',
                     type: 'bar',
                     barWidth:30,
                     data: [5, 20, 36, 10, 10, 20]
                    },
                ]
            }
        };
    },
   
    methods:{
       chartInit(){
           // 基于准备好的dom，初始化echarts实例
        // let myChart = this.$echarts.init(this.$refs.chart);//全局引入时
        var myChart = echarts.init(this.$refs.chart);

        // 指定图表的配置项和数据
        // var option = {
        //     title: {
        //         text: 'ECharts示例'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:['销量']
        //     },
        //     xAxis: {
        //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [5, 20, 36, 10, 10, 20]
        //     }]
        // }
        // 使用刚指定的配置项和数据显示图表
        // myChart.setOption(option);
           myChart.setOption(this.option);
       }
    },
    mounted() {
        this.chartInit()
    },
}
</script>
<style lang="less" scoped>
li{
    list-style:none;
}
</style>
