# 全局属性

全局属性在 `./src/util/global.properties.js` 文件中配置。

## 框架相关

### 接口请求

详细可阅读《[与服务端交互 - 接口请求](axios.md#接口请求)》。

```js:no-line-numbers
this.$api
```

### 鉴权

详细可阅读《[权限 - 鉴权函数](permission.md#鉴权函数)》。

```js:no-line-numbers
this.$auth
this.$authAll
```

### 标签栏 <Badge type="tip" text="专业版" vertical="top" />

详细可阅读《[标签栏 - 全局方法](tabbar.md#全局方法)》。

```js:no-line-numbers
this.$tabbar.getId()
this.$tabbar.closeById(tabId)
// to: 与 router.push(to) 一致，表示关闭当前标签页并跳转到指定路由
this.$tabbar.close(to)
```

### 主页最大化 <Badge type="tip" text="专业版" vertical="top" />

```js:no-line-numbers
// status: true / false
this.$tabbar.mainPageMaximize(status)
```

## 第三方库

除 vue-router 、Vuex 、axios 之外，框架还默认集成了一些常用且成熟的类库或插件，熟悉并熟练使用它们，能让你在开发过程中更得心应手。

### [dayjs](https://day.js.org/zh-CN/)

这是一个轻量的处理时间和日期的 JavaScript 库。

```js:no-line-numbers
this.$dayjs
```

### [vue-cookies](https://github.com/cmp-cc/vue-cookies)

cookies 操作库。

```js:no-line-numbers
this.$cookies
```

### [HotKey.js](https://wangchujiang.com/hotkeys/)

一个快捷键监听的库，框架目前在页面搜索上监听了 `Ctrl + S` 这组快捷键。

```js:no-line-numbers
this.$hotkeys
```

### [vue3-clipboard](https://github.com/soerenmartius/vue3-clipboard) <Badge type="tip" text="专业版" vertical="top" />

一个剪贴板的库，可将数据拷贝到系统剪贴板中。

```js:no-line-numbers
this.$clipboard
```

### [QRCode](https://github.com/soldair/node-qrcode) <Badge type="tip" text="专业版" vertical="top" />

一个生成二维码的库，可生成图片或 canvas 二维码。

```js:no-line-numbers
this.$qrcode
```

### [mitt](https://github.com/developit/mitt)

一个全局事件总线的库，也是 Vue 3 推荐的库。

```js:no-line-numbers
this.$eventBus
```