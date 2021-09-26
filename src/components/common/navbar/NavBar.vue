<template>
  <!-- 顶部组件插槽 -->
  <div class="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background-color: var(--color-tint);
}
.nav-left {
  width: 3rem;
}
.nav-center {
  flex: 1;
  text-align: center;
  color: #FFF;
}
.nav-center>div {
  letter-spacing: .15rem;
  font-size: 1.15rem;
}
.nav-right {
  width: 3rem;
}
</style>
