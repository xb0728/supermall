<template>
    <div id="home">
      <new-bar class="newbar"><div slot="center">购物街</div></new-bar>
       <tabconlist class="tab-list" 
          :titles="['流行','新款','精选']" 
          @tabclick="tabclick" 
          ref="tabtem1"  v-show="istabfixed"></tabconlist>
      <!-- 通过ref属性拿到scroll属性 -->
        <scroll class="conents" ref="scroll" 
        :probetype='3'
        @scroll="btnscroll" 
        :pulluplode="true" 
        @pullingU="lodemore">
          <homeswiper :banner='banner' @swiperimagelode="swiperimg"></homeswiper>
          <homeconese :recommend='recommend'></homeconese>
          <homecopit></homecopit>
          <tabconlist :titles="['流行','新款','精选']" 
          @tabclick="tabclick" 
          ref="tabtem2" ></tabconlist>
          <homelist :goods="showgood"></homelist>
        </scroll>
         <backtop @click.native="backclick" v-show="isshow"></backtop>
    </div>
</template>
<script>
import NewBar from '../../components/centent/newbar/NewBar'
import Homeswiper from './chindhome/Homeswiper'
import Homecopit from './chindhome/Homecopit'
import Homeconese from './chindhome/Homeconese'

import tabconlist from '../../components/common/tabcontu/tabconlist'
import homelist from '../../components/common/homelist/homelist'
//导入滚动条【封装】
import scroll from '../../components/centent/scroll/scroll'
//导入top图标文件
import backtop from '../../components/centent/backtop/backtop'

import {homeMuli} from '../../network/home'
import {homegoods} from '../../network/home'


export default {
  name: 'Home',
  components: {
    NewBar,
    Homeswiper,
    Homeconese,
    Homecopit,
    tabconlist,
    homelist,
    scroll,
    backtop
    
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      current:"pop",
      //上拉图标显示隐藏标记
      isshow:false,
      // 记录吸顶的值
      xdshow:0,
      // 默认不吸顶
      istabfixed:false,
      saveY:null
    }
  },
  computed: {
    showgood(){
      return this.goods[this.current].list
    }
  },
  //生命周期函数  等组件创建完就发送网络请求
  created () {
    this.homeMuli()
    //请求商品数据
    this.homegoods('pop')
    this.homegoods('new')
    this.homegoods('sell')
    // 监听item组件的图片加载
  },
  // 加载组件时执行
  activated () {
    console.log("hhh")
    // 跳到滚动的值
    this.$refs.scroll.scrollTo(0,this.saveY,1)
    this.$refs.scroll.refresh()
  },
  // 离开组件时执行
  deactivated () {
    // 离开记录滚动的值
    this.saveY = this.$refs.scroll.scroll.y
    // console.log("bbb")
  },
  mounted () {
    // 防抖函数   图片加载完成的事件监听
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemimglode',()=>{
      // this.$refs.scroll.scroll.refresh()
      refresh()
    })
  },
  methods: {
    // 防抖函数相关方法
    debounce(funs,dalay){
     let timer =null
     return function(...soal){
       if(timer) clearTimeout(timer)
       timer = setTimeout(()=>{
         console.log(funs)
         funs.apply(this , soal)
        //  console.log(args)
       },dalay)
     }
    },
    //事件监听相关的方法
    tabclick(index){
     switch(index){
       case 0:
         this.current = 'pop'
         break
       case 1:
         this.current = 'new'
         break
       case 2:
         this.current = 'sell'
         break
     }
    //  使两个组件点击的index值相同，这样就可以同步当前点击值展示的数据了
     this.$refs.tabtem1.countellindex=index;
     this.$refs.tabtem2.countellindex=index;
    },
    backclick(){
     this.$refs.scroll.scrollTo(0,0)
     console.log("aaa")
    },
    // 滚动条top图标方法
    btnscroll(position){
      // console.log(position)
      //判断top图标是否显示
      this.isshow=(-position.y)>1000
      //判断tabconlist是否吸顶(position:fixed)
      this.istabfixed =(-position.y)>this.xdshow
    },
    lodemore(){
      // console.log("hhh")
      this.homegoods(this.current)
      //刷新，重新计算可滚动区域的高度
      // this.$refs.scroll.scroll.refresh()
    },
    swiperimg(){
    //获取tabtem的offsetTop属性 组件没有这个属性
    //$el帮助组件获取里面的标签元素
    this.xdshow = this.$refs.tabtem2.$el.offsetTop
    },
    //网络请求的数据
   homeMuli(){
       homeMuli().then(res=>{
      console.log(res)
      // 将banner数据保存出来，数据解构
      this.banner = res.data.data.banner.list,
      this.recommend = res.data.data.recommend.list
    })
    },
     homegoods(type){
      //  console.log(type)
       const page=this.goods[type].page+1
       console.log(this.goods[type])
        homegoods(type,page).then(res=>{
      // console.log(res.data)
      // 将取出的list数据放入goods对象的数组中
      //  console.log(res.data.data.list)
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page+=1
      
      // 上拉加载多次 
      this.$refs.scroll.scroll.finishPullUp()
      //刷新，重新计算可滚动区域的高度
      //  this.$refs.scroll.scroll.refresh()
    })
    },
  }
  
}
</script>

<style>
/* body{
overflow:scroll;
overflow-x:hidden;
} */
#home{
  height: 100vh;
  padding-top: 44px;
  position: relative;
  box-sizing: border-box;
  
}
.newbar{
  background: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
 .tab-list{
  /* position: sticky; 
  top: 44px;
  background: #fff; */
  position: relative;
  z-index: 100;
  background: white;
 
  left:0;
  right: 0;
} 
.conents{
 
 position: absolute;
   top: 44px;
  bottom:49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .conents{
   height: calc(100% - 93px);
   overflow: hidden;
   margin-top: 44px;
} */

</style>
