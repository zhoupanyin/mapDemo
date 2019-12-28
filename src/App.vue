<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // components: {
  //   HelloWorld
  // }
  data(){
    return{}
  }
}
// promise.all电力示例
//  getData(index) {
//             let _this = this;
//             return new Promise((resolve, reject) => {
//                 _this.$refs["modelForm" + index].validate(vaild => {
//                     vaild ? resolve(true) : reject(true);
//                 })
//             })

//         },

//   checkValidateForm() {
//             return new Promise((resolve, reject) => {
//                 let pArr = [];
//                 for (let index = 0; index < 3; index++) {
//                     pArr.push(this.getData(index))
//                 };
//                 Promise.all(pArr).then(res => {
//                     resolve(true)
//                 }).catch(err => {
//                     reject(true);
//                 })
//             })
//         },
//   checkValidCoal() {
//             let canSubmit = true;
//             let promise = this.checkValidateForm().then(res => {
//                 return Promise.resolve(true)
//             }).catch(err => {
//                 return Promise.resolve(false)
//             })
//             return promise
//         },
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
