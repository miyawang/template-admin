<!--
 * @Descripttion: readme
 * @Author: miya wang
 * @Date: 2021-05-11 10:02:21
 * @LastEditors: miya wang
 * @LastEditTime: 2021-06-17 23:22:08
-->
# template

> 管理后台模板：这个是模板分支 template/admin 这是一个极简的 vue admin 管理后台模板，具体的项目分支，后面补充。<br>
> Web 模板：这个是模板分支 template/ducument。<br>
> Web 文档项目：这个是项目发布分支， release/document 分支。<br>
> Web 文档项目开发分支：这个是项目开发分支， dev/document 分支。<br>

# 分支管理

> release/* 分支请不要随便动，每个项目由指定一人来合代码并发版 <br>
> dev/* 分支由指定一人来合代码 <br>
> 平时开发可使用 dev/projectName 进行管理 <br>
> 个人分支，不需要每天推代码，以模块为准，不要把未开发完的功能、未调试完的 bug、满屏的 debugger 给推上去，<br> 个人分支可以 feat/name/module 进行命名，如开发某个功能 feat/miya/home, <br> 修复某个 bug，fix/miya/bugid（or date 修复多个bug）<br>
> 合代码前一定要通知，代码合成功以后，每个人将自己原来的分支删除，拉取代码，重开分支去开发。



## Build Setup

```bash

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev


浏览器访问 [http://localhost:2021](http://localhost:2021)

# lint 项目已配置 eslint，修复简易错误（如空格），其余的需要自己根据报错信息手动修复

npm run  lint

# 本项目已经封装好 icon pagination 组件， icon 使用 svg， 具体使用方法

 <svg-icon icon-class="iconname" />

# 本项目使用 scss 来做 css 预处理器，请自行学习常用知识，如 变量、mixin、循环、函数等，在项目中可直接使用 m-t-20 表示 margin-top：20px，p-t-20, 代表：padding-top：20px; 大家也可以多沉淀，往上面补充。如

  <div class="article-container m-t-20 p-b-20">
    这里是 article 列表
  </div>



```
## 代码规范

### 结构规范

> 使用 element-ui 写结构 <br>
> 尽量语义化 不要满屏的 div <br>
> 嵌套层级不要太深 <br>

### 样式规范

> 类名：使用 BEM 命名规范，不知道的自己百度，也可以研究下 element-ui 的类名命名，照着写，不要写的乱七八糟，大小写都有。 <br>
> 嵌套：尽量控制在 3 层以内，能用父子选择器的就不要使用后代选择器，严禁使用通配符选择器。
> 变量、方法命名，使用 camelCase 命名（ SCSS ）。
> 重复的样式，请抽出来做成 mixins 或者 include 等。


### 逻辑规范

> 变量、方法，使用 camelCase 命名。

### Vue 文件规范

``` bash

# vue 文件方法声明顺序

- components
- props
- data
- watch
- computed
- created
- mounted
- activited
- update
- beforeRouteUpdate
- metods

# 组件命名规范

- 组件名应该始终是多个单词的，根组件 App 除外
- 有意义的名词、简短、具有可读性
- 命名遵循 PascalCase(单词首字母大写命名) 约定
- 公用组件命名遵循 CamelCase 命名规范，使用时以 CamelCase 命名作为标签。如 Pagination
- 页面内部组件以组件模块名简写为开头，Item 为结尾，如（SubMenuItemm）
- 使用遵循 kebab-case(短横线分隔命名) 约定
- 在页面中使用组件需要前后闭合，并以短线分隔，如（<abcd-date-picker></abcd-date-picker>，<abcd-table></abcd-table>）
- 导入及注册组件时，遵循 PascalCase(单词首字母大写命名) 约定
- 同时还需要注意：必须符合自定义元素规范: 切勿使用保留字。

# props 命名规范

- 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case 如：

<script>
  props: {
    tipText: String;
  }
</script>

# 注释规范

以下情况，务必添加注释

- 公共组件使用说明
- 各组件中重要函数或者类说明
- 复杂的业务逻辑处理说明
- 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述
- 注释块必须以/**（至少两个星号）开头**/；
- 单行注释使用//；
- 多重 if 判断语句


# 其他

- 调试信息 console.log() debugger 使用完及时删除

```
## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查并自动修复
npm run lint
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions


