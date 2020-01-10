<template>
    <div>
      <canvas ref = "drawing" width = "600" height = "600">A drwaing of something.</canvas>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            drawing:"",
            ctx:"",
        }
    },
    created(){     
    },
    mounted(){
        this.getCanvas()
    },
    methods:{
        getCanvas(){
            this.drawing = this.$refs.drawing;//创建画布
            this.ctx = this.drawing.getContext("2d");//画笔支持2d
            this.ctx.fillStyle = 'pink';//填充颜色
            this.ctx.fillText('Hello',400,200)//填充文本
            this.ctx.fillRect(150,150,300,300);//画矩形
            this.ctx.beginPath();//开始路径
            this.ctx.arc(300,300,300,0,Math.PI*2);//画圆
            this.ctx.stroke();
            this.ctx.scale(-1,1);//水平翻转
        }
    }
}
</script>
<style lang="less" scoped>

</style>