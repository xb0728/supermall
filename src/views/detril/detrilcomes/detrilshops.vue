<template>
  <div class="shops">
    <div class="shops-logo">
        <img :src="'https:'+shops.logo" alt="">
        <div class="shops-name"><span>{{shops.name}}</span></div>
    </div>
    <div class="shops-vib">
        <div class="vib-left">
            <div class="vib-top">
                <span>{{shops.fans}}</span>
                <div>总销量</div>
            </div>
            <div class="vib-top">
                <span>{{shops.goodsCount}}</span>
                <div>全部宝贝</div>
            </div>
        </div>
        <div class="vib-right">
           <p v-for="item in shops.score" :key="item.title">
               <span class="vib-noe">{{item.name}}</span>
               <span class="vib-two">{{item.score}}</span>
               <span class="vib-three" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
           </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
     name:"detrilshops",
     props:{
        shops:{
           type:Object,
           default(){
            return {}
        }
        }
     }
}
</script>

<style>
.shops{
    margin-top: 20px;
    background: rgb(255, 255, 255);
    
}
.shops-logo{
    height: 40px;
    margin-left: 3px;
}
.shops-logo img{
   width: 40px;
   height: 40px;
   border-radius: 50%;
}
.shops-logo .shops-name{
    display: inline-block;
    line-height: 40px;
    vertical-align: bottom;
    margin-left: 2vw;
}
.shops-vib{
    margin-top: 10px;
    display: flex;
}
.vib-left{
    display: flex;
    flex:1;
    text-align: center;
    font-size: 13px;
    font-weight: 1000;
    justify-content: center;
    align-items: center;
    line-height: 5vh
}
.vib-left .vib-top{
    margin: 10px 8px;
}
.vib-right{
    flex:1;
    font-size: 13px;
}
.vib-right p .vib-noe{
    display: inline-block;
    width: 70px;
    margin-left: 10px;
}
.vib-right p .vib-two{
    display: inline-block;
    width: 40px;
}
.vib-right p .vib-three{
    display: inline-block;
    background:  rgb(29, 56, 2);
    color: rgb(255, 255, 255);
}
.vib-right p .better-more{
    background: red;
}
</style>