<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active"
      >首页</router-link
    >
    <router-link to="/about" tag="button" replace active-class="active"
      >关于</router-link
    > -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userid">用户</router-link>
    <router-link :to="{ path: '/profile', query: { name: 'lrj', age: '19' } }"
      >档案</router-link
    >
    <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <!-- <h2>{{ msg }}</h2>
    <hello-world></hello-world>
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addTeam">添加战队</button>

    <p>{{ $store.getters.more20stu }}</p>
    <p>{{ $store.getters.moreAgestu(9) }}</p> -->
    <order></order>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld";
import Order from "./components/Order";
export default {
  name: "App",
  components: {
    Order,
  },
  data() {
    return {
      userid: "lrj",
      msg: "我是APP组件",
      counter: 0,
    };
  },
  computed: {
    // more20stu() {
    //   return this.$store.state.students.filter((res) => {
    //     return res.age <= 7;
    //   });
    // },
  },
  methods: {
    homeClick() {
      //通过代码方法修改路由
      this.$router.replace("/home");
      // this.$router.push("/home");
    },
    aboutClick() {
      this.$router.replace("/about");

      // this.$router.push("/about");
    },
    userClick() {
      this.$router.push("/user." + this.userid);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: 19,
          sex: "男",
        },
      });
    },
    addition() {
      this.$store.commit("add");
    },
    subtraction() {
      this.$store.commit("sub");
    },
    addCount(num) {
      // this.$store.commit("increment", num);
      this.$store.commit({
        type: "increment",
        counter,
      });
    },
    addTeam() {
      const T = { id: 114, name: "blg", age: 17 };
      this.$store.commit("addTeams", T);
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
