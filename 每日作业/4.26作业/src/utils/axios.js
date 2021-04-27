import Vue from "vue";
import axios from "axios";
import Qs from "qs";
import { storage } from "@/utils/util";
import { baseURL } from "./ip";

const instance = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

// 设置请求头cookie不刷新
instance.defaults.withCredentials = true;

// 监听请求之前处理
instance.interceptors.request.use(
  function (config) {
    //console.log(config);
    config.headers["token"] = window.localStorage.getItem('token');
    console.log(config)
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 监听请求响应之后错误处理
instance.interceptors.response.use(function (response) {
  if (response.data.errorCode !== 200) {
    return catchError(response);
  }
  return response;
}, catchError);

const catchError = error => {
  console.log("error.response", error);
  if (error.data) {
    error.response = error.data;
  }
  //去掉重复message弹窗
  if (window.message) {
    return;
  }
  window.message = true;
  if (error.response) {
    switch (error.response.errorCode) {
      case 400:
        Vue.prototype.$toast({
          type: "fail",
          message: error.response.data.message || "请求参数异常",
          duration: 1000
        });

        break;
      case 5100:
        Vue.prototype.$toast(error.response.errorMsg);
        break;
      case 401:
        storage("user", "");
        window.location.reload();
        break;
      case 403:
        Vue.prototype.$toast({
          type: "fail",
          message:
            error.response.data.message || "无访问权限，请联系企业管理员",
          duration: 1000
        });

        break;
    }
  }
  return Promise.reject(error);
};

export default {
  get(url, params) {
    return instance({
      url: url,
      method: "get",
      params: params
    });
  },
  post(url, data) {
    return instance({
      url: url,
      method: "post",
      data: Qs.stringify(data),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  },
  postJson(url, data) {
    return instance({
      url: url,
      method: "post",
      data: data
    });
  }
};
