<template>
  <!-- 轮播图 -->
  <div class="swiper-banner">
    <swiper ref="swiperBar" class="swiper">
      <swiper-item v-for="(item, index) in banners" :key="item.id">
        <a :href="item.link" :class="`banner-image img${index}`">
          <img :src="item.image" :alt="item.title">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from 'common/swiper/Swiper.vue'
import SwiperItem from 'common/swiper/SwiperItem.vue'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  mounted () {
    // this.getOffSet()
    // this.$nextTick(() => {
    //   this.startTimer()
    //   this.stopTimer()
    // })
  },
  // updated () {
  //   this.$nextTick(() => {
  //     this.startTimer()
  //   })
  // },
  methods: {
    // getOffSet () {
    //   const left = this.$refs.swiperBanner.offsetLeft
    //   console.log(left)
    // }
    stopTimer () {
      this.$refs.swiperBar.stopTimer()
    },
    startTimer () {
      if (this.$refs.swiperBar) {
        console.log('start')
        this.$refs.swiperBar.startTimer()
      }
    }
  }
}
</script>

<style scoped>
/* .swiper-banner {
  overflow: hidden;
  padding-top: 3rem;
} */
.swiper {
  overflow: hidden;
  padding-top: 3rem;
}
.banner-image img{
  width: 100%;
  height: 15rem;
  vertical-align: middle;
}
</style>
