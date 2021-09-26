import Mock from 'mockjs'

const Random = Mock.Random
const COUNTS = 8
const TITLE = ['霸街长袖裙', '时尚懒人套装', '微胖遮肉穿搭', '降温保暖鞋', '颜值爆表套装裙', '小心机v领', '万圣节必备口红', '软萌暖心包包']
const LINK = ['/popular/1', '/popular/2', '/popular/3', '/popular/4', '/popular/5', '/popular/6', '/popular/7', '/popular/8']

export const popularData = function () {
  const popularDataList = []
  for (let i = 0; i < COUNTS; i++) {
    const data = {}
    data.id = Random.id()
    data.link = LINK[i]
    data.title = TITLE[i]
    data.image = Random.image('225x225', Random.color(), '#FFF', 'png', TITLE[i])
    popularDataList.push(data)
  }
  return popularDataList
}
