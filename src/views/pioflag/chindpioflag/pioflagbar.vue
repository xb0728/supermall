<template>
  <div class="pio-bar">
     <div class="check-con">
         <pioflagbnt :ischink="isselect"  @click.native="itemcls"></pioflagbnt>
         <span>全选</span>
     </div>
     <div class="chenk-show">
        合计:  ￥{{pricenum}}
     </div>
     <div class="chenk-num">
         去结算 : {{pri}}
     </div>
  </div>
</template>

<script>
import pioflagbnt from './pioflagbnt'
export default {
     name:"pioflagbar",
     components: {
         pioflagbnt
     },
     data(){
         return {
           arrpri: this.$store.state.cartlist, 
           
         }
     },
     methods: {
         itemcls(){   
             if(this.isselect){//全部选中
                 this.arrpri.forEach(item=>item.chink = false)
             }else{//全部不选中
                 this.arrpri.forEach(item=>item.chink = true)
             }
         }
     },
     computed: {
         pricenum(){
             let num =0
             for(let i =0 ;i<this.arrpri.length;i++){
                 console.log(this.arrpri[i].oldPrice)  
                 if(this.arrpri[i].chink && this.arrpri[i].oldPrice){
                   let str = parseFloat(this.arrpri[i].oldPrice.replace("¥",""))*this.arrpri[i].count
                   console.log(str)
                   num=num +str                
                 }     
             }
            return num
         },
         pri(){
             let str =[]
              for(let i =0 ;i<this.arrpri.length;i++){
                  if(this.arrpri[i].chink){
                     str.push(this.arrpri[i])
                  }
              }
              return str.length
         },
         isselect(){
             //判断数组里面对象的chink是不是全部是true，
             if(this.arrpri.length===0) return false
            return !this.arrpri.find(item=>!item.chink)
         }
     }
}
</script>

<style>
.pio-bar{
    width: 100%;
    height: 45px;
    background: rgb(228, 225, 225);
    position: fixed;
    bottom: 48px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

}
.check-con{
    display: flex;
    width: 72px;
    height: 45px;
    align-items: center;
}
.check-con span{
    margin-left: 6px;
}
.chenk-show{
    margin-left: 10px;
    flex: 1;
}
.chenk-num{
    background: red;
    width: 100px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: rgb(247, 245, 245);
}
.itemss{
     border-color:red;
    background: red;
}
</style>