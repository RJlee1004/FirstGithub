import axios from 'axios'


export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    // console.log(config);
    //config中一些信息不符合服务器要求 
    //或者需要显示请求图标
    //携带登录token，携带一些特殊信息
    return config;
  }, err => {
    console.log('err')
  })
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  }, err => {
    // console.log(err);
  })
  return instance(config)
}
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     })
//   })
//   return instance(config);
// }
// instance(config).then(res => {
//   config.success(res)
//   // console.log(res)
// }).catch(err => {
//   // console.log(err)
//   config.failure(err);
// })

