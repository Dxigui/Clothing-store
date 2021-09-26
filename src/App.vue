<template>
  <div id="app">
    <section class="wrap">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <!-- 底部组件 -->
    <main-tab-bar />
    </section>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabBar/MainTabBar.vue'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
.wrap {
  overflow-x: hidden;
  position: relative;
}
</style>
