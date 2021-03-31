import Tosat from './tosat.vue'
const obj = {}
//默认会传过来Vue
obj.install =function(vue){
    // 1.创建组件构造器
    const contrustor =vue.extend(Tosat)
    //2.根据组件构造器创建一个组件对象
    console.log(contrustor)
    const tosat = new contrustor()
    // 3.将组件对象挂载到元素上
   tosat.$mount(document.createElement("div"))
   //4.tosat.$el对应的就是div
   document.body.appendChild(tosat.$el)

  vue.prototype.$tosat = tosat
//   console.log(tosat)
//   console.log(Vue)
}

export default obj