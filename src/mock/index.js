import Mock from 'mockjs'

import { bannerData } from './modules/banner-data.js'

Mock.mock('/home/banner', 'get', bannerData)
