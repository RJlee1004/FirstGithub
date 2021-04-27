<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>Show-Blogs</h1>
    <input type="text" placeholder="搜索" v-model="search" />
    <div
      v-for="(blog, index) in filteredBlogs"
      :key="index"
      class="single-blog"
    >
      <router-link :to="'/blog/' + blog.id"
        ><h2 v-rainbow>{{ blog.title | toUppercase }}</h2></router-link
      >
      <!-- <h2 v-rainbow>{{ blog.title | toUppercase }}</h2> -->
      <article>
        {{ blog.body | snippet }}
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
      search: "",
    };
  },
  created() {
    //https://jsonplaceholder.typicode.com/posts
    this.$http.get("./../static/posts.json").then((data) => {
      // console.log(data);
      this.blogs = data.body.slice(0, 10);
      // console.log(this.blogs);
    });
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, bingding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
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
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  widows: 100%;
  box-sizing: border-box;
}
</style>
