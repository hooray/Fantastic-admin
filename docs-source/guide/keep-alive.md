# 页面缓存

首先需要清楚，本框架不管路由配置多少嵌套层级，最终都会被处理成两级结构，这也是经过许多开发者实践后相对认可的方案。其原因只是因为三级及以上路由在处理页面缓存上，无法提供一个万全的方案，总有各式各样的小问题。

如果想了解框架是怎么处理的，可以看下作者的这篇《[一劳永逸，解决基于 keep-alive 的多级路由缓存问题](https://hooray.github.io/posts/7ae488b2/)》文章。

那么在两级路由下，我们要如何实现页面缓存，请继续往下看。

:::warning 注意
开启缓存必须保证每个页面组件必须设置 name ，并且确保 name 唯一。
:::

## 标签栏关闭

首先需要在框架配置里设置（基础版无需设置）。

```js:no-line-numbers
enableTabbar: false
```

接下来我们只需要在需要进行缓存的路由 meta 对象里配置 cache 参数即可。这个参数可接受以下 3 种类型：

- `boolean`
- `string`
- `array`

`boolean` 很好理解，当设置为 `true` 时，该页面只要一被访问，就会被缓存，这也是大部分同类框架的方案。例如有一个新闻管理的模块，我们把**新闻列表页**设置为 `cache: true` 后并访问，然后从**新闻列表页**点击某条记录进入**新闻详情页**，这时候再从**新闻详情页**返回**新闻列表页**时，**新闻列表页**上的数据是不会重新加载，而是保留了当时离开时的状态。

但这个方案也有一个弊端，就是该页面一旦访问就永久被缓存住了（除非手动刷新或点击框架提供的刷新按钮），如果用户从**新闻列表页**进入的不是**新闻详情页**，而是其它模块的页面，这时候其实是不希望**新闻列表页**被缓存的。这种情况下，框架支持设置 `string` 和 `array` 两个类型的参数值。

首先不管设置 `string` 还是 `array` ，你需要设置的值，都是路由的 name 。

怎么理解呢？还是用上面的例子，如果有两个模块，一个新闻管理，一个用户管理。当从**新闻列表页**进入**新闻详情页**的时候，需要对**新闻列表页**进行缓存，而从**新闻列表页**进入**用户列表页**，则不需要对**新闻列表页**进行缓存，我们就可以对**新闻列表页**的路由设置成：

```js:no-line-numbers {9}
{
    path: '/news',
    children: [
        {
            path: 'list',
            name: 'NewsList'
            meta: {
                title: '新闻列表',
                cache: 'NewsDetail'
            }
        },
        {
            path: 'detail/:id',
            name: 'NewsDetail',
            meta: {
                title: '新闻详情',
                sidebar: false,
                activeMenu: '/news/list'
            }
        }
    ]
}
```

这表示从**新闻列表页**进入**新闻详情页**时，**新闻列表页**才会被缓存，进入其它任何页面都不会缓存。

当然也可将 `cache` 设置成 name 数组。

```js:no-line-numbers {9}
{
    path: '/news',
    children: [
        {
            path: 'list',
            name: 'NewsList'
            meta: {
                title: '新闻列表',
                cache: ['NewsDetail', 'NewsCreate']
            }
        },
        {
            path: 'detail/:id',
            name: 'NewsDetail',
            meta: {
                title: '新闻详情',
                sidebar: false,
                activeMenu: '/news/list'
            }
        },
        {
            path: 'create',
            name: 'NewsCreate',
            meta: {
                title: '新增新闻',
                sidebar: false,
                activeMenu: '/news/list'
            }
        }
    ]
}
```

这样就表示从**新闻列表页**进入**新闻详情页**或**新增新闻页**时，**新闻列表页**才会被缓存，进入其它任何页面都不会缓存。

## 标签栏开启 <Badge type="tip" text="专业版" vertical="top" />

:::tip
请确保已阅读《[标签栏 - 标签页合并](tabbar.md#标签页合并)》。
:::

当你了解标签页是否合并这两种展现形式后，我们再接着说如何针对性的做页面缓存。

### 标签页不合并

这种情况下，访问每个路由都会新建一个标签页，这也就意味着，缓存处理可以相对简单粗暴。因为不确定用户会怎样切换标签页，所以可以直接给需要缓存的路由设置 `cache: true` 即可。

当点击关闭标签页时，缓存会自动删除，当然手动调用[关闭当前标签页](tabbar.md#关闭当前标签页)的方法也会删除缓存。

### 标签页合并

当标签页合并时，我们从**新闻列表页**进入**新增新闻页**后，进行了一些数据填写，这时候再点开其它模块的页面，例如**用户列表页**，此时标签栏里有 2 个标签页，分别是*新增新闻*和*用户列表*，这时候从**用户列表页**切换回**新增新闻页**，并且想让它保持住离开时的状态，只能设置 `cache: true` ，因为从**新闻列表页**跳转到其它任何页面，都需要将它进行缓存住。但这个时候问题来了，如果从**新增新闻页**返回**新闻列表页**时，是需要清除缓存的，所以框架提供了另一个参数 `noCache` ，来看下面的路由配置。

```js:no-line-numbers {19-20,30-31}
{
    path: '/news',
    children: [
        {
            path: 'list',
            name: 'NewsList'
            meta: {
                title: '新闻列表',
                cache: true
            }
        },
        {
            path: 'detail/:id',
            name: 'NewsDetail',
            meta: {
                title: '新闻详情',
                sidebar: false,
                activeMenu: '/news/list',
                cache: true,
                noCache: 'NewsList'
            }
        },
        {
            path: 'create',
            name: 'NewsCreate',
            meta: {
                title: '新增新闻',
                sidebar: false,
                activeMenu: '/news/list',
                cache: true,
                noCache: 'NewsList'
            }
        }
    ]
}
```

表示从**新闻详情页**或**新增新闻页**进入**新闻列表页**时，会删除页面缓存，否则页面始终开启缓存。

这也说明 `noCache` 这个参数必须在 `cache: true` 时才会起作用。