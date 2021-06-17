/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:22
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:35:16
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Admin Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
