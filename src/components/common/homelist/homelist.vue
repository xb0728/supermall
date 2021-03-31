<template>
    <div class="homelist">
     <homelistitem v-for='item in goods' :key="item.index" :goodsitem='item'></homelistitem>
    </div>
</template>
<script>
import homelistitem from './homelistitem'
export default {
    name:'homelist',
    components: {
    homelistitem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
.homelist{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

</style>