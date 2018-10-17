/*
ajax请求函数模板
返回值:promise 对象(异步返回的数据是:response.data)
*/
import axios from 'axios'
import { Object } from 'core-js';
export default function ajax (url, data={}, type="GET") {
  return new Promise (function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 1.准备url query参数数据
      let dataStr = '' //1.1 设空字符串,将数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      // 1.2 如不是空符串,进行拼接
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {

    }).catch(function () {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject()
      reject(error)
    })



  })

}
