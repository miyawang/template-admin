/*
 * @Descripttion: api user
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:21
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:08:36
 */

import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin-template/user/logout',
    method: 'post'
  })
}
