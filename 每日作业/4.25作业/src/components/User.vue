<template>
  <div class="user">
    <h2>我是用户界面</h2>
    <p>我是用户相关信息</p>
    <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userid;
    },
  },
  data() {
    return {
      msg: "user",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
