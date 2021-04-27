<template>
  <div id="app">
    <show-blog></show-blog>
    <!-- <add-blog></add-blog> -->
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlog from "./components/ShowBlog";

export default {
  name: "App",
  components: {
    AddBlog,
    ShowBlog,
  },
};
</script>

<style>
</style>
