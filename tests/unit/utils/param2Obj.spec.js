/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:22
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:22:58
 */
import { param2Obj } from '@/utils/index.js'
describe('Utils:param2Obj', () => {
  const url = 'https://xxx.com'

  it('param2Obj test', () => {
    expect(param2Obj(url)).toEqual({
      name: 'bill',
      age: '29',
      sex: '1',
      field: window.btoa('test'),
      key: '测试'
    })
  })
})
