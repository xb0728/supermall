<template>
<!-- 这里设置ref属性是为了拿到这个元素 -->
    <div class="wrapper" ref='wrapper'>
        <div class="scroll-height">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)

export default {
    name:'scroll',
    props:{
        probetype:{
          type:Number,
          default:0
        },
        pulluplode:{
          type:Boolean,
          default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted () {
        // 创建bscroll对象
      this.scroll =new BScroll(this.$refs.wrapper,{
        click:true,
        observeDOM:true,
        probeType:this.probetype,
        pullUpLoad:this.pulluplode
      })  
      //监听滚动的位置
      this.scroll.on('scroll',(position)=>{
        //   console.log(position)
        this.$emit('scroll',position)
      })
    //   监听上拉事件
      this.scroll.on('pullingUp',()=>{
        this.$emit("pullingU")
      })
    },
    methods: {
        scrollTo(x,y,time=300){
           this.scroll.scrollTo(x,y,time)
        },
        refresh(){
          // console.log("-------hhh-----")
          this.scroll.refresh()
        }
    }
    
}
</script>
<style scoped>

</style>