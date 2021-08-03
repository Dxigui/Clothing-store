// eslint-disable-next-line no-unused-vars
import fetch from './fetch.js'

const URL = {
  homeBanner: '/home/banner'
}
const METHODS = {
  get: 'get',
  post: 'post'
}

export const getBannerData = () => fetch({
  url: URL.homeBanner,
  method: METHODS.get,
  params: {
  }
})
