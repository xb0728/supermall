import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入fackclick插件
import fastclick from 'fastclick'
// 导入图片懒加载插件
import vuelazyload from 'vue-lazyload'


import tosat from './components/centent/tosat'

Vue.config.productionTip = false
// 添加事件总线对象
Vue.prototype.$bus= new Vue()
//安装tosat插件
Vue.use(tosat)
// 安装图片懒加载插件
Vue.use(vuelazyload)
// 使用fastClick   解决300ms延时
fastclick.attach(document.body)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
