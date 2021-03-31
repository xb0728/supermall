<template>
    <div class="tab-ver">
      <!-- <div class="tab-ver-item">首页</div>
      <div class="tab-ver-item">分类</div>
      <div class="tab-ver-item">购物车</div>
      <div class="tab-ver-item">我的</div> -->
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'tabBer'
}
</script>

<style>

.tab-ver{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
/* .tab-ver .tab-ver-item{
  flex: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
} */
</style>
