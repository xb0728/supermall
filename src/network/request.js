import axios from "axios"
// 第一种方案
export function request(config){
//   1.创建axios实例
   const instends =axios.create({
       baseURL:"http://123.207.32.32:8000",
       timeout:5000
   })
//    2.axios拦截器
instends.interceptors.request.use(config=>{
    console.log(config)
    // 由于拦截了，所以要返回出去，main.js里面才能拿到数据
    return config
    // 拦截作用   显示请求图标，修改信息，登录携带特殊信息 比如token 令牌
},err=>{
    console.log(err)
})
//响应拦截
//  
//会返回一个Promise 
return instends(config)
}

