<template>
  <tabBer>
    <tabBeritem path="/home" activecolor="#ff8198">
      <img class="item-icon" slot="item-icon" src="../../../assets/img/tabbar/房子 (1).svg" alt="">
      <img class="item-iconict" slot="item-iconict" src="../../../assets/img/tabbar/房子.svg" alt="">
      <div slot="item-text">首页</div>
    </tabBeritem>
    <tabBeritem path="/categ" activecolor="#ff8198">
       <img class="item-icon" slot="item-icon" src="../../../assets/img/tabbar/042方块 (1).svg" alt="">
        <img class="item-iconict" slot="item-iconict" src="../../../assets/img/tabbar/042方块.svg" alt="">
      <div slot="item-text">分类</div>
    </tabBeritem>
    <tabBeritem path="/pioflag" activecolor="#ff8198">
       <img class="item-icon" slot="item-icon" src="../../../assets/img/tabbar/购物车空 (1).svg" alt="">
       <img class="item-iconict" slot="item-iconict" src="../../../assets/img/tabbar/购物车空.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabBeritem>
    <tabBeritem path="/cote" activecolor="#ff8198">
       <img class="item-icon" slot="item-icon" src="../../../assets/img/tabbar/我的 (1).svg" alt="">
       <img class="item-iconict" slot="item-iconict" src="../../../assets/img/tabbar/我的.svg" alt="">
      <div slot="item-text">我的</div>
    </tabBeritem>
  </tabBer>
  <!-- <router-view></router-view> -->
</template>
<script>
import tabBer from "../../centent/tabber/tabBer.vue"
import tabBeritem from "../../centent/tabber/tabBeritem.vue"
export default {
  name: 'miss',
  components: {
    tabBer,
    tabBeritem
  }
}
</script>

<style>
.item-icon,
.item-iconict{
  width: 20px;
  height: 20px;
}
</style>
