import Vue from "vue"
import VueRouter from "vue-router"

const Home =()=>import ("../views/home/Home")
const Categ =()=>import("../views/categ/Categ")
const Pioflag =()=>import("../views/pioflag/Pioflag")
const Cote =()=>import("../views/cate/Cote")
const Detril =()=>import("../views/detril/Detril")

// 1.安装插件
Vue.use(VueRouter)


const routes=[
    {
        path:"/",
        redirect: "/home"
      },
      {
        path:"/home",
       component:Home
      },
      {
        path:"/categ",
        component:Categ
      },
      {
        path:"/pioflag",
        component:Pioflag
      },
      {
        path:"/cote",
        component:Cote
      },
      {
        path:"/detril/:iid",
        component: Detril
      }
]
// 2.创建路由对象a
const router= new VueRouter({
  routes,
  // mode:"history"
})
export default router