<template>
    <div>
       <i-table border :columns="columns" :data="data1" class='tab'></i-table> 
    </div>
</template>
<script>
export default {
    data () {
        return {
            columns:[{
                type: 'selection',
                width: 60,
                align: 'center'
            },
            {
                title:'姓名',
                key:'name',
                render:(h,params)=>{
                    return h('div',{
                        directives:[
                            {
                             name:'cell',
                             arg:'colSpan',//合并类型
                             value:2//合并列数
                            },
                            {
                             name:'rmcell',
                             arg:'colSpan',
                             value:2
                            }
                        ]},params.row.name + params.row.age)
                }
            },
            {
                title:'年龄',
                key:'age', 
            },
            {
                title:'表头合并',
                key:'111',
                align:'center',
                children:[
                    { 
                      title:'性别',
                      key:'sex',
                    },
                    {
                      title:'联系方式', 
                      key:'phone',  
                    }
                ]
            },
            // {
            //     title:'性别',
            //     key:'sex', 
            // },
            // {
            //     title:'联系方式',
            //     key:'phone', 
            // },
            {
                title:'地址',
                key:'address', 
                render:(h,params)=>{
                    let dir = null
                    if(params.index == 0){
                        dir = [{
                            name:'cell',
                            arg:'rowSpan',//合并类型
                            // value:this.data1.length//合并行数
                            value:3
                        }]
                    }else{
                        dir = [{
                            // name:'rmcell',
                            // arg:'rowSpan',
                        }]
                    }
                    return h('span',{
                        directives:dir,
                        on:{
                            click: () => {}
                        },
                        },params.row.address)
                }
            }],
            data1:[{
                name: '王小明',
                age: 18,
                sex:'男',
                phone:'12',
                address: '北京市朝阳区芍药居'
            },
            {
                name: '张小刚',
                age: 25,
                sex:'男',
                phone:'13',
                address: '北京市海淀区西二旗'
            },
            {
                name: '李小红',
                age: 30,
                sex:'女',
                phone:'14',
                address: '上海市浦东新区世纪大道'
            },
            {
                name: '周小伟',
                age: 26,
                sex:'女',
                phone:'15',
                address: '深圳市南山区深南大道'
            }]
        }
    },
    methods: {
    },
}
</script>
<style lang="Less" scoped>
.tab{
    margin:0 5px;
}

</style>