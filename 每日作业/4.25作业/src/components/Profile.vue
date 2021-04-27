<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
    <h2>我是profile</h2>
    <h3>{{ $route.query }}</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      msg: "profile",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
