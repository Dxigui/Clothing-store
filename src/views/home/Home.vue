<template>
  <div class="home">
    <!-- 顶部组件 header -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banner" ref="csSwiper"></home-swiper>
    <!--  -->
    <feature-view :features="feature"></feature-view>
    <!-- 本周流行 -->
    <week-popular :popularItems="popular"></week-popular>
    <!-- 分类 -->
    <tab-control class="tab-c" :titles="title" @controlClick="tabControlClick" ref="tabControl"></tab-control>
    <!-- 商品展示 -->
    <goods-view :goodsList="showGoods"></goods-view>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'
import TabControl from 'content/tabControl/TabControl.vue'
import GoodsView from 'content/goodsView/GoodsView.vue'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import FeatureView from './childcomps/FeatureView.vue'
import WeekPopular from './childcomps/WeekPopular.vue'
// import GoodsView from './childcomps/GoodsView.vue'

import { getBannerData, getFeatureData, getPopularData, getGoodsData } from 'network/index.js'
import { NEW, POP, SELL } from 'config/consts.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    FeatureView,
    WeekPopular,
    TabControl,
    GoodsView
  },
  data () {
    return {
      banner: [],
      feature: [],
      popular: [],
      title: ['流行', '新款', '精选'],
      goods: {
        // eslint-disable-next-line quote-props
        'pop': { page: 1, list: [] },
        // eslint-disable-next-line quote-props
        'new': { page: 1, list: [] },
        // eslint-disable-next-line quote-props
        'sell': { page: 1, list: [] }
      },
      currentType: POP
    }
  },
  created () {
    this.getHomeBannerData()
    this.getHomeFeatureData()
    this.getHomePopularData()

    this.getHomeGoodsData(POP)
    this.getHomeGoodsData(NEW)
    this.getHomeGoodsData(SELL)
  },
  activated () {
    this.$refs.csSwiper.startTimer()
  },
  deactivated () {
    this.$refs.csSwiper.stopTimer()
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    tabControlClick (index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    },
    getHomeBannerData () {
      getBannerData().then(res => {
        this.banner = res.data
      })
    },
    getHomeFeatureData () {
      getFeatureData().then(res => {
        this.feature = res.data
      })
    },
    getHomePopularData () {
      getPopularData().then(res => {
        this.popular = res.data
      })
    },
    getHomeGoodsData (type) {
      getGoodsData(type, this.goods[type].page).then(res => {
        const gd = res.data[this.goods[type].page]
        this.goods[type].list.push(...gd)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
.tab-c {
  position: sticky;
  top: 3rem;
  z-index: 9;
}
</style>
