<template>
    <div>
       <navbar class="nav-bar">
         <div slot="center">购物车({{$store.state.cartlist.length}})</div>
       </navbar>
       <pioflaglist></pioflaglist>
       <pioflagbar></pioflagbar>
    </div>
</template>
<script>
import navbar from '../../components/centent/newbar/NewBar'
import pioflaglist from './chindpioflag/pioflaglist'
import pioflagbar from './chindpioflag/pioflagbar'
export default {
  name: 'Pioflag',
  components: {
    navbar,
    pioflaglist,
    pioflagbar
  }
}
</script>

<style>
.nav-bar{
  background: var(--color-tint);
  color: white;
  /* font-weight: 700; */
}
</style>
