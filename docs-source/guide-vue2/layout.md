# 布局

通过两处设置可实现 3 套不同的页面布局，分别是**双侧边栏布局**、**单侧边栏布局**、**头部导航布局**。

## 双侧边栏布局

项目默认显示**双侧边栏布局**，即区分主导航和次导航，展示效果如下：

<p><img :src="$withBase('/vue2/basic-layout-default.png')" /></p>

## 头部导航布局

**头部导航布局**只需在 `./src/setting.js` 设置 `showHeader: true` 即可，展示效果如下：

<p><img :src="$withBase('/vue2/basic-layout-header.png')" /></p>

## 单侧边栏布局

如果要调整为**单侧边栏布局**，则需要到 `./src/router/index.js` 路由配置文件里找到下面这段代码，并注释掉高亮部分代码。

```js {22}
// 当 children 不为空的主导航只有一项时，则隐藏
let asyncRoutes = [
    {
        meta: {
            title: '默认',
            icon: 'sidebar-default'
        },
        children: [
            MultilevelMenuExample,
            BreadcrumbExample,
            KeepAliveExample,
            ComponentExample,
            PermissionExample
        ]
    },
    {
        meta: {
            title: '其它',
            icon: 'sidebar-other'
        },
        children: [
            // ExTernalLinkExample
        ]
    }
]
```

展示效果如下：

<p><img :src="$withBase('/vue2/basic-layout-without-main-sidebar.png')" /></p>

**单侧边栏布局**其实就是去掉了主导航，当只有一个主导航，或者其它主导航下面都没有次导航的时候，布局就自动切换为**单侧边栏布局**。这种布局适合在功能模块不多的中小型后台系统使用。

:::tip 注意
同时设置**单侧边栏布局**和**头部导航布局**，在头部区域也不会展示主导航内容。
:::

## 移动端

本框架兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。

当页面宽度小于 `992px` 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。
:::

## 扩展 <Badge type="tip" text="专业版" vertical="top" />

在基础版 3 套页面布局的基础上，专业版扩展了另一维度的 4 套布局，分别是**自适应**、**自适应（有最小宽度）**、**定宽居中**、**定宽居中（有最大宽度）**，可在配置文件中轻松设置。

```js
/**
 * 布局类型，当设置为非 adaption 时，请去 ./src/assets/styles/resources/layout.scss 里设置 $g-app-width
 * adaption 自适应
 * adaption-min-width 自适应（有最小宽度）
 * center 定宽居中
 * center-max-width 定宽居中（有最大宽度）
 */
layout: 'adaption'
```

下面简单演示这 4 套布局的特点（图片平均大小为 2M ，加载可能需要点时间）。

**自适应**

<p><img :src="$withBase('/layout_1.gif')" /></p>

**自适应（有最小宽度）**

<p><img :src="$withBase('/layout_2.gif')" /></p>

**定宽居中**

<p><img :src="$withBase('/layout_3.gif')" /></p>

**定宽居中（有最大宽度）**

<p><img :src="$withBase('/layout_4.gif')" /></p>

将扩展的 4 套布局和基础版原有的 3 套布局进行组合搭配，可实现 12 套布局，如果再搭配默认提供的 5 款主题，**即可实现 60 种界面风格**。