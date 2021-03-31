<template>
    <div class="tab-conlist">
       <div  class="tab-conlist-item" v-for='(item,index) in titles' :key='index' 
       :class='{active: index===countellindex}' @click="indexcli(index)">
           <span>{{item}}</span>
       </div>
    </div>
</template>
<script>
export default {
    name:"tabconlist",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            countellindex:0
        }
    },
    methods: {
        indexcli(index){
      this.countellindex=index
      this.$emit('tabclick',index)
        }
    }
}
</script>
<style scoped>
.tab-conlist{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
}
.tab-conlist-item{
    flex: 1;
    
}
.active{
    color: var(--color-high-text);
}
.active span{
    padding: 5px;
    border-bottom: 3px solid red;
}
</style>