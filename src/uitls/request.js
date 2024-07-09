import axios from "axios";
const instance=axios.create({
    baseURL:'/api',
    timeout:5000
})

// 添加请求拦截器---前端给后端的参数，（还没有到后端响应）
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //例如：登录判断，如果是登录状态，会在headers中把用户的torken传递给后端
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器----后端返回给前端的数据
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
export default instance