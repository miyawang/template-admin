/*
 * @Descripttion: mock utils
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:21
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:02:43
 */
/**
 * @param {string} url
 * @returns {Object}
 */

function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

module.exports = {
  param2Obj
}
