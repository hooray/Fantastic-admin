# 从 vue-element-admin 迁移

## 序

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 做为一款知名度相当高的后台框架，是很多刚接触后台开发的开发人员首选框架，但由于其作者似乎并不太关注这款作品，并且也无任何 Vue3 版本的相关动向，导致在 Github 仓库里堆积了近千个未关闭的 issues 。

开发者在使用过程中遇到的很多问题，在其社区里提供的解决方案都是需要修改框架源码，这也让市面上出现了很多基于 vue-element-admin 的魔改版本。但大部分也只是小修小改，如果要修改到框架本身的设计，都是牵一发而动全身的。这也是我早期使用 vue-element-admin 开发后的一些感触，于是才下定决定自己写一套可高度配置化的后台框架。

虽然上面说的已经是我几年前的经历了，但相信现在依旧有很多开发者还在使用 vue-element-admin ，有的想找替代产品，但又嫌迁移工作太麻烦，毕竟迁移工作的前提是要了解两套框架的差异，才可以确保迁移工作的正常进行。

那么这篇文章，将会尽可能详细的介绍 vue-element-admin 和 fantastic-admin 在使用上的差异，给还在犹豫是否要替换 vue-element-admin 的小伙伴一点点参考。

因为 Fantastic-admin 已经提供了 `Vue3版本` ，所以本篇文章会以 `Vue3版本` 为最终迁移目标。当然 `Vue2版本` 在大部分情况下也适用。

## 准备工作

首先你需要准备一份 `Vue3版本` 的模版源码，并确保能在本地正常启动运行。

其次建议你先完整阅读一遍 Fantastic-admin 的文档后，对其有个大致的了解后，再阅读下面的差异。

## 细节

### 环境配置

得益于 vue-element-admin 的功能简单，环境配置里只能设置 `VUE_APP_BASE_API` ，在 Fantastic-admin 里对应的是 `VITE_APP_API_BASEURL` 这个参数。

当然在 Fantastic-admin 还提供了页面标题、调试工具、构建压缩等一系列的配置，详细可阅读《[配置 - 环境配置](configure.md#环境配置)》。

### 框架配置

vue-element-admin 一共只提供了 6 个配置项（`title` `showSettings` `tagsView` `fixedHeader` `sidebarLogo` `errorLog`），并且大部分都是界面布局上的设置，建议这部分可直接参考 Fantastic-admin 的框架配置文件，我们提供了更丰富的界面布局设置。

### 主题

很遗憾，vue-element-admin 没有提供主题配色的功能，而 Fantastic-admin 里可以自定义主题配色方案，详细可阅读《[主题](theme.md)》。

### 全局资源

#### SVG 图标

vue-element-admin 将 svg 文件存放在 `./src/icons/svg/` 目录下，这部分的 svg 文件可直接拷贝到 Fantastic-admin 的 `./src/assets/icon/` 目录下，并且我们还提供了 `<svg-icon />` 组件方便直接使用，详细可阅读《[全局资源 - SVG图标](global-resources.md#svg-图标)》。

#### 图片

vue-element-admin 将图片存放在 `./src/assets/` 目录下，这部分的图片资源可直接拷贝到 Fantastic-admin 的 `./src/assets/images/` 目录下即可。

#### 精灵图

这是 Fantastic-admin 单独提供的特性，如果在项目中使用了较多尺寸不大的素材图，你可以考虑使用精灵图的方式将多张小图合并成一张大图，通过 css 背景图定位的方式去展示使用，详细可阅读《[全局资源 - 精灵图](global-resources.md#精灵图)》。

#### 样式

vue-element-admin 将样式存放在 `./src/styles/` 目录下，这个目录存放的基本是和框架相关的样式，迁移过程中基本是无需关注的，你只需要关注你新增的样式文件，将这些文件拷贝到 Fantastic-admin 的 `./src/assets/styles/` 目录下，并在相关使用到的地方引入即可。

另外 Fantastic-admin 还提供了一个 `./src/assets/styles/resources/` 目录用来单独存放 SCSS 资源，这个目录下的文件会被框架自动引入，可在页面上直接使用，详细可阅读《[全局资源 - 样式](global-resources.md#样式)》。

#### 组件

vue-element-admin 将组件存放在 `./src/components/` 目录下，并且使用时需要单独注册，而 Fantastic-admin 提供了全局组件自动注册的特性，你只需将全局组件同样放到 Fantastic-admin 的 `./src/components/` 目录下即可在页面中直接使用，详细可阅读《[全局资源 - 组件](global-resources.md#组件)》。

### 与服务端交互

vue-element-admin 的 `./src/utils/request.js` 对应了 Fantastic-admin 的 `./src/api/index.js` 文件，它们都对 axios 进行了封装，便于统一处理 POST 和 GET 请求，你可以根据原有的配置逐行迁移代码。

另外在 vue-element-admin 的 `./src/api/` 目录下存放了以模块为维度拆分的独立文件，方便统一管理不同模块的所有接口请求，这在大型项目中是很有必要的，而 Fantastic-admin 并未提供特定目录，如果你有这个需求，可以自行建立一个文件夹用来管理这部分文件。

### 路由

Fantastic-admin 借鉴了 vue-element-admin 通过路由生成导航栏的思路，都是在路由里增加导航配置参数，只不过 Fantastic-admin 将额外的导航配置参数统一都放在的 `meta` 对象中。下面这个对比表格能帮助里快速了解 vue-element-admin 和 Fantastic-admin 对应的配置项。

| vue-element-admin | Fantastic-admin | 说明                                                                                                              |
| :---------------: | :-------------: | :---------------------------------------------------------------------------------------------------------------- |
|      hidden       |  meta.sidebar   | 是否在导航栏里显示                                                                                                |
|    alwaysShow     |        /        | 并未提供该设置，因为在 Fantastic-admin 里自动处理的                                                               |
|    meta.roles     |    meta.auth    | Fantastic-admin 可兼容 vue-element-admin 的权限设计模式，并提供了更高级的权限模式                                 |
|    meta.title     |   meta.title    | 导航标题                                                                                                          |
|     meta.icon     |    meta.icon    | 导航图标                                                                                                          |
|   meta.noCache    |   meta.cache    | vue-element-admin 的 noCache 与 Fantastic-admin 的 cache 都是对页面缓存的配置，但背后的逻辑和使用方式却完全不一样 |
|  meta.breadcrumb  | meta.breadcrumb | 是否在面包屑导航里显示                                                                                            |
|    meta.affix     |        /        | 标签页是否固定，在 Fantastic-admin 中，标签页是可以通过右键标签页手动设置固定，而非在路由配置里固定写死           |
|  meta.activeMenu  | meta.activeMenu | 高亮指定导航                                                                                                      |

除了以上 vue-element-admin 提供的配置项之外，Fantastic-admin 还提供了很多额外的配置项，详细可阅读《[路由 - 导航配置](router.md#导航配置)》。

### 页面缓存

在 Fantastic-admin 里你可以理解只有二级路由缓存，因为我们提供了一个特性，不管路由配置多少层级，最终都会被处理成二级，但是可以放心，仅仅是路由被处理成二级，而导航和面包屑导航依旧是保持原有的层级结构展示。

这么做的目的也是为了彻底解决多级路由缓存的问题，相信你一定在 vue-element-admin 里遇到过这类问题，社区里的解决方案也五花八门，始终没有一个统一的解决方案。

所以 Fantastic-admin 提供了一个一劳永逸的解决办法，详细可阅读《[页面缓存](keep-alive.md)》。

## 最后

本篇迁移文档仅对整体做简单说明，迁移项目毕竟是个庞大工程，过程中难免会出现各种无法预测的问题，建议可以加讨论群自由讨论寻求帮助。