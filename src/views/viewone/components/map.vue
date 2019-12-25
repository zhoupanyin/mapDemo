<template>
    <div>
        <div ref="map" style="width: 800px;height:600px;"></div>
    </div>
</template>
<script>
import echarts from 'echarts';
// import chinaJson from 'echarts/map/json/china.json';
import '../../../../node_modules/echarts/map/js/china.js';
export default {
    data(){
        return{
           dataList:[
            {name: '北京',value: Math.round(Math.random()*500)},
            {name: '天津',value: Math.round(Math.random()*500)},
            {name: '上海',value: Math.round(Math.random()*500)},
            {name: '重庆',value: Math.round(Math.random()*500)},
            {name: '河北',value: Math.round(Math.random()*500)},
            {name: '河南',value: Math.round(Math.random()*500)},
            {name: '云南',value: Math.round(Math.random()*500)},
            {name: '辽宁',value: Math.round(Math.random()*500)},
            {name: '黑龙江',value: Math.round(Math.random()*500)},
            {name: '湖南',value: Math.round(Math.random()*500)},
            {name: '安徽',value: Math.round(Math.random()*500)},
            {name: '山东',value: Math.round(Math.random()*500)},
            {name: '新疆',value: Math.round(Math.random()*500)},
            {name: '江苏',value: Math.round(Math.random()*500)},
            {name: '浙江',value: Math.round(Math.random()*500)},
            {name: '江西',value: Math.round(Math.random()*500)},
            {name: '湖北',value: Math.round(Math.random()*500)},
            {name: '广西',value: Math.round(Math.random()*500)},
            {name: '甘肃',value: Math.round(Math.random()*500)},
            {name: '山西',value: Math.round(Math.random()*500)},
            {name: '内蒙古',value: Math.round(Math.random()*500)},
            {name: '陕西',value: Math.round(Math.random()*500)},
            {name: '吉林',value: Math.round(Math.random()*500)},
            {name: '福建',value: Math.round(Math.random()*500)},
            {name: '贵州',value: Math.round(Math.random()*500)},
            {name: '广东',value: Math.round(Math.random()*500)},
            {name: '青海',value: Math.round(Math.random()*500)},
            {name: '西藏',value: Math.round(Math.random()*500)},
            {name: '四川',value: Math.round(Math.random()*500)},
            {name: '宁夏',value: Math.round(Math.random()*500)},
            {name: '海南',value: Math.round(Math.random()*500)},
            {name: '台湾',value: Math.round(Math.random()*500)},
            {name: '香港',value: Math.round(Math.random()*500)},
            {name: '澳门',value: Math.round(Math.random()*500)},
            {name: '南海诸岛',value: Math.round(Math.random()*500)}
           ],
           geoCoordMap:{
             '北京':[116.422586,39.921549,560],
             '湖北':[111.3,30.7,330],
             '信阳':[114.089435,32.167686,440]
           },
        }
    },
    created(){},
    mounted(){
      this.mapInit();
    },
    methods:{
        mapInit(){
            var myChart = echarts.init(this.$refs.map);
            var option = {
                title:{
                    text:'中国地图示例',
                    left:'center',
                    textStyle:{
                        color:'red'
                    }     
                },
                toolTip:{show:true,},
                // visualMap: {
                    // min: 0,
                    // max: 1500,
                    // left: 'left',
                    // top: 'bottom',
                    // text: ['High','Low'],//取值范围的文字
                    // seriesIndex: [1],
                    // inRange: {
                    //     color: ['#e0ffff', '#006edd']//取值范围的颜色
                    // },
                    // calculable: true,//图注
                // },
                geo:{
                     show:true,
                     map: 'china', // 表示地图类型中国地图
                     roam: true,//是否缩放和平移
                     zomm:1,//当前视角缩放比例
                     label: {//图形上的文本标签，可用于说明图形的一些数据信息
                       normal: {
                         show: true, // 是否显示对应地名
                         textStyle: {
                           color: 'rgba(0, 0, 0, 0.5)',
                           fontSize:8,
                         }
                       }
                     },
                     itemStyle: {//地图区域的多边形 图形样式
                       normal: {
                         borderColor: 'rgba(0, 0, 0, 0.2)',
                         areaColor: '#D5DDFD', // 省份填充颜色
                       },
                       emphasis: {
                         areaColor: 'pink',//鼠标经过选择区域颜色
                         shadowOffsetX: 0,
                         shadowOffsetY: 0,
                         shadowBlur: 20,
                         borderWidth: 0,
                         shadowColor: 'rgba(0, 0, 0, 0.5)'
                       }
                     },
                     regions:[//在地图中对特定的区域配置样式
                         {
                            name:'广东',
                            itemStyle:{
                               normal:{
                                  areaColor:'skyblue',
                               } 
                            }
                         }
                     ]
                },
                series:[
                    {
                      type: 'effectScatter',
                      coordinateSystem: 'geo', // 对应上方配置
                      symbolSize:function(val){
                         return val[2] / 200;;//标记大小计算
                      }, 
                      data:this.convertData(this.dataList),
                      label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                      },
                      itemStyle: {
                          normal: {
                              color: 'red'   //点的颜色
                          }
                      },
                      // showEffectOn: 'render',
                      rippleEffect: { //涟漪特效相关配置。
                            brushType: 'stroke' //波纹的绘制方式
                      },                      
                      hoverAnimation: true, //鼠标移入放大圆
                    }]
            }
            myChart.setOption(option);
        },
        convertData(data){
          let res = [];
          for(let i=0;i<data.length;i++){
            let geoCoord = this.geoCoordMap[data[i].name];
            if(geoCoord){
              res.push({
                name:data[i].name,
                value:geoCoord.concat(data[i].value)
              })
            }
          }
          return res;
        }
    },
    watch:{},
    computed:{},
}
</script>