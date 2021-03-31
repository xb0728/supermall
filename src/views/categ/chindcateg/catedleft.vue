<template>
  <div class="cated-left">
     <div class="left-item" :class="{action:index===cunnted}" @click="addsolt(index)" v-for="(item,index) in catedleft" :key='index'>{{item.title}}</div>
  </div>
</template>

<script>
export default {
    name:"catedleft",
    props:{
        catedleft:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            cunnted :0
        }
    },
    methods: {
         addsolt(index){
        this.cunnted=index
        this.$emit("addacted",index)
         }
    }
}
</script>

<style>
.cated-left{
    flex:0.5;
    display: flex;
    flex-direction:column;
    /* justify-content: center; */
   /* align-items: center; */
    /* margin-top: 44px; */
    /* height: calc(100% - 44px - 50px);
    overflow: hidden; */
}
.cated-left .left-item{
   width: 70px;
   height: 50px;
   text-align: center;
   background: rgb(241, 240, 240);
   line-height: 50px;
   
  
}
.cated-left .action{
    background: rgb(253, 253, 253);
    color: pink;
    border-left: 3px solid red;
    box-sizing: border-box;
}
</style>