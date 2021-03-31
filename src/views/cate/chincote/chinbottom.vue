<template>
  <div class="chinbottom">
      <div class="center-img bottom-img" v-for="item in botshows" :key ="item.index">
         <p><img :src="iconURL(item)" alt=""><span>{{item.info}}</span></p>
      </div>
  </div>
</template>

<script>
export default {
    name:"chinbottom",
    props:{
       botshows:{
           type:Array,
           default(){
               return []
           }
       }
   },
    methods: {
		iconURL(item) {
		return require('../../../assets/img/profile/' + item.icon)
      }
    }
}
</script>

<style>
.chinbottom{
    margin-top: 15px;
    background: rgb(255, 255, 255);
}
.chinbottom .bottom-img:nth-child(2){
      border-bottom:none;
}
</style>