<template>
  <div class="goods-view">
    <goods-view-item v-for="(item, index) in goodsList" :key="index" :goodsItem="item"></goods-view-item>
  </div>
</template>

<script>
import GoodsViewItem from './GoodsViewItem.vue'

export default {
  name: 'GoodsView',
  components: {
    GoodsViewItem
  },
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods-view {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
</style>
