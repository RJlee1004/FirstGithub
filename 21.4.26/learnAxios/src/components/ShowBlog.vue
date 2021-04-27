<template>
  <div id="show-blogs">
    <h1>Show-Blogs</h1>
    <div v-for="(blog, index) in blogs" :key="index" class="single-blog">
      <h2>{{ blog.title }}</h2>
      <article>
        {{ blog.body }}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      msg: "ShowBlogs",
      blogs: [],
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        // console.log(data);
        this.blogs = data.body.slice(0, 10);
        console.log(this.blogs);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
