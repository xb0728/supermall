<template>
  <div class="pio-btn" :class="{chink:ischink}">
      <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:"pioflagbnt",
  props:{
      ischink:{
          type:Boolean,
          default:false,
      }
  }
}
</script>

<style>
.pio-btn{
 flex:1;
 width: 20px;
  height: 20px;
  margin-left: 13px;
  border-radius: 50%;
  border: 2px solid rgb(214, 211, 211);
}
.pio-btn img{
  width: 20px;
  height: 20px;
}
.chink{
    border-color:red;
    background: red;
}
</style>