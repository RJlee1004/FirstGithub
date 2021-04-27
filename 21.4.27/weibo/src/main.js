// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(VueResource)

// Vue.directive('rainbow', {
//   bind(el, bingding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })
Vue.directive('theme', {
  bind(el, bingding, vnode) {
    if (bingding.value === 'wide') {
      el.style.maxWidth = "1260px"
    } else if (bingding.value === 'narrow') {
      el.style.maxWidth = "560px"
    }
    if (bingding.arg === 'column') {
      el.style.background = '#6677cc';
      el.style.padding = '20px';
    }
  }
})

// Vue.filter("toUppercase", function (value) {
//   return value.toUpperCase();
// })

Vue.filter("snippet", function (value) {
  return value.slice(0, 100) + "..."
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//123.207.32.32:8000/home/multidata
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   //针对get请求参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000;
// //并发请求
// axios.all([axios({
//   url: "/home/multidata"
// }), axios({
//   url: "/home/data",
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(res => {
//   console.log(res)
// })
// // axios.spread()

// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// })

// instance1({
//   url: 'home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// import { request } from './components/network/request'
// request({
//   baseConfig: {

//   },
//   success: function () {

//   },

// })
// request({
//   url: '/home/multidata'
// }).then(res => {
//   // resolve(res)
//   console.log(res)
// }).catch(err => {
//   // console.log(err)
// })