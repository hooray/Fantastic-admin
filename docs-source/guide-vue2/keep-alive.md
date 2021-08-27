# 二级页面缓存

由于专业版提供了标签栏功能，而标签栏开启和关闭是两种不同的缓存处理逻辑，避免两种逻辑冲突，在框架开发前需要确定标签栏是否开启或关闭。基础版只需阅读**标签栏关闭**部分。

## 标签栏关闭

:::tip 说明
页面缓存只支持跳转至平级或下级路由，跳转上级路由则无法缓存，以下介绍建议结合代码与演示加深理解。

页面缓存是通过 Vue 内置的 [`<keep-alive />`](https://cn.vuejs.org/v2/api/#keep-alive) 组件的 `include` 特性实现，如果想深入了解框架实现方式，请先确保自己了解 `<keep-alive />` 组件。
:::

多级页面缓存最常见的一个使用场景就是列表页和详情页，例如一个新闻模块，我在列表页修改了搜索条件，然后又翻了几页，最后点击进入某篇新闻的详情页，进行编辑操作后，返回列表页，这时候列表页已经是初始状态了，如果我还想继续之前的操作，就得重新修改搜索条件，然后翻页到之前的页数，这样的设计明显是不合理的。

框架在这块已经做好了基础功能封装，你只需要知道如何调用，就可以实现页面缓存的需求了。我们来看下实际应用代码：

```js
beforeRouteEnter(to, from, next) {
    // 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态
    next(vm => {
        vm.$store.commit('keepAlive/add', 'ListPageName')
    })
},
beforeRouteLeave(to, from, next) {
    // 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存
    // 所以下面的代码意思就是，如果目标路由的 name 不是 detailRouterName 或 otherDetailRouterName ，则将当前页面的 name 从 keep-alive 中删除
    if (!['detailRouterName', 'otherDetailRouterName'].includes(to.name)) {
        // 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name
        this.$store.commit('keepAlive/remove', 'ListPageName')
    }
    next()
}
```

通过上面的例子，我们可以知道，页面缓存的核心实现都离不开路由的 name ，所以在配置路由的时候，必须给每个路由设置上 name 属性，并确保 name 唯一。

解决了缓存的问题，另一个需求就产生了，就是页面虽然缓存了，那页面上的数据要怎么更新了，比如在详情页编辑了新闻，返回列表页的时候，如何更新列表页的数据。

要解决这个问题，就得引入事件总线的概念了，事件总线就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，组件可以上下平行地通知其他组件。框架已经封装好了事件总线，看下如何使用吧。

```js
// 列表页
mounted() {
	this.getDataList()
    // 将 getDataList() 方法绑定到事件总线上
    this.$eventBus.$on('getDataList', () => {
        this.getDataList()
    })
},
beforeDestroy() {
	// 页面销毁时解绑事件总线上的 getDataList() 方法
    this.$eventBus.$off('getDataList')
}

// 详情页
// 在需要更新列表的地方，通过事件总线更新列表页数据
this.$eventBus.$emit('getDataList')
```

## 标签栏开启

当开启标签栏功能后，每一个打开的标签页都会进行缓存，前提是页面组件必须设置过 `name` ，是组件的 `name` ，不是路由的 `name` 。

缓存太多页面会造成浏览器性能不必要的开销，所以如果部分页面无需缓存，将页面组件的 `name` 删除即可。