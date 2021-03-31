<template>
 <div class="goods">
     <div class="good-item">
         <span>{{goods.title}}</span>
     </div>
     <div class="goods-show">
         <span>{{goods.oldPrice}}</span>
         <span>{{goods.newPrice}}</span>
         <span>{{goods.discount}}</span>
     </div>
     <div class="goods-pot">
         <div class="goods-pritem" v-for="item in goods.columns" :key = 'item.index'>{{item}}</div>
     </div>
      <div class="goods-cart" v-if="goods.services">
          <div class="cars" v-for ="index in goods.services.length-2" :key="index">
              <img class="cars-icon" :src="'https:'+goods.services[0].icon" alt="">
              <p class="cars-name">{{goods.services[index-1].name}}</p>
          </div>
      </div>
 </div>
</template>

<script>
export default {
   name:"detrilgoods",
   props: {
       goods:{
           type:Object,
           default(){
            return {}
        }
       }
   }
}
</script>

<style>
.good-item{
    padding: 5px;
}
.good-item span{
    font-weight: 1000;
}
.goods-show{
  margin-top: 10px;
}
.goods-show :nth-child(1){
    color:red;
    font-weight: 1000;
   margin-left: 10px;
}
.goods-show :nth-child(2){
    text-decoration:line-through;
    margin-left: 10px;
}
.goods-show :nth-child(3){
    padding: 3px 10px;
    margin-left: 10px;
    background: pink;
    border-radius: 7px;
    color: beige;
}
.goods-pot{
    display: flex;
    margin-top: 30px;
}
.goods-pritem{
    flex:1;
    font-size: 13px;
    color: rgb(153 148 148);
    padding-bottom: 7px;
    border-bottom: 1px solid rgb(233 225 225);
    
}
.goods-pritem:nth-child(2){
    text-align: center;
}
.goods-pritem:nth-child(3){
    text-align: right;
}
.goods-cart{
    display: flex;
    justify-content : space-between;
    border-bottom: 1px solid rgb(233 225 225);
    overflow: hidden;
}
.goods-cart .cars{
    display: flex;
    margin: 10px 0;
   
    
}
.goods-cart .cars img{
    width: 20px;
    height: 20px;
    margin-top: 10px;
}
.goods-cart .cars .cars-name{
    font-size: 13px;
    margin-left: 5px;
}
</style>