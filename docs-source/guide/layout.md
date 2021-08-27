# 布局

通过 5 种导航栏模式和 4 种页宽模式的组合搭配，可实现 20 种布局结构，再搭配默认提供的 6 款主题，**即可实现上百种界面风格**。

## 导航栏模式

在框架配置里进行设置，可实现 5 种导航栏模式：

- 顶部模式
- 侧边栏模式（含主导航）
- 侧边栏模式（无主导航）
- 侧边栏精简模式 <Badge type="tip" text="专业版" vertical="top" />
- 顶部精简模式 <Badge type="tip" text="专业版" vertical="top" />

### 顶部模式

<p><img :src="$withBase('/menu-mode-head.png')" /></p>

```js:no-line-numbers
menuMode: 'head'
```

### 侧边栏模式（含主导航）

<p><img :src="$withBase('/menu-mode-side.png')" /></p>

```js:no-line-numbers
menuMode: 'side'
```

### 侧边栏模式（无主导航）

<p><img :src="$withBase('/menu-mode-single.png')" /></p>

```js:no-line-numbers
menuMode: 'single'
```

### 侧边栏精简模式 <Badge type="tip" text="专业版" vertical="top" />

<p><img :src="$withBase('/menu-mode-only-side.png')" /></p>

```js:no-line-numbers
menuMode: 'only-side'
```

### 顶部精简模式 <Badge type="tip" text="专业版" vertical="top" />

<p><img :src="$withBase('/menu-mode-only-head.png')" /></p>

```js:no-line-numbers
menuMode: 'only-head'
```

## 页宽模式 <Badge type="tip" text="专业版" vertical="top" />

在框架配置里进行设置，可实现 4 种基于页宽(页面宽度)模式：

- 自适应
- 自适应（有最小宽度）
- 定宽居中
- 定宽居中（有最大宽度）

### 自适应

<p><img :src="$withBase('/layout_1.gif')" /></p>

```js:no-line-numbers
appWidthMode: 'adaption'
```

### 自适应（有最小宽度）

<p><img :src="$withBase('/layout_2.gif')" /></p>

```js:no-line-numbers
appWidthMode: 'adaption-min-width'
```

### 定宽居中

<p><img :src="$withBase('/layout_3.gif')" /></p>

```js:no-line-numbers
appWidthMode: 'center'
```

### 定宽居中（有最大宽度）

<p><img :src="$withBase('/layout_4.gif')" /></p>

```js:no-line-numbers
appWidthMode: 'center-max-width'
```

## 变量

布局相关的部分宽高变量存放在 `./src/assets/styles/resources/layout.scss` 文件中。

```scss
// 这是一个复合变量
// 当页宽模式为 adaption-min-width 时，它代表 最小宽度
// 当页宽模式为 center 时，它代表 固定宽度
// 当页宽模式为 center-max-width 时，它代表 最大宽度
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

## 移动端

本框架兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。

当页面宽度小于 `992px` 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。

:::tip 建议
由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。

依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。
:::