import axios from "axios"
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
const mockrequests=axios.create({
  //基路径
  baseURL:'/mock',
  timeout:5000,

})

mockrequests.interceptors.request.use((config)=>{
  nprogress.start()
  return config;
})

mockrequests.interceptors.response.use((res)=>{
  nprogress.done()
  return res.data
},(error)=>{
  return Promise.reject(new Error('false'))
})

//对外暴露
export default mockrequests;