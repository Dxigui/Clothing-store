import axios from 'axios'

// 封装 axios 请求
export default function fetch (options) {
  return new Promise((resolve, reject) => {
    // 创建一个 axios 实例,传入的参数为 axios 的配置
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 1000 * 30
    })
    // 拦截请求
    instance.interceptors.request.use(options => {
      return options
    }, err => {
      return err
    })
    // 拦截响应
    instance.interceptors.response.use(res => {
      // console.log('axios', res)
      if (res.status === 200) {
        return res
      }
    }, err => {
      return err
    })
    // 发送请求
    instance(options)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
