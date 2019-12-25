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
                    text: '饼图示例',
                    x:'20px',
                    y:'50px',
                    textStyle:{
                        fontSize: 20,
                        color:'red',
                        fontweight:700
                    }
                },
                tooltip: {
                    //鼠标经过时显示百分比和对应name
                    tigger:'name',
                    formatter: "{a}</br>{b}:{c}({d}%)"
                },
                legend: {
                    data:['销量'],
                    x: 'center',
                    y:'50px',
                },
                color:['pink','yellow','purple','orange'],
                series: [
                    {
                     name: '销量',
                     type: 'pie',
                     radius: '50%',
                     center: ['50%', '50%'],
                     data:[
                         {value:80,name:'衣服'},
                         {value:30,name:'鞋子'},
                         {value:50,name:'帽子'},
                         {value:70,name:'裤子'},
                     ],
                     label:{
                            show:true,
                            formatter: '{b}:{c}({d}%)'
                        },
                    },
                ],
            }
        }
    },
    mounted(){
        this.chartInit();
    },
    watch:{},
    methods:{
        chartInit(){
            var myChart = echarts.init(this.$refs.chart);
            myChart.setOption(this.option);
        }
    },

}
</script>