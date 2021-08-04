<template>
  <div class="feature">
    <div class="feature-item" v-for="(item, index) in features" :key="item.id">
      <img :src="item.image" :alt="item.title" :class="`item-img img${index}`">
      <div class="item-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    features: {
      type: Array
    }
  }
}
</script>

<style scoped>
.feature {
  display: flex;
  margin-top: .5rem;
  justify-content: space-between;
}
.feature-item {
  flex: 1;
  text-align: center;
}
.item-img {
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
}
</style>
