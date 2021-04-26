import Vue from 'vue'
import Vuex from 'vuex'
//安装插件
Vue.use(Vuex);
//创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: 'rng', age: 10 },
      { id: 111, name: 'ig', age: 8 },
      { id: 112, name: 'fpx', age: 7 },
      { id: 113, name: 'edg', age: 2 },
    ]
  },
  mutations: {
    add(state) {
      return state.counter++;
    },
    sub(state) {
      return state.counter--;
    },
    increment(state, num) {
      state.counter += num;
    },
    addTeams(state, T) {
      state.students.push(T);
    }
  },
  actions: {

  },
  getters: {
    more20stu(state) {
      return state.students.filter(res => res.age <= 7);
    },
    moreAgestu(state) {
      return function (age) {
        return state.students.filter(s => s.age <= age);
      }
    }
  },
  modules: {

  }
})

//导出
export default store