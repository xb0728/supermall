import {request} from './request'
import {requests} from './requests'
// 做一层网络请求封装
export function homeMuli(){
    return request({
        url:'/home/multidata'
    })
}
export function homegoods(type,page){
   return requests({
       url:'/home/data',
       params:{
           type,
           page
       }
   })
}