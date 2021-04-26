<template>
  <div class="home">
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/msg">消息</router-link>
    <router-view></router-view>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "home",
      path: "/home/news",
    };
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroded");
  },
  activated() {
    this.$router.push(this.path);
  },
  // directives() {
  //   this.path = this.$router.path;
  // },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
