<template>
    <div>
        <newbar>
            <div slot="left" class="left" @click="backclick">
                <img src="../../../assets/img/common/back.svg" alt="">
                </div>
            <div slot="center" class="center">
               <div class="center-item" 
               v-for="(item,index) in titles" 
               :class="{active:index===comteindex}" 
               :key="item.title" @click="itemclick(index)">{{item}}</div> 
            </div>
          </newbar>
    </div>
</template>
<script>
import Newbar from '../../../components/centent/newbar/NewBar'
//头部选项卡
export default {
    name:'detrilcomes',
    components: {
        Newbar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            comteindex:0
        }
    },
    methods: {
        itemclick(index){
          this.comteindex=index;
          this.$emit('itemclick',index)

        },
        backclick(){
            // 跳转上一个页面
            // this.$router.back()
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.center{
    display: flex;
    font-size: 13px;
}
.center-item{
   flex: 1;
}
.active{
    color: var(--color-tint);
}
.left{
    margin-top: 6px;
}
</style>