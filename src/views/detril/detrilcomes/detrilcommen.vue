<template>
  <div class="goodlist" v-if="Object.keys(getcommen).length!==0">
     <div class="goods-item" v-for="(item,index) in getcommen" :key="index">
       <img :src="item.image" alt="">
     <div class="goods-price">
        <p>{{item.title}}</p>
       <span class="price">{{item.price}}</span>
      <div class="icon"></div>
       <span class="collect">{{item.cfav}}</span>
     </div>
    </div>
</div>
</template>

<script>
export default {
     name:"detrilcommen",
     props:{
         getcommen:{
             type:Array,
             default(){
                 return []
             }
         }
     }
}
</script>

<style>
.goods-item{
    width: 47%;
    /* margin: 0 5px; */
}
.goods-item p{
    padding: 0;
    margin: 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 14px;
   
}
.goods-item img{
    width: 100%;
    border-radius: 5px;
    height: 225px;
}
.goods-item .goods-price .price{
    color:red;
    display: inline-block;
    margin-right: 10px;
}
.goods-item .goods-price{
    text-align: center;
}
.goods-item .goods-price .icon{
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    display: inline-block;
   
}
.goodlist{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
</style>
