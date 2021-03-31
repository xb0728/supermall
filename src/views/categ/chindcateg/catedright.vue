<template>
  <div class="right-item">
   <div  class="item-leng" v-for="item in catedright.list" :key="item.index">
       <a :href="item.link">
           <img :src="item.image" alt="">
       </a>
       <p>{{item.title}}</p>
   </div>
  </div>
</template>

<script>
export default {
   name:'catedright',
   props:{
       catedright:{
           type:Object,
           default(){
               return {}
           }
       }
   }
}
</script>

<style>
.right-item{
font-size: 13px;
/* margin-top: 44px; */
display: flex;
flex-wrap:wrap;
}
.right-item .item-leng{
    width: 100px;
    margin: 10px;
    text-align: center;
    
    
}
.right-item .item-leng img{
    width: 60px;
    height: 60px;
}
</style>