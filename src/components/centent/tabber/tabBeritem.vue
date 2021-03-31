<template>  
   <div class="tab-ver-item" @click="istyt">
       <div v-if="istrue"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-iconict"></slot></div>
       <div :style="activestyle"><slot name="item-text"></slot></div> 
       <!-- <div :class="{listred:istrue}"><slot name="item-text"></slot></div>    -->
     <!-- <img src="../../assets/img/icon/042方块.svg" alt="">
    <div>首页</div> -->
   </div>
      

</template>

<script>
export default {
  name: 'tabBeritem',
  props:{
    path:String,
    activecolor:{
      trpe:String,
      default:"red"
    }
  },
  data(){
    return{
      // istrue:true,
    }
  },
computed: {
  istrue(){
    // console.log(this.$route.path.indexOf(this.path) !==-1)
    // 判断处于活跃的路径是否等于当前的路径
    return this.$route.path.indexOf(this.path) !==-1  
  },
  activestyle(){
    return this.istrue ?{color:this.activecolor}:{}
  }
},
  methods: {
    istyt(){
      //  console.log("jjjj")
       this.$router.replace(this.path).catch(err=>{})
    }
  }
}
</script>

<style>

.tab-ver{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 17px;
  z-index: 10000;
}
.tab-ver .tab-ver-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* line-height: 24px; */
}
/* .listred{
  color: red;
} */
</style>
