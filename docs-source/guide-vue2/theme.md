# 主题

:::warning 注意
专业版整体重构了主题的实现方式，阅读时请区分。
:::

## 基础版

基础版只提供一套主题，但可自行修改关键颜色变量，实现主题自定义，相关代码在 `./src/assets/styles/resources/variables.scss` 里。

```scss
// 应用背景色
$g-app-bg: #fff;
// 主区域背景色
$g-main-bg: #f5f7f9;

// 头部背景色
$g-header-bg: #736477;
// 头部导航文字颜色
$g-header-menu-color: #fff;
// 头部导航选中颜色
$g-header-menu-active-bg: lighten($g-header-bg, 10);

// 主侧边栏背景色
$g-main-sidebar-bg: #736477;
// 主侧边栏文字颜色
$g-main-sidebar-menu-color: #fff;
// 主侧边栏菜单选中背景色
$g-main-sidebar-menu-active-bg: lighten($g-main-sidebar-bg, 10);

// 次侧边栏背景色
$g-sub-sidebar-bg: #ddcdcd;
// 次侧边栏菜单文字颜色
$g-sub-sidebar-menu-color: #89768f;
// 次侧边栏菜单文字选中颜色
$g-sub-sidebar-menu-active-color: darken($g-sub-sidebar-menu-color, 30);
// 次侧边栏菜单选中背景色
$g-sub-sidebar-menu-active-bg: #b5a5a5;
```

该文件里你还可对布局的宽高进行调整。

```scss
// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）
$g-header-width: 100%;
// 头部高度
$g-header-height: 70px;
// 面包屑高度（同时也是侧边栏Logo区域的高度）
$g-breadcrumb-height: 50px;
// 侧边栏宽度
$g-main-sidebar-width: 60px;
$g-sub-sidebar-width: 220px;
$g-sidebar-width: var(--real-sidebar-width);
```

## 专业版

框架提供了 5 款主题，在配置文件中就可轻松切换。

```js
/**
 * 主题，默认提供 5 款
 * default 默认
 * vue-cli Vue CLI 风格
 * gitee 码云风格
 * freshness 清新
 * elegant 素雅
 */
theme: 'default'
```

如果框架提供的主题风格满足不了你的需求，你还可以自定义新的主题，和基础版不同的是，专业版主题相关代码在 `./src/assets/styles/resources/themes.scss` 里。由于代码比较多，下面只截取部分。

```scss
$themes: (
    default: (
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
    ),
    vue-cli: (
        // 主区域背景色
        g-main-bg: #f0f2f5,
        // 【头部】
        // 头部背景色
        g-header-bg: #1d2935,
        // 头部导航文字颜色
        g-header-menu-color: #fff,
        // 头部导航文字选中颜色
        g-header-menu-active-color: #42b983,
        // 头部导航选中背景色
        g-header-menu-active-bg: #1f3039,
        ...
    ),
    ...
);
...
```

可以看到，所有主题都存放在 `$themes` 这个变量里，所以如果想创建一个新主题，你可以按照 `default` 复制一份，其中 `new-theme` 就是主题的名称，里面主题的配色可以自行修改。

```scss {16-29}
$themes: (
    default: (
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
    ),
    new-theme: (
        // 主区域背景色
        g-main-bg: #f0f2f5,
        // 【头部】
        // 头部背景色
        g-header-bg: #1d2935,
        // 头部导航文字颜色
        g-header-menu-color: #fff,
        // 头部导航文字选中颜色
        g-header-menu-active-color: #42b983,
        // 头部导航选中背景色
        g-header-menu-active-bg: #1f3039,
        ...
    ),
    ...
);
```

布局相关的部分宽高变量存放在 `./src/assets/styles/resources/layout.scss` 文件中。

```scss
// 这是一个复合变量
// 当布局设置为 adaption-min-width 时，它代表 最小宽度
// 当布局设置为 center 时，它代表 固定宽度
// 当布局设置为 center-max-width 时，它代表 最大宽度
$g-app-width: 1400px;

// 头部宽度（默认自适应宽度，可固定宽度，固定宽度后为居中显示）
$g-header-width: 100%;
// 头部高度
$g-header-height: 70px;
// 面包屑高度（同时也是侧边栏Logo区域的高度）
$g-breadcrumb-height: 50px;
// 标签栏高度
$g-tabbar-height: 40px;
// 侧边栏宽度
$g-main-sidebar-width: 60px;
$g-sub-sidebar-width: 220px;
```