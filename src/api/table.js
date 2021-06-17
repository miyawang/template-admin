/*
 * @Descripttion: api table
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:21
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:08:22
 */

import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/admin-template/table/list',
    method: 'get',
    params
  })
}
