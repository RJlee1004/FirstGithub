import Vue from 'vue'
import Router from 'vue-router'
import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'
Vue.use(Router)
const routes = [
  { path: "/", component: ShowBlog },
  { path: "/add", component: AddBlog },
  { path: "/blog/:abc", component: SingleBlog }
]
const router = new Router({
  routes,
  mode: "history"
})
export default router;