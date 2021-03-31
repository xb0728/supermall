<template>
  <div class="items">
      <pioflagbnt :ischink="prodult.chink" @click.native="chinkclick"></pioflagbnt>
      <div class="items-img">
          <img :src="prodult.topimages" alt="">
      </div>
      <div class="items-text">
          <div><p class="item-one">{{prodult.title}}</p></div>
          <div><p class="item-two">{{prodult.desc}}</p></div>
          <!-- <div class=item-left><span>{{prodult.oldPrice}}</span><span>{{prodult.count}}</span></div> -->
          <p class="math">{{prodult.oldPrice}}<span class="data">{{"x"+prodult.count}}</span></p>
      </div>
  </div>
</template>
<script>
import pioflagbnt from './pioflagbnt'
export default {
   name:'pioflagitem',
   components: {
       pioflagbnt
   },
   props:{
       prodult:{
           type:Object,
           default(){
               return {}
           }
       }
   },
   methods: {
       chinkclick(){
           this.prodult.chink=!this.prodult.chink
       }
   }
}
</script>

<style>
.items{
 display: flex;
 border-bottom: 1px solid rgb(212, 208, 208);
 justify-content: center;
 align-items: center;

}
.items-img{
    padding: 5px;
}
.items-img img{
    width: 70px;
    height: 100px;
    border-radius: 5%;
}
.items-text div{
    width: 73vw;
    text-align: center;
}
.items-text p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
   
}
.items-text .item-one{
    display: inline-block;
    width: 40vh;
    font-size: 15px;
}
.items-text .item-two{
    display: inline-block;
    width: 40vh;
    font-size: 13px;
    margin: 0;
    padding: 0;
}
.data{
    float: right;
    margin-right: 10px;
    color: #000;
}
.math{
    color: tomato;
}
</style>