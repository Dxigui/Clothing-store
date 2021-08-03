<template>
  <!--  -->
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="icon" class="tab-bar-img" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="active-icon" class="tab-bar-img" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="text" class="tab-bar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="icon" class="tab-bar-img" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="active-icon" class="tab-bar-img" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="text" class="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="icon" class="tab-bar-img" src="~assets/images/tabbar/cart.svg" alt="">
        <img slot="active-icon" class="tab-bar-img" src="~assets/images/tabbar/cart_active.svg" alt="">
        <div slot="text" class="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="icon" class="tab-bar-img" src="~assets/images/tabbar/profile.svg" alt="">
        <img slot="active-icon" class="tab-bar-img" src="~assets/images/tabbar/profile_active.svg" alt="">
        <div slot="text" class="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar.vue'
import TabBarItem from 'common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.main-tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
