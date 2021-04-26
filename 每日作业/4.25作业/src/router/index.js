import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMsg = () => import('../components/HomeMsg')
const Profile = () => import('../components/Profile')
const Order1 = () => import('../components/Order1')
const Order2 = () => import('../components/Order2')
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const routes = [
  //这里一个url对应一个组件
  {
    path: '/aPage',
    component: Order1,
    meta: {
      title: ''
    }
  },
  {
    path: '/bPage/:id',
    component: Order2,
    meta: {
      title: ''
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  },
  {
    path: '/user/:userid',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'msg',
        component: HomeMsg
      },
      {
        path: '',
        component: HomeMsg
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  // {
  //   path: '',
  //   //重定向
  //   redirect: '/home'
  // }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  //修改展示模式，默认是hash模式路径带有#号
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  //从from到to
  // document.title = to.matched[0].meta.title;
  next()
})
// router.afterEach((to, from) => {
//   console.log('after')
// })
//将router对象传入到Vue实例中,
//导入到main.js中
export default router