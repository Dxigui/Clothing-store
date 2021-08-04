import Mock from 'mockjs'

const Random = Mock.Random
const COUNTS = 4
const TITLE = ['十点抢卷', '好物特卖', '内购福利', '初秋上新']
const LINK = ['/feature/1', '/feature/2', '/feature/3', '/feature/4']

export const featureData = function () {
  const featureDataList = []
  for (let i = 0; i < COUNTS; i++) {
    const data = {}
    data.id = Random.id()
    data.link = LINK[i]
    data.title = TITLE[i]
    data.image = Random.image('225x225', Random.color(), '#FFF', 'png', TITLE[i])
    featureDataList.push(data)
  }
  return featureDataList
}
