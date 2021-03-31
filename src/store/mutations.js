export default {
     // 为了让 mutations里面的事件变得单一，所以进行任务分发
     addcounter(state,paylode){
        paylode.count++
      },
      addtocart(state,paylode){
        paylode.chink =true
       state.cartlist.push(paylode)
      }
}