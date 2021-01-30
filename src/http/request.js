import axios from 'axios'
// import { baseApi } from '@/config/index'
// console.log(baseApi)
// import { Loading, Message } from 'element-ui';
// import store from '@/store/index';

let loading
const service = axios.create({
  baseURL: 'api', // url = base api url + request url // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  // withCredentials : true // 允许携带cookie 
})

//请求拦截
service.interceptors.request.use(config => {
  //loading动画开启
  // loading = Loading.service({
  //   text: '正在加载中',
  //   spinner: 'el-icon-loading'
  // })
  // var users = 'Bearer ' + localStorage.getItem("token")
  // if (users) {
  //   //附加到请求头上
  //   config.headers.authorization = users
  //   return config;
  // } else {
    return config;
  // }
  // if(localStorage.getItem('token')){

  //   config.headers['authreation']=token
  // }
  //请求头，添加token
 
  // return config;
}, err => {
  Message({
    message: '请求出错',
    offset: 150
  })

})

//响应拦截
service.interceptors.response.use(res => {
  // loading.close()
  if (res.status == 200) {
    // return response.data;
    return res;
}

return res;
}, (error) => {

  return Promise.reject(error);
})
export default service