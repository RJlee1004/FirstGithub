import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils";
import abc from "./utils/axios"
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  abc.post("/auth/entrance", {
    share_code: "27eIDYTA",
    user_id: "i61",
    timestamp: "1601360785",
    sign: "69CB33BACEC26BE2576722F4A993F306",
  }).then((res) => {
    window.localStorage.setItem("token", res.data.data.token);
  })
    ;
  next();
});

router.onError(error => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFaild = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFaild) {
    router.replace(targetPath);
  }
  console.log("isChunkLoadFaild", isChunkLoadFaild, targetPath);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
