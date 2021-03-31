<template>
    <div class="recommend">
      <div  class="recom-item" v-for='item in recommend' :key="item.title">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
    </div>
</template>
<script>
export default {
    name:'Homeconese',
    props:{
     recommend:{
         type:Array,
         default(){
             return[]
         }
     }
    }
}
</script>
<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    margin: 5px 0 10px 0;
}
.recom-item{
    flex:1
}
.recom-item img{
    width: 70px;
}
.recom-item a div{
    font-size: 14px;
}
</style>