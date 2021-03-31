<template>
    <div id='Homeswiper'>
          <swiper>
        <swiper-item v-for="(item) in banner" :key="item.title">
        <a :href="item.link"><img :src="item.image" alt="" @load="imagelode"></a>
        </swiper-item>
    </swiper>
    </div>
</template>
<script>
//轮播图组件
import {Swiper, SwiperItem} from '../../../components/centent/swiper/index'
export default {
  name:'Homeswiper',
    props:{
      banner:{
        type:Array,
        default(){
            return []
          }
      }
    },
    data(){
      return {
        islode:false
      }
    },
    components: {
        Swiper, 
        SwiperItem
    },
    methods: {
      imagelode(){
      if(!this.islode){
        this.$emit("swiperimagelode")
        this.islode=true
      }
      }
    }

}
</script>
<style>

</style>
