<template>
    <div class="goods-item" @click="itemclick">
       <img v-lazy="goodsitem.show.img" alt="" @load="imglode">
     <div class="goods-price">
        <p>{{goodsitem.title}}</p>
       <span class="price">{{goodsitem.price}}</span>
      <div class="icon"></div>
       <span class="collect">{{goodsitem.cfav}}</span>
     </div>
      
    </div>
</template>
<script>
export default {
    name:"homelistitem",
    props:{
        goodsitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imglode(){
            this.$bus.$emit('itemimglode')
        },
        itemclick(){
          this.$router.push('/detril/'+this.goodsitem.iid)
        }
    }
}
</script>
<style scoped>
.goods-item{
    width: 47%;
    /* margin: 0 5px; */
}
.goods-item p{
    padding: 0;
    margin: 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 14px;
   
}
.goods-item img{
    width: 100%;
    border-radius: 5px;
    height: 225px;
}
.goods-item .goods-price .price{
    color:red;
    display: inline-block;
    margin-right: 10px;
}
.goods-item .goods-price{
    text-align: center;
}
.goods-item .goods-price .icon{
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    display: inline-block;
   
}

</style>