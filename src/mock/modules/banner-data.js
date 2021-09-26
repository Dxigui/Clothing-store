import Mock from 'mockjs'

// eslint-disable-next-line no-unused-vars
import { getStore, setStore } from '@/config/localstorage'

const Random = Mock.Random
const COUNTS = 4
const HEIGHT = 390
const WIDTH = 750
const TITLE = ['换新女装节', '入秋穿搭指南', '秋季护肤大作战', '流行抢先一步']
const LINK = ['/home/1', '/home/2', '/home/3', '/home/4']

export const bannerData = function () {
  const bannerDataList = []
  for (let i = 0; i < COUNTS; i++) {
    const data = {}
    data.id = Random.id()
    data.height = HEIGHT
    data.width = WIDTH
    data.image = Random.image(`${WIDTH}x${HEIGHT}`, Random.color(), '#FFF', 'png', TITLE[i])
    data.link = LINK[i]
    data.title = TITLE[i]
    bannerDataList.push(data)
  }
  return bannerDataList
}
