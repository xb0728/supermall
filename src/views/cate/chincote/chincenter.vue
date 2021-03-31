<template>
  <div class="chincenter">
      <div class="center-img" v-for="item in censhows" :key ="item.index">
         <p><img :src="iconURL(item)" alt=""><span>{{item.info}}</span></p>
      </div>
  </div>
</template>

<script>
export default {
   name:"chincenter",
   props:{
       censhows:{
           type:Array,
           default(){
               return []
           }
       }
   },
    methods: {
		iconURL(item) {
		return require('../../../assets/img/profile/' + item.icon)
      }
    }
}
</script>

<style>
.center-img{
    color: var(--color-text);
}
.chincenter{
    margin-top: 15px;
    background: rgb(255, 255, 255);
}
.center-img{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid rgb(209, 206, 206);
}
.center-img:nth-child(3){
    border-bottom:none;
}
.center-img img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin:0 10px;
}
.center-img p{
    padding: 0;
    margin: 0;
}

</style>
