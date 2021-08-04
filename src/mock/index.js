import Mock from 'mockjs'

import { bannerData } from './modules/banner-data.js'
import { featureData } from './modules/feature-data.js'
import { popularData } from './modules/popular-data.js'
import { goodsListData } from './modules/goodslist-data.js'
import { URL } from 'network/index.js'

Mock.mock('/home/banner', 'get', bannerData)
Mock.mock('/home/feature', 'get', featureData)
Mock.mock('/home/popular', 'get', popularData)
// Mock.mock(`/home/data?type=${PARAMS.type}&page=${PARAMS.page}`, 'get', goodsListData(PARAMS.page))
Mock.mock(RegExp(URL.homeData + '.*'), 'get', options => {
  return goodsListData(options)
})
// Mock.mock('/home/data?type=new&page=1', 'get', goodsListData)
// Mock.mock('/home/data?type=sell&page=1', 'get', goodsListData)
