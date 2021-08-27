# 第三方库

除了 vue-router 、Vuex 之外，框架还默认集成了一些常用且成熟的类库或插件，熟悉并熟练使用它们，能让你在开发过程中更得心应手。

## dayjs

[官网 & 文档](https://day.js.org/zh-CN/)

这是一个轻量的处理时间和日期的 JavaScript 库，在本框架中，已挂载在 Vue 的原型链上，可通过 `this.$dayjs()` 的方式直接使用。

## vue-cookies

[官网 & 文档](https://github.com/cmp-cc/vue-cookies)

cookies 操作库

## vue-meta

[官网 & 文档](https://github.com/nuxt/vue-meta)

HTML meta 标签动态管理的库，这个库了解就行，一般很少用到，框架把常用功能已经封装成配置项了，例如设置页面标题。

## HotKey.js

[官网 & 文档](https://wangchujiang.com/hotkeys/)

一个快捷键监听的库，框架目前在页面搜索上监听了 `Ctrl + S` 这组快捷键。