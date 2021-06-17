/*
 * @Descripttion:
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:21
 * @LastEditors: miya wang
 * @LastEditTime: 2021-05-11 11:17:38
 */
module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      'plugins': ['dynamic-import-node']
    }
  }
}
