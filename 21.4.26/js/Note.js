/*

Vuex{
  Vuex是一个转为Vue.js应用程序开发的状态管理模式{
    采用 集中式存储管理 应用的所有组件状态
    也集成了 Vue官方调试工具devtools extension
    简单理解为需要多个组件共享的变量全部存储到一个对象里，并
    将这个对象放在顶层Vue实例中，让其他组件可以使用
    共享状态{
      用户登录状态、用户名称、头像、地理位置信息等，商品收藏、购物车商品
    }
  }

  Vuex中state单一状态树{
    是响应式的
    对象的属性也会被加入到响应式系统中而响应式系统会监听属性的变化
  }
  mutations{
    store状态的更新唯一方式
    使用：this.$store.commit("字符串事件")
    不要进行异步操作
  }
  getters{
    适用于共享数据中一些修改后的数据传给其他组件
    如果需要传参数，可以使getters返回一个函数
  }
  actions:{
    异步操作在此执行
    调用actions内定义的方法
      this.$store.dispatch，可以返回一个promise对象
  }
  Module{
    允许将store分割成模块，每个模块均拥有state、mutations等
    模块里访问其他模块里的数据{
      在getters的方法传参
    }

  }

}
网路模块封装{
  发送网络请求的方式{XHR、JQ-Ajax、Vue-resource、axios、jsonp解决跨域问题}
  axios{
    在浏览器中发送XHR请求；在node.js中发送http请求；
    支持promise API； 拦截请求和响应；转换请求和响应数据
  }
  axios请求方式{
    axios()/.request()/.get()/.delete()/.head()/.post()/.put()/.patch()
    axios.all()并发请求
  }
  axios全局配置{
    开发中很多参数是固定的，可以抽取，defaults
  }
  axios常用配置选项{
    请求地址、请求类型、请求根路径、请求前数据处理、请求后数据处理、自定义请求头、URL查询对象
    transformRequest:[] transformResponse:[]
  }
  axios实例{

  }
  axios拦截器{

  }
}

复习{

}
*/