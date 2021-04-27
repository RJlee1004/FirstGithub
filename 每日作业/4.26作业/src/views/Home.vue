<template>
  <div class="home">
    <h1>0426-Home</h1>
  </div>
</template>

<script>
import axios from "@/utils/axios";
export default {
  name: "Home",
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.post("/user/info").then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  font-size: 30px;
  height: 100%;
}
</style>
