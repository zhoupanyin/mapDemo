
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: '柱状图切换模拟',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '侧柱状图',
      component: resolve => {
        require(['./views/login.vue'], resolve)
      }  
    },
    {
      path: '/index',
      name: '柱状图',
      component: resolve => {
        require(['./views/viewone/index.vue'], resolve)
      }  
    },
    {
      path: '/echarts1',
      name: '饼图',
      component: resolve => {
        require(['./views/viewone/components/echarts1.vue'], resolve)
      }  
    },
    {
      path: '/echarts2',
      name: '折线图',
      component: resolve => {
        require(['./views/viewone/components/echarts2.vue'], resolve)
      }  
    },
    {
      path: '/map',
      name: '地图',
      component: resolve => {
        require(['./views/viewone/components/map.vue'], resolve)
      }  
    },
    {
      path: '/canvas1',
      name: '绘图',
      component: resolve => {
        require(['./views/viewone/components/canvas1.vue'], resolve)
      }  
    },
    {
      path: '/itable',
      name: '自定义函数应用',
      component: resolve => {
        require(['./views/viewone/components/itable.vue'], resolve)
      }  
    },
  ]
})
