/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 11:46:13
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:48:39
 */
import Layout from '@/layout'

const example = {
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  name: 'Example',
  meta: { title: 'Example', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/table/index'),
      meta: { title: 'Table', icon: 'table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      hidden: true,
      component: () => import('@/views/tree/index'),
      meta: { title: 'Tree', icon: 'tree' }
    }
  ]
}
export default example
