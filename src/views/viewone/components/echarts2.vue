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
                title:{
                    text:'折线图示例'
                },
                tooltip:{
                    trigger:'axis',
                    formatter: '{b}\n{c}',
                },
                toolbox: {
                     show : true,
                     feature : {
                             mark : {show: true},// 辅助线标志
                             dataView : {show: true, readOnly: false},
                             magicType : {show: true, type: ['line', 'bar','tiled']},//设置平铺(柱状折线切换)
                             restore : {show: true},// 还原
                             saveAsImage : {show: true},// 保存为图片
                     }
                },
                calculable : true,
                legend:{
                    data:['FD','GF'],
                    selectedMode:"single",//单选模式，每次出现一条折线图
                },
                xAxis:{
                    type:'category',
                    data:['一月','二月','三月','四月','五月']
                },
                yAxis:{
                    type:'value',
                },
                series:[
                    {
                        name:'FD',
                        type:'line',
                        data:[{
                              value:30,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:50,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:90,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:120,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:170,
                              label:{
                                  show:true
                              }}],
                        symbol: 'circle',
                        symbolSize: 5,
                        smooth: false,
						// lineStyle: {
						// 	normal: {
						// 		color: '#3367D6',
						// 		width: 2,
						// 	}
						// },
						// itemStyle: {
						// 	emphasis: {
						// 		color: '#666',
						// 		borderColor: '#ff671b',
						// 		opacity: 1
						// 	},
						// 	normal: {
						// 		color: '#3367D6',
						// 		borderColor: '#fff',
                        //         opacity: 0,
                        //         label : {show: true},//显示数值
                        //     },
                        // }
                        // data:['30','50','90','120','170']
                    },
                    {
                        name:'GF',
                        type:'line',
                        data:[
                            {
                              value:150,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:80,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:88,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:100,
                              label:{
                                  show:true
                              }
                            },
                            {
                              value:70,
                              label:{
                                  show:true
                              }
                            }],
                        symbol: 'circle',
                        symbolSize: 5,
                        smooth: false,
						lineStyle: {
							normal: {
								color: '#cc67D6',
								width: 2,
							}
						},
                    }
                ]
            },
        }
    },
    mounted(){
        this.chartInit();
        this.moveLine();
    },
    methods:{
        chartInit(){
            var myChart = echarts.init(this.$refs.chart);
            myChart.setOption(this.option);
        },
        moveLine(){//自动切换

        },
    },
}
</script>