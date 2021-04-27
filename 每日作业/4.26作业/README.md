# 项目名称

项目介绍    


## 项目目录结构

```shell
tree -I 'node_modules|dist' -L 3 > tree.text
```

```
.
├── README.md
├── babel.config.js
├── http_test.http
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── img
│   │   └── icons
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.vue
│   ├── api
│   │   ├── home.js
│   │   └── index.js
│   ├── assets
│   │   ├── css
│   │   └── img
│   ├── components
│   │   ├── coverLoading.vue
│   │   ├── drag
│   │   └── toPayProcess
│   ├── main.js
│   ├── registerServiceWorker.js
│   ├── router
│   │   ├── index.js
│   │   └── main.js
│   ├── store
│   │   └── tokenStore.js
│   ├── utils
│   │   ├── axios.js
│   │   ├── func.js
│   │   ├── index.js
│   │   ├── util.js
│   │   └── vant.js
│   └── views
│       ├── 404.vue
│       └── Home.vue
├── tree.text
├── vue.config.js
└── yarn.lock

15 directories, 27 files

```
