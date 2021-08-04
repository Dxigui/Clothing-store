<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in titles"
         :key="index"
         :class="{controlactive: currentIndex == index}"
         @click="controlClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    controlClick (index) {
      // 根据点击动态修改 currentIndex
      this.currentIndex = index

      // 同时将 index 参数传到父组件
      this.$emit('controlClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  height: 2rem;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.controlactive {
  color: var(--color-high-text);
}

.tab-control-item>span {
  display: inline-block;
  width: 2.5rem;
  line-height: 2rem;
  border-bottom: 2px solid transparent;
}
.controlactive span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
