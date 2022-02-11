
//引入
import axios from "axios"
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import store from "@/store";
const requests=axios.create({
  //基路径
  baseURL:'/api',
  timeout:5000,

})

requests.interceptors.request.use((config)=>{
  if(store.state.detail.uuid_token) config.headers.userTempId=store.state.detail.uuid_token
  nprogress.start()
  return config;
})

requests.interceptors.response.use((res)=>{
  nprogress.done()
  return res.data
},(error)=>{
  return Promise.reject(new Error('false'))
})

//对外暴露
export default requests;