<template>
  <div class="bottom-bar">
    <div class="bottom-item bar-left">
       <div>
           <i class="icon icon-o"></i>
           <span>客服</span>
       </div>
        <div>
           <i class="icon icon-t"></i>
           <span>店铺</span>
       </div>
        <div>
           <i class="icon icon-s"></i>
           <span>收藏</span>
       </div>
    </div>
    <div class="bottom-item bar-right">
      <div class="cart" @click="addclick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
   name:'datrilbottom',
   methods: {
     addclick(){
      this.$emit("addcate")
     }
   }
}
</script>

<style>
.bottom-bar{
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    background: rgb(255, 255, 255);
    bottom: 0;
    font-size: 13px;
    
}
.bottom-item{
    display: flex;
    flex:1;
}
.bar-left div{
    /* display: flex; */
    /* display: inline-block; */
    flex: 1;
    margin-left: 10px;
    height: 50px;
    font-size: 13px;
    margin-top: 5px;
}
.bottom-item div .icon{
    display: block;
    width: 25px;
    height: 25px;
    background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bottom-item>div {
    flex: 1;
  }

  .bottom-bar .bottom-item .icon-0 {
    background-position:0 -60px;
  }

  .bottom-bar .bottom-item .icon-t{
    background-position:0 -112px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
     text-align: center;
  }

  .bar-right .buy {
    background-color: #f69;
    text-align: center;
  }

  .sport-ball {
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>