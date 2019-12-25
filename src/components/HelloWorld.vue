<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select v-model="opt.type" @change="dataChanged">
      <option v-for="item in dataType" :key="item.name" :value="item.name">{{item.name}}</option>
    </select>
    <div style="width: 300px;height:200px;" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import $ from 'jquery';
export default {
  // name: 'HelloWorld',
  data () {
    return {
      msg: '图表切换',
      odataArr: ['invest', 'amount', 'cost','totalamount'],
      dataList:['80','88','88','80'],
      dataType:[
        {name:'FD'},
        {name:'GF'},
        {name:'MD'}
      ],
      opt:{
        type:'FD'
      },
    }
  },
  methods:{  
    chartInit(){
        var myChart = echarts.init(this.$refs.chart);
        myChart.setOption({ 
            title:{
                text:"example"
            },    
            tooltip: {trigger:'axis'},
            xAxis: {
              type: 'category',
              axisLabel:{//处理横坐标文字显示不全间隔显示
                interval:0,
              },
              data: this.odataArr,
            },
            yAxis: {//纵轴标尺固定
              // type:'value',
              // scale : true,
              // max : 200,
              // min : 0,
              // splitNumber : 5,//坐标轴的分割段数预估值
              // boundaryGap : [ 0.2, 0.5 ]//表示数据范围0-200，最小值下方扩展20%，最大值上方扩展50%
            },
            grids:{
              //设置图的边距
              //  x: 60,
              //  y: 20,
            },
            series:[
              {
                name:'type',
                type:'bar',
                barWidth : 30,
                color:'yellow',
                data: this.dataList,
              },
            ],
          });
          //div不设高一个图高度自适应
          myChart.resize(); 
    },
    dataChanged(){
      //模拟监听后端数据改变
      console.log(this.opt.type);
      if(this.opt.type == "GF"){
        this.dataList = ['60','70','80','90']
      }else if(this.opt.type == "MD"){
        this.dataList = ['90','80','75','65']
      }else{
        this.dataList = ['80','88','88','80']
      } 
      // this.chartInit();   
    },  
  },
  mounted(){
    this.$nextTick(()=>{
        this.chartInit();
        //多个echarts图高度自适应div不设高 
        // window.addEventListener('resize', () => {
        //     this.$nextTick(() => {
        //       this.chart.resize();
        //     })
        // }) 
    })
  //根据item.name不同发送数据请求获取对应的dataList数据 
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
