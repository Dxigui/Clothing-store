<template>
  <div class="week-popular">
    <h2>本周流行</h2>
    <section>
      <div class="popular-item"
         v-for="(item, index) in popularItems"
         :key="item.id">
      <img :class="`popular-item-img img${index}`" :src="item.image" :alt="item.title">
      <div class="popular-item-title">{{ item.title }}</div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WeekPopular',
  props: {
    popularItems: {
      type: Array
    }
  }
}
</script>

<style scoped>
.week-popular {
  margin-top: 2rem;
}
.week-popular>h2 {
  padding-bottom: 1rem;
  text-align: center;
  font-weight: 500;
}
.week-popular>section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.popular-item {
  flex: 25%;
  padding-bottom: 1rem;
  text-align: center;
}
.popular-item-img {
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
}
.popular-item-title {
  font-size: .8rem;
}
</style>
