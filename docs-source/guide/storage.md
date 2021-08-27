# 私有 Storage 数据 <Badge type="tip" text="专业版" vertical="top" />

由于 localStorage 和 sessionStorage 的同源策略，同一域名下的 storage 数据会共享。如果你恰好需要在同一域名下部署两套(及以上)系统，不可避免会出现 storage 数据冲突，框架提供了一个 storage 类来解决这个问题。

解决同源 storage 数据冲突的方式就是增加前缀区分，首先需要在框架配置里设置，这里需要你设置一个唯一且不重名的前缀。

```js:no-line-numbers
storagePrefix: 'fa_'
```

然后在需要使用到 storage 的地方引入：

```js:no-line-numbers
import storage from '@/util/storage'
```

这个类封装了 `setItem()` ，`getItem()` ，`removeItem()` ，`clear()` 方法，同时还增加了一个 `has()` 方法用来判断对象是否存在：

:::: code-group
::: code-group-item localStorage
```js:no-line-numbers
storage.local.has(key)
storage.local.get(key)
storage.local.set(key, value)
storage.local.remove(key)
storage.local.clear()
```
:::
::: code-group-item sessionStorage
```js:no-line-numbers
storage.session.has(key)
storage.session.get(key)
storage.session.set(key, value)
storage.session.remove(key)
storage.session.clear()
```
:::
::::

:::warning 注意
由于 localStorage 有容量上限，一般为 5M ，如果一同域名下部署两套系统，意味着两套系统共享 5M 容量，所以不建议在同一域名部署太多套系统，避免出现 localStorage 不够用的情况。
:::
