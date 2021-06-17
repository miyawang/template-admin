/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:22
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:23:41
 */
import { validUsername, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('editor')).toBe(true)
    expect(validUsername('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('https://xxx.com')).toBe(true)
    expect(isExternal('/dashboard')).toBe(false)
    expect(isExternal('./dashboard')).toBe(false)
    expect(isExternal('dashboard')).toBe(false)
  })
})
