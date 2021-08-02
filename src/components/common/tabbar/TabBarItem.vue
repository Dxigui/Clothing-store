<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive () {
      // $route.path 拿到当前地址
      console.log('path', this.$route.path)
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: 'red' } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>

</style>
