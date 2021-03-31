<template>
  <div class="commer" v-if="Object.keys(commerinfo).length!==0">
      <div class="commerinfo">
          <div class="commerinfo-left">用户评价</div>
          <div class="commerinfo-right">更多</div>
      </div>
      <div class="commer-bor"></div>
      <div class="commer-name">
          <p>
              <span><img  class="imgs" :src="'https:'+commerinfo.user.avatar" alt=""></span>
              <span>{{commerinfo.user.uname}}</span>
          </p>
          <p>
              {{commerinfo.content}}
            </p>
          <p>
              <span>2019-10-21</span>
              <span>{{commerinfo.style}}</span>
          </p>
          <div class="commer-images">
              <p>
                  <img v-for="(item,index) in commerinfo.images" :src="'https:'+item" alt="" :key="index" >
              </p>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
   name:"detrilcommer",
   data(){
      return{
          value:this.commerinfo.created
      }
   },
   props:{
       commerinfo:{
           type: Object,
           dufault(){
               return {}
           }
       }
   },
   methods: {
      
   },
}
</script>

<style>
.commerinfo{
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    
}
.commerinfo .commerinfo-left{
    float: left;
    margin-left: 3vw;
}
.commerinfo .commerinfo-right{
    float: right;
    margin-right: 3vw;
   
}
.commer-bor{
    width: 90vw;
    height: 2px;
    background: rgb(228, 226, 226);
    margin-left: 5%;
}
.commer-name p .imgs{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 3vw;
}
.commer-name p span:nth-child(2){
    margin-left: 4vw;
}
.commer-name p:nth-child(2){
    font-size: 13px;
    margin-left: 3vw;
}
.commer-name p:nth-child(3){
    font-size: 13px;
    margin-left: 3vw;
}
.commer-images img{
    width: 100px;
    height: 100px;
}
</style>