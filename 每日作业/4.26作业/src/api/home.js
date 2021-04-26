import axios from "@/utils/axios";

// post示例
const post = params => {
  return axios.post(`/post`, params);
};

// get示例
const get = params => {
  return axios.get(`/get`, params);
};

// get 拼参数形式示例
const getParams = (a, b) => {
  return axios.get(`/get/${a}/${b}`);
};

export default {
  post,
  get,
  getParams
};


