import { goodsItemData } from './goodsitem'

const CONFIG = {
  page: 'page'
}

export const goodsListData = function (options) {
  const page = parseInt(options.url[options.url.indexOf(CONFIG.page) + 5])
  const goodsData = {}
  goodsData[page] = goodsItemData()
  return goodsData
}
