<template>
    <div class="cote-top">
      <div class="cote-left"><img src="../../../assets/img/cart/xx.png" alt=""></div>
      <div class="cote-center">
          <p>登录 / 注册</p>
          <p><img src="../../../assets/img/profile/phone.svg" alt=""> 暂无绑定手机号</p>
      </div>
      <div class="cote-right">
          <img src="../../../assets/img/common/arrow-left.svg" alt="">
        </div>
   </div>
</template>

<script>
export default {
   name:"chincote"
}
</script>

<style>
.cote-top{
    height: 100px;
    display: flex;
    background: var(--color-tint);
    /* align-items: center; */
    color: rgb(255, 255, 255);
}
.cote-left{
    width: 60px;
    height: 60px;
    text-align: center;
   margin: 12px ;
}
.cote-left img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.cote-center{
    flex:1;
}
.cote-center p:nth-child(1){
    font-size: 16px;
}
.cote-center img{
    display: inline-block;
    width: 16px;
    height: 16px;
   vertical-align: middle
}
.cote-center p:nth-child(2){
    font-size: 11px;
}
.cote-right{
   width: 70px;
   /* height: 48px; */
   line-height: 60px;
}
/* .left-icon{
    display: inline-block;
    width: 16px;
    height: 16px;
   background: url("../../../assets/img/cart/手机.png") no-repeat;
   vertical-align: bottom; */
    
/* } */
.cote-right img{
    display: inline-block;
    width: 28px;
    height: 28px;
   vertical-align: bottom;
}
</style>