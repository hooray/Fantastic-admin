# CDN 支持

开启 CDN 的好处在于，项目中引用的一些第三方库不会打包进项目内，从而减小打包出的文件体积，同时借用 CDN 的优势，大大提高项目加载速度。

CDN 支持默认不开启，如果需要开启，则在 `.env.production` 生产环境配置文件中修改：

```
VUE_APP_CDN = ON
```

CDN 配置文件存放在项目根目录下的 `dependencies.cdn.js` 文件里，可按照标准格式自行扩展配置。

```js
{
    name: '',
    library: '',
    js: '',
    css: ''
}
```

其中 `name` 和 `library` 最终会转成 webpack 中 externals 的配置项， `name` 是引入的包名， `library` 是全局变量。

设置好并开启后，原先文件中通过 `import` 进行引入的包，就不需要引入了，代码可以删掉，但是删掉会触发 ESLint 的错误提示，例如：

```js {4}
// import Vue from 'vue'

import api from './api'
Vue.prototype.$api = api // 这行代码会提示 'Vue' is not defined.
```

解决这个问题就需要在 `.eslintrc.js` 文件中对 `globals` 对象增加 `Vue` 的属性。

```js {5}
globals: {
	process: true,
	require: true,
	module: true,
	Vue: true
}
```

:::tip 注意
1. 如果只在生产环境开启 CDN 支持，请确保第三方库的 CDN 版本与本地依赖包的版本一致，以免出现开发环境是正常的，但生产环境缺不行的情况，也就是因为版本不同造成的 bug
2. 开发环境开启 CDN 支持后会导致 [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 无法使用，所以不建议开发环境开启
:::