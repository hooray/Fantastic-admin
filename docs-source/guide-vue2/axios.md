# 和服务端交互

框架使用 [Axios](https://github.com/axios/axios) 做为异步请求工具，并进行了简单的封装。

## 设置 baseURL

在根目录 `.env.*` 文件里的 `VUE_APP_API_ROOT` 这个参数就是配置 axios 的 `baseURL` 。

## 拦截器

在 `./src/api/index.js` 文件里实例化了 axios 对象，并对 `request` 和 `response` 设置了拦截器，拦截器的用处就是拦截每一次的请求和响应，然后做一些全局的处理。例如接口响应报错，可以在拦截器里用统一的报错提示来展示，方便业务开发。因为每个公司提供的接口标准不同，所以该文件需要开发者根据实际情况去定制对应的拦截器。

代码很简单，首先初始化 axios 对象，然后 `axios.interceptors.request.use()` 和 `axios.interceptors.response.use()` 就分别是请求和响应的拦截代码了。

参考代码里只做了简单的拦截处理，例如请求的时候会自动带上 token ，响应的时候会根据错误信息判断是登录失效还是接口报错，并做相应动作，登录失效则跳转至登录页，接口报错则使用 Element UI 的 Message 组件提示用户。

## 多数据源

如果项目里需要从多个不同地址的数据源请求数据，你有两种方式可以实现。

如果只是几个接口需求从其它数据源请求，你可以使用覆盖 `baseURL` 的方式：

```js
this.$api.get('/new/list', {
    baseURL: 'http://baidu.com/' // 直接覆盖 baseURL
})
```

这种方式的前提是，两个数据源的 `request` 和 `response` 规则要保持一致，因为只是覆盖 `baseURL` ，拦截器还是用的同一套规则。

所以如果两个数据源的请求和响应是完全不同的标准，你需要给第二个数据源单独实例化一个 axios 对象。首先在 `.env.*` 文件里配置第二个数据源的 `baseURL` ：

```
# 命名可随意，以 VUE_APP_ 开头即可
VUE_APP_API_ROOT_2 = 此处填写接口地址
```

然后把 `./src/api/index.js` 文件复制一份，例如就叫 `./src/api/index2.js` ，并且将代码中的 `baseURL` 替换为 `process.env.VUE_APP_API_ROOT_2` ，最后在 `./src/main.js` 文件里引入：

```js
import api2 from './api/index2'
Vue.prototype.$api2 = api2
```

然后你就可以在页面中通过这种方式分别请求两个数据源的数据了：

```js
// 请求默认数据源
this.$api.get('/new/list')
// 请求第 2 个数据源
this.$api2.get('/new/list')
```

## 跨域

生产环境的跨域需要服务端去解决，开发环境的跨域问题可在本地设置代理解决。

打开 `vue.config.js` 并将高亮部分代码注释去掉：

```js {5-10}
module.exports = {
    ...
    devServer: {
        open: true,
        proxy: {
            '/': {
                target: process.env.VUE_APP_API_ROOT,
                changeOrigin: true
            }
        }
    },
    ...
}
```

同时将 `./src/api/index.js` 文件里的 `baseURL` 配置删掉，这时候重新运行框架，请求代理就会生效了。

假设 `VUE_APP_API_ROOT` 配置的是 `http://baidu.com` ，那上述配置的结果就是，在请求 `/api/login` 时会转发到 `http://baidu.com/api/login` 。

更多代理设置请阅读《[Vue CLI - devServer.proxy](https://cli.vuejs.org/zh/config/#devserver-proxy)》