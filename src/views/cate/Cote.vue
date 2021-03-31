<template>
    <div class="cate">
     <newbar class="tab-cen"><div slot="center">个人中心</div></newbar>
     <chincota></chincota>
     <chinmoner></chinmoner>
     <chincenter :censhows="orderList"></chincenter>
     <chinbottom :botshows="serviceList"></chinbottom>
    </div>
</template>
<script>
import newbar from '../../components/centent/newbar/NewBar'
import chincota from './chincote/chincote'
import chinmoner from './chincote/chinmoner'
import chincenter from './chincote/chincenter'
import chinbottom from './chincote/chinbottom'
export default {
  name: 'Cote',
  components: {
    newbar,
    chincota,
    chinmoner,
    chincenter,
    chinbottom
  },
   data() {
    	return {
		    orderList: [
			    {icon: 'message.svg', info: '我的消息'},
			    {icon: 'pointer.svg', info: '积分商城'},
			    {icon: 'vip.svg', info: '会员卡'},
		    ],
		    serviceList: [
			    {icon: 'cart.svg', info: '我的购物车'},
			    {icon: 'shopping.svg', info: '下载购物APP'},
		    ]
      }
   }
}
</script>

<style>
.cate{
  background: rgb(235, 234, 234);
}
.tab-cen{
 background: var(--color-tint);
 color: rgb(255, 255, 255);
}
</style>
