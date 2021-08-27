# 配置

## 环境配置

默认提供开发环境、测试环境和生产环境三套配置，分别对应根目录下 `.env.development` 、`.env.test` 和 `.env.production` 文件。

如果要新增一个环境配置，或者环境变量，请保证原配置文件里默认提供的环境变量名不变，避免因修改环境变量名导致运行或打包错误。

扩展阅读：《[Vue CLI - 环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)》

::: warning 注意
环境配置修改后，需要重新运行才会生效
:::

## 框架配置

框架所有可选的配置信息都在 `./src/settings.js` 文件里统一存放。例如你想要修改布局为定宽居中布局，则修改并设置：

```js {3}
let globalSettings = {
	...
	layout: 'center',
	...
}
```