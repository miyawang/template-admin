/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:22
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:24:24
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
