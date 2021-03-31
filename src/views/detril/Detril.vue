<template>
    <div class="detril">
     <detrilcomes class="tab-item" @itemclick="itemclick" ref="nav"></detrilcomes>
     <scroll class="centet" :pulluplode="true" ref="scroll" @scroll="scrollitem">
     <detrilbanner :topimages="topimages"></detrilbanner>
     <detrilgoods :goods="goods"></detrilgoods>
     <detrilshops :shops="shops"></detrilshops>
     <detailinfo :detailinfo='detailinfo' @imageLoad="imageLoad"></detailinfo>
     <detrilparameter :parameter ="parameter" ref="parameter"></detrilparameter>
     <detrilcommer :commerinfo="commerinfo" ref="commer"></detrilcommer>
     <detrilcommen :getcommen="getcommen" ref="commen"></detrilcommen>
     </scroll>
     <detrilbottom @addcate="addcate"></detrilbottom>
    </div>
</template>
<script>
// 头部tab栏文件
import detrilcomes from './detrilcomes/detrilcomes'
// banner文件
import detrilbanner from './detrilcomes/detrilbanner'
//goods文件
import detrilgoods from './detrilcomes/detrilgoods'
//shops文件
import detrilshops from './detrilcomes/detrilshops'
//detailinfo文件
import detailinfo from './detrilcomes/detailinfo'
// 滚动条文件
import Scroll from '../../components/centent/scroll/scroll'
//参数文件
import detrilparameter from './detrilcomes/detrilparameter'
// 评论文件
import detrilcommer from './detrilcomes/detrilcommer'
//推荐信息文件
import detrilcommen from './detrilcomes/detrilcommen'
//底部tab栏文件
import detrilbottom from './detrilcomes/datrilbottom'
// 网络请求文件
import {getdetril,Goods,Shops,Parameter,getcommen} from '../../network/detril'


export default {
    name:"detril",
    components: {
      detrilcomes,
      detrilbanner,
      detrilgoods,
      detrilshops,
      Scroll,
      detailinfo,
      detrilparameter,
      detrilcommer,
      detrilcommen,
      detrilbottom
    },
    data(){
        return{
            iid:null,
            topimages:[],
            goods:{},
            shops:{},
            detailinfo:{},
            parameter:{},
            commerinfo:{},
            getcommen:[],
            scrollY:[],
            currentindex:0,
        }
    },
    created () {
        console.log(this.$route.params.iid)
        // 保存iid
        this.iid=this.$route.params.iid
        // 根据请求的iid来请求详情数据
        getdetril(this.iid).then(res=>{
            console.log(res)
            const rult =res.data.result
            // 保存轮播图数据
            this.topimages = res.data.result.itemInfo.topImages
            // 获取商品信息
         this.goods = new Goods(rult.itemInfo,res.data.result.columns,rult.shopInfo.services)
         this.shops = new Shops(rult.shopInfo)
         this.detailinfo = rult.detailInfo
         this.parameter =new Parameter(rult.itemParams)
         //取出评论信息
         if(rult.rate.cRate !==0){
            this.commerinfo=rult.rate.list[0]
         }
         })
        //  this.$nextTick(()=>{
        //      this.scrollY=[]
        //    this.scrollY.push(0)
        //    this.scrollY.push(this.$refs.parameter.$el.offsetTop)
        //    this.scrollY.push(this.$refs.commer.$el.offsetTop)
        //    this.scrollY.push(this.$refs.commen.$el.offsetTop)
        //    console.log(this.scrollY)
        //  })
         //请求推荐数据
         getcommen().then(res=>{
            this.getcommen = res.data.data.list
            console.log(res.data.data.list)
         })
    },
    methods: {
    imageLoad(){
       this.$refs.scroll.refresh()
        this.scrollY=[]
        this.scrollY.push(0)
        this.scrollY.push(this.$refs.parameter.$el.offsetTop)
        this.scrollY.push(this.$refs.commer.$el.offsetTop)
        this.scrollY.push(this.$refs.commen.$el.offsetTop)
        // console.log(this.scrollY)
    //    console.log('hhh')
    },
    itemclick(index){
        // 根据index跳到指定的滚动条位置
        if(index == 0){
        this.$refs.scroll.scrollTo(0,-this.scrollY[index],500)
        } else {
        this.$refs.scroll.scrollTo(0,-this.scrollY[index],500)
        }
        console.log(index)
    },
     scrollitem(position){
        //  console.log(position)
        // 获取滚动的y值
        const positions = -position.y
         let length= this.scrollY.length
        //  console.log(length)
        // console.log(positions)
         for(let i =0;i<length;i++){
            //  console.log(i)
            // 判断滚动的值是否到达指定的值
           if(this.currentindex!==i&&(i<length-1&&positions>=this.scrollY[i]&&positions<this.scrollY[i+1])||(i===length-1&&positions>=this.scrollY[i])){
             this.currentindex=i;
             console.log(this.currentindex)
             this.$refs.nav.comteindex=this.currentindex
           }
         }
     },
     addcate(){
    //获取购物车需要展示的东西
    const showpart={}
    showpart.desc=this.goods.desc,
    showpart.oldPrice=this.goods.oldPrice,
    showpart.topimages=this.topimages[0],
    showpart.iid=this.iid
    showpart.count=this.goods.count
    showpart.title=this.goods.title
    console.log(showpart)
    // 使用vuex进行管理展示数据（传输数据）
    // this.$store.commit("addcart",showpart)  commit对mutations发送事件
    // 通过then来接收Prosime的回调
    this.$store.dispatch("addcart",showpart).then(res=>{
        // console.log(res)
        // 调用创建的组件对象里面的show方法
        this.$tosat.show(res,1500)
    })  //dispatch对actions发送事件
    

     }
    }
}
</script>
<style scoped>
.detril{
    background: white;
    position: relative;
    z-index: 100000;
    height: 100vh;

}
.tab-item{
    position: relative;
    z-index: 10;
    background: white;
}
.centet{
   height: calc(100% - 44px - 50px);
    overflow: hidden;
}
</style>