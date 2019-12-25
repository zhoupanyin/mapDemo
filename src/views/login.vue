<template>
    <div>
        呵呵
        <div style="width: 600px;height:400px;" ref="chart"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
export default {
    data(){
        return{
            
            option:{
                title: {
                    text: '示例'
                },
                dataset:[
                {
                    source:[
                    ['score', 'amount', 'product'],
                    [89.3, 58212, 'Matcha Latte0'],
                    [57.1, 78254, 'Milk Tea0'],
                    [74.4, 41032, 'Cheese Cocoa0'],
                    [50.1, 12755, 'Cheese Brownie0'],
                    [89.7, 20145, 'Matcha Cocoa0'],
                    [68.1, 79146, 'Tea0'],
                    [19.6, 91852, 'Orange Juice0'],
                    [10.6, 101852, 'Lemon Juice0'],
                    [32.7, 20112, 'Walnut Brownie0'],  ]
                },
                {
                    source:[
                    ['score', 'amount', 'product'],
                    [89.3, 58, 'Matcha Latte1'],
                    [57.1, 78, 'Milk Tea1'],
                    [74.4, 41, 'Cheese Cocoa1'],
                    [50.1, 12, 'Cheese Brownie1'],
                    [89.7, 26, 'Matcha Cocoa1'],
                    [68.1, 79, 'Tea1'],
                    [19.6, 91, 'Orange Juice1'],
                    [10.6, 10, 'Lemon Juice1'],
                    [32.7, 20, 'Walnut Brownie1'],  ]
                },
                {
                    source:[
                    ['score', 'amount', 'product'],
                    [89.3, 22222, 'Matcha Latte2'],
                    [57.1, 33333, 'Milk Tea2'],
                    [74.4, 44444, 'Cheese Cocoa2'],
                    [50.1, 55555, 'Cheese Brownie2'],
                    [89.7, 66666, 'Matcha Cocoa2'],
                    [68.1, 77777, 'Tea2'],
                    [19.6, 88888, 'Orange Juice2'],
                    [10.6, 99999, 'Lemon Juice2'],
                    [32.7, 56565, 'Walnut Brownie2'] ]
                },
            ],
                tooltip: {},
                xAxis:{},
                yAxis: {type:'category'},
                series:[
                    {   datasetIndex:0,
                        type:'bar',
                        barWidth : 15,
                        encode:{
                           x:'amount',
                           y:'product',
                        }
                    },
                    // {   datasetIndex:1,
                    //     type:'bar',
                    //     encode:{
                    //        x:'amount',
                    //        y:'product',
                    //     }
                    // },
                    // {   datasetIndex:2,
                    //     type:'bar',
                    //     encode:{
                    //        x:'amount',
                    //        y:'product',
                    //     }
                    // },
                ],
                
            },
        }
    },
    methods:{
        chartInit(){
            var myChart = echarts.init(this.$refs.chart);
            myChart.setOption(this.option);
        }
    },
    mounted() {
        this.chartInit()
    },
}
</script>
<style lang="less" scoped>

</style>