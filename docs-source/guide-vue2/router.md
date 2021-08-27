# 路由

## 配置项

框架的核心是通过路由自动生成对应导航，所以除了路由的基本配置，还需要了解框架提供了哪些配置项，其中**高亮部分为专业版扩充配置项**，基础版不具备该特性：

```js {5-6,12-16,27-40}
// 所有的导航配置项均放在路由的 meta 对象中
meta: {
    // 该路由在侧边栏导航和面包屑导航中展示的标题
    title: '新闻列表',
	// 国际化 key ，如果设置的 key 不存在则以显示 title
	i18n: '',
    // 侧边栏导航中显示的图标，图标使用 <svg-icon /> 组件展示
    // 专业版支持使用 ElementUI Icon 和 RemixIcon ，如下：
    // icon: 'el-icon-star-on'
    // icon: 'ri-star-fill'
    icon: 'news',
	// 侧边栏导航中激活时显示的图标，图标使用 <svg-icon /> 组件展示
    // 支持使用 ElementUI Icon 和 RemixIcon ，如下：
    // activeIcon: 'el-icon-star-on'
    // activeIcon: 'ri-star-fill'
	activeIcon: '',
    // 该路由进入的权限，支持多个权限叠加，只要满足一个，即可进入
    // 如果用户没有该权限，则该路由不会在侧边栏导航中展示
    auth: ['news.browse', 'news.edit'],
    // 该路由是否在侧边栏导航中展示，如编辑页面 /edit/:id ，默认为 true
    sidebar: false,
    // 该路由是否在面包屑导航中展示，默认为 true
    breadcrumb: false,
    // 当路由设置了该属性，则会高亮相对应的侧边栏，一般会搭配 sidebar: false 一起使用
    // 例如从新闻列表进入新闻详情页，由于新闻详情页路由不在侧边栏导航中展示，这时你如果想高亮新闻列表的路由，就可以进行如下设置
    activeMenu: '/news/list',
    // 导航标记，支持 boolean,number,string 三种类型
    // boolean 类型展示形式为点，当值为 false 时隐藏
    // number 类型展示形式为文本，当值小于等于 0 时隐藏
    // string 类型展示形式为文本，当值为空时隐藏
    // 如果标记需要动态更新，请设置为函数形式，并传入外部变量，例如搭配 vuex 一起使用
    // badge: () => store.state.global.number
    badge: true,
    // 内嵌网页链接，如果要开启内嵌网页，component 需要设置为框架提供的 layoue/iframe.vue
    link: '',
    // 该路由是否显示底部版权信息，比全局设置里的 showCopyright 优先级高，不设置则继承全局里的设置
    copyright: false,
    // 该路由是否需要空出距离底部距离，默认无需设置
    // 当使用类似 FixedActionBar 这类通过 position: fixed 固定在底部的组件或 DOM 时，需要手动设置，目的是为了防止页面底部可能被遮挡
    paddingBottom: '80px'
}
```

示例：

```js
import Layout from '@/layout'

export default {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'banner',
    meta: {
        title: 'Banner 管理',
        icon: 'banner',
        auth: ['banner.browse']
    },
    children: [
        {
            path: 'detail',
            name: 'bannerCreate',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
            meta: {
                title: '新增 Banner',
                auth: ['banner.create']
            }
        },
        {
            path: 'list',
            name: 'bannerList',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/list'),
            meta: {
                title: 'Banner 列表',
                auth: ['banner.browse']
            }
        },
        {
            path: 'detail/:id',
            name: 'bannerEdit',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
            meta: {
                title: '编辑 Banner',
                auth: ['banner.edit'],
                sidebar: false,
                activeMenu: '/banner/list'
            }
        }
    ]
}
```

展示效果如下：

<p><img :src="$withBase('/breadcrumb1.gif')" /></p>

## 小技巧

客户总是有自己的想法，例如我司就曾遇到过这样的需求，在不改变侧边栏导航结构的前提下，面包屑导航希望能变成这样：

<p><img :src="$withBase('/breadcrumb2.gif')" /></p>

其实根据图中的效果，可以确定路由需要有三层，剩下就是通过配置项去控制侧边栏导航和面包屑导航是否展示。

```js
import Layout from '@/layout'
import EmptyLayout from '@/layout/empty'

export default {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'banner',
    meta: {
        title: 'Banner 管理',
        icon: 'banner',
        auth: ['banner.browse']
    },
    children: [
        {
            path: 'detail',
            redirect: '/banner/list/detail',
            meta: {
                title: '新增 Banner',
                auth: ['banner.create']
            }
        },
        {
            path: 'list',
            name: 'bannerList',
            component: EmptyLayout,
            redirect: '/banner/list',
            meta: {
                title: 'Banner 列表',
                auth: ['banner.browse']
            },
            children: [
                {
                    path: 'detail',
                    name: 'bannerCreate',
                    component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
                    meta: {
                        title: '新增 Banner',
                        auth: ['banner.create'],
                        sidebar: false,
                        activeMenu: '/banner/detail'
                    }
                },
                {
                    path: '',
                    name: 'bannerList',
                    component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/list'),
                    meta: {
                        title: 'Banner 列表',
                        auth: ['banner.browse'],
                        sidebar: false,
                        breadcrumb: false
                    }
                },
                {
                    path: 'detail/:id',
                    name: 'bannerEdit',
                    component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
                    meta: {
                        title: '编辑 Banner',
                        auth: ['banner.edit'],
                        sidebar: false,
                        activeMenu: '/banner/list'
                    }
                }
            ]
        }
    ]
}
```

## 嵌套路由

上面的扩展例子里，引用了一个 `EmptyLayout` 组件，查看代码可以看到这是一个空白的 layout 页面。

```html
<template>
    <RouterView />
</template>
```

为什么需要这个呢？因为嵌套路由生成出来的导航栏目也是嵌套结构的，但导航栏目里的模块页面一般是不需要嵌套的，所以除了顶级路由需要设置 `component: Layout` ，嵌套有 `children` 属性的子项路由，均可设置 `component: EmptyLayout` 。当然如果你的页面确实有嵌套展示的需求，可不按照这种方式操作。

## 全局前置守卫

路由的前置导航守卫是框架实现路由跳转的核心，在前置守卫里会接管侧边栏导航路由生成、页面标题设置、无效路由跳转404页面等处理。所以理解框架的前置守卫处理逻辑，对业务开发或框架二次开发有很大帮助。

<p><img :src="$withBase('/router.png')" /></p>