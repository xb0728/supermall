<template>
  <div id="app">
  <keep-alive exclude="detril"><router-view></router-view></keep-alive>
   <miss></miss>
  </div>
</template>

<script>
import miss from "../src/components/common/miss/miss.vue"

export default {
  name: 'App',
  components: {
   miss
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>
