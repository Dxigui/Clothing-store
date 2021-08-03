<template>
  <div class="home">
    <!-- 顶部组件 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
