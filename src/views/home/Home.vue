<template>
  <div class="home">
    <!-- 顶部组件 header -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner" ref="csSwiper"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'
import HomeSwiper from './childcomps/HomeSwiper.vue'

import { getBannerData } from 'network/index.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  data () {
    return {
      banner: []
    }
  },
  created () {
    this.getHomeBannerData()
  },
  activated () {
    this.$refs.csSwiper.startTimer()
  },
  deactivated () {
    this.$refs.csSwiper.stopTimer()
  },
  methods: {
    getHomeBannerData () {
      getBannerData().then(res => {
        this.banner = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
