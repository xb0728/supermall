<template>
  <div class="piolist">
      <scroll :pulluplode="true" class="piolist-scr" ref="scroll" :probetype='3'>
          <!-- <div v-for="item in $store.state.cartlist" :key="item.index">{{item}}</div> -->
          <pioflagitem v-for="(item,index) in $store.state.cartlist" :key="index" :prodult="item"></pioflagitem>
      </scroll>
  </div>
</template>

<script>
import scroll from '../../../components/centent/scroll/scroll'
import pioflagitem from './pioflagitem'
export default {
   name:'pioflaglist',
   components: {
     scroll,  
     pioflagitem,
   },
   activated () {
    //    进入组件将滚动条进行刷新
       console.log('---')
       this.$refs.scroll.refresh()
   }
}
</script>

<style>
.piolist{
    height: calc(100vh - 44px - 49px - 45px);
    /* overflow: hidden; */
}
.piolist-scr{
    height: 100%;
    overflow: hidden;
}
</style>