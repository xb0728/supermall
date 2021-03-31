<template>
  <div class="chinmoner">
      <div class="moner-left">
          <p>0.00
              <span>元</span>
              </p>
          <p>我的余额</p>
          </div>
      <div class="moner-center">
           <p>0
              <span>个</span>
              </p>
          <p>我的优惠</p>
      </div>
      <div class="moner-right">
           <p>0
              <span>分</span>
              </p>
          <p>我的积分</p>
      </div>
  </div>
</template>

<script>
export default {
   name:"chinmoner"
}
</script>

<style>
.chinmoner{
    display: flex;
    background: rgb(255, 255, 255);
}
.chinmoner div {
    flex:1;
    text-align: center;
    border-right: 1px solid rgb(214, 214, 214);
    box-sizing: border-box;
}
.chinmoner div p:nth-child(1){
    color: red;
    font-size: 15px;
    font-weight: 700;
} 
.chinmoner div p:nth-child(1) span{
    color: var(--color-text);
    font-size: 13px;
    font-weight: 500;
}
</style>