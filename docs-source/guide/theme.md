# 主题

## 基础版

基础版主题样式存放在 `./src/assets/styles/resources/themes.scss` 文件中，均为 scss 变量，修改后即可在页面上查看效果。

## 专业版

与基础版不同，专业版默认提供了 6 款主题，在配置文件中就可轻松切换。并且多款主题共存，支持在项目运行时动态切换。

```js:no-line-numbers
/**
 * 主题，默认提供 6 款
 * default 默认
 * vue-cli Vue CLI 风格
 * gitee 码云风格
 * freshness 清新
 * elegant 素雅
 * pure-white 纯白
 */
theme: 'default'
```

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，在 `./src/assets/styles/resources/` 目录里， `theme-*.scss` 即主题样式文件，以默认主题为例：

```scss:no-line-numbers
$theme-default: (
    // 主区域背景色
    g-main-bg: #f0f2f5,
    // 【头部】
    // 头部背景色
    g-header-bg: #222b45,
    // 头部导航文字颜色
    g-header-menu-color: #ccc,
    // 头部导航文字选中颜色
    g-header-menu-active-color: #fff,
    // 头部导航选中背景色
    g-header-menu-active-bg: #334067,
    ...
);
```

可以看到，默认主题的样式都存放在 `$theme-default` 这个变量里，所以如果想创建一个新主题，你可以将 `theme-default.scss` 文件复制一份，例如我们要增加一个红色主题，则需要将文件名改为 `theme-red.scss` ，然后将文件里的 `$theme-default` 变量名也修改为 `$theme-red` ，最后打开 `./src/assets/styles/resources/themes.scss` 文件，然后增加以下一行代码即可。

```scss {8}
$themes: (
    default: $theme-default,
    vue-cli: $theme-vue-cli,
    gitee: $theme-gitee,
    freshness: $theme-freshness,
    elegant: $theme-elegant,
    pure-white: $theme-pure-white,
	red: $theme-red
);
```

最后在框架配置里修改主题为 `red` 就可以调用这个我们创建的主题了。

```js:no-line-numbers
theme: 'red'
```
