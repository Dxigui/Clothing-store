import Mock from 'mockjs'

const Random = Mock.Random
const COUNTS = 30

export const goodsItemData = function () {
  const goodsListItem = []
  for (let i = 0; i < COUNTS; i++) {
    const goodsItem = {}
    goodsItem.id = Random.id()
    goodsItem.cfav = i
    goodsItem.itemMarks = Random.integer(0, 5000)
    goodsItem.orgPrice = `￥${Random.integer(19, 999)}.00`
    goodsItem.price = `￥${Random.integer(19, parseInt(goodsItem.orgPrice.slice(1)))}.00`
    goodsItem.shopId = Random.id()
    goodsItem.title = Random.ctitle(5, 20)
    goodsItem.show = {
      h: 416,
      w: 320,
      img: Random.image('416x320', Random.color(), '#FFF', 'png', goodsItem.title)
    }
    goodsItem.link = `/goods/detail?id=${goodsItem.id}`
    goodsListItem.push(goodsItem)
  }
  return goodsListItem
}
