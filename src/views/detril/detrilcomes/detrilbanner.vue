<template>
    <div class="detril-banner">
        <swiper class="item-det">
            <swiperItem v-for="item in topimages" :key="item.index">
                <img :src="'http:'+item" alt="">
            </swiperItem>
        </swiper>
    </div>
</template>
<script>
// 轮播图文件
import {Swiper, SwiperItem} from '../../../components/centent/swiper/index'
export default {
    name:'detrilbanner',
    components: {
        Swiper,
        SwiperItem
    },
    props:{
       topimages:{
          type:Array,
          default(){
            return []
        }
       }
    }
}
</script>
<style scoped>
.item-det{
    height: 300px;
    overflow: hidden;
}
</style>