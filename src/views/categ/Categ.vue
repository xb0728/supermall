<template>
    <div class="catag">
        <navbar class="bars"><div slot="center">分类</div></navbar>
        <div class="catag-flex">
          <scroll class="catag-sta" :pulluplode="true">
          <catedleft :catedleft ="categories" @addacted="addacted"></catedleft>
          </scroll>
          <scroll class="catag-scroll" :pulluplode="true">
            <catedright :catedright="categoryData">
              </catedright></scroll>
        </div>
    </div>
</template>
<script>
import navbar from '../../components/centent/newbar/NewBar'
import catedleft from './chindcateg/catedleft'
import catedright from './chindcateg/catedright'

import scroll from "../../components/centent/scroll/scroll"

import {getCategory,getSubcategory} from '../../network/categ'
export default {
  name: 'Categ',
  components: {
    navbar,
    catedleft,
    catedright,
    scroll
  },
  data(){
    return {
     categories: [],
     currentIndex: -1,
      categoryData: {
        },
    }
  },
  created(){
     this.getCategorys()
  
   },
  methods: {
    getCategorys(){
        getCategory().then(res=>{
          // console.log(res)
          this.categories =res.data.data.category.list
           this.getSubcategorys(0)
        })
       
    },
    getSubcategorys(index){
      this.currentIndex=index
      console.log(this.categories)
      console.log(this.categories[this.currentIndex].maitKey)
      let maitkey= this.categories[index].maitKey
      getSubcategory(maitkey).then(res=>{
        this.categoryData=res.data.data
        
      })
    },
    addacted(index){
      this.getSubcategorys(index) 
      console.log("aaaaa")
    }
  },

}
</script>

<style>
.catag-flex{
  display: flex;
  height: 100vh;
}
.catag-sta{
  height: calc(100%  - 94px);
  /* margin-top: 44px; */
  /* overflow: hidden;
  z-index: 1000000; */
}
.catag-scroll{
 /* height: calc(100% - 44px - 50px);
 overflow: hidden; */
 /* margin-top: 44px; */
 position: relative;
 left: 0;
 bottom: 49px;
 top: 0;
 right: 0;
 height: calc(100%  - 104px);
 overflow: hidden;

}
.bars{
  position: relative;
  display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
     background: var(--color-tint);
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    z-index: 1000;
    color: rgb(248, 247, 247);
}
</style>
