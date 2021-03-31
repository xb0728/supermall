<template>
    <div class="tosat" v-show ="isshow">
        <div>{{maess}}</div>
    </div>
</template>

<script>
export default {
    name:"tosat",
    data(){
        return{
            isshow:false,
            maess:""
        }
    },
    methods: {
        show(maess,tiem){
           this.isshow = true
           this.maess =maess
           setTimeout(()=>{
             this.isshow =false
             this.maess = ""
           },tiem)
        }
    }
}
</script>

<style>
.tosat{
    position: fixed;
    left: 50%;
    top: 50%;
    background: rgba(0,0,0,0.7);
    transform: translate(-50%,-50%);
    z-index: 100000;
    padding: 7px 10px;
    color: rgb(255, 255, 255);
}
</style>