<template>
  <div class="goods-item">
    <div class="goods-item-img">
      <img :src="goodsItem.show.img" :alt="goodsItem.title">
    </div>
    <div class="goods-item-title">
      <span>{{ goodsItem.title }}</span>
    </div>
    <div class="goods-item-price-marks">
      <span class="goods-item-price">{{ goodsItem.price }}</span>
      <span class="goods-marks-icon"></span>
      <span class="goods-item-marks">{{ goodsItem.itemMarks }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsViewItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  min-width: 0;
  flex: 48%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: .5rem;
  border-radius: .15rem;
}
.goods-item-img>img{
  width: 14rem;
  height: 17rem;
}
.goods-item-title {
  width: 12rem;
  text-align: center;
  padding: .2rem 0;
}
.goods-item-title span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item-price {
  color: var(--color-high-text);
}
.goods-marks-icon::after {
  content: "\e933";
  font-family: "icomoon";
  vertical-align: bottom;
  padding: 0 .15rem;
}
</style>
