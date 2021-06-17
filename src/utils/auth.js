/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:22
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:35:00
 */
import Cookies from 'js-cookie'

const TokenKey = 'admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
