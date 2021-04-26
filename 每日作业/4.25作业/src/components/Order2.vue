<template>
  <div class="order2">
    <h1>我是{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Order2",
  data() {
    return {
      msg: "order2",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
