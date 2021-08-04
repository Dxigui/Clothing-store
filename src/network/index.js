// eslint-disable-next-line no-unused-vars
import fetch from './fetch.js'

export const URL = {
  homeBanner: '/home/banner',
  homeFeature: '/home/feature',
  homepopular: '/home/popular',
  homeData: '/home/data'
}
const METHODS = {
  get: 'get',
  post: 'post'
}

export const PARAMS = {
  type: 'pop',
  page: 1
}

export const getBannerData = () => fetch({
  url: URL.homeBanner,
  method: METHODS.get,
  params: {
  }
})
export const getFeatureData = () => fetch({
  url: URL.homeFeature,
  method: METHODS.get,
  params: {}
})

export const getPopularData = () => fetch({
  url: URL.homepopular,
  method: METHODS.get,
  params: {}
})

export const getGoodsData = (type, page) => fetch({
  url: URL.homeData,
  method: METHODS.get,
  params: {
    type,
    page
  }
})
