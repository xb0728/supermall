export default {
    addcart(context,paylode){
      // 通过Promise来判断显示什么提示 (toast)
       return new Promise((resolve,reject)=>{
        let olode =null
        for(let item of context.state.cartlist){
          console.log(item)
          if(item.iid===paylode.iid){
            olode=item
          }
        }
        if(olode){
          // olode.count+=1
          context.commit("addcounter",olode)
          resolve("商品数量+1")
        }else{
          paylode.count=1
          // context.state.cartlist.push(paylode)
          context.commit("addtocart",paylode)
          resolve("添加购物车成功")
        }  
       })
      }
}