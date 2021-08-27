# 标准模块 <Badge type="tip" text="专业版" vertical="top" />

## 用法说明

在《[快速生成文件](plop)》里说到，通过 `yarn new` 指令可以生成一个标准模块，那标准模块是什么样一个标准呢？那就实际生成一个模块来看一下。

```
? 请选择需要创建的模式： module - 创建标准模块（包含列表页&详情页）
? 请选择模块创建目录 src/views
? 请输入模块名 test
? 请输入模块中文名称 测试模块
√  ++ \src\views\test\list.vue
√  ++ \src\views\test\detail.vue
√  ++ \src\views\test\components\DetailForm\index.vue
√  ++ \src\views\test\components\FormDialog\index.vue
```

通过一步步的提示设置，现在已经创建好了一个测试模块，先去路由里配置一下，看看实际页面上展示效果如何。

首先在 `./src/router/modules/` 目录下新建一个 `test.js` 文件

```js
import Layout from '@/layout'

export default {
    path: '/test',
    component: Layout,
    redirect: '/test/list',
    name: 'test',
    meta: {
        title: '测试模块'
    },
    children: [
        {
            path: 'list',
            name: 'testList',
            component: () => import(/* webpackChunkName: 'test' */ '@/views/test/list'),
            meta: {
                title: '列表'
            }
        },
        {
            path: 'detail',
            name: 'testDetail',
            component: () => import(/* webpackChunkName: 'test' */ '@/views/test/detail'),
            meta: {
                title: '详情',
                sidebar: false,
                activeMenu: '/test/list'
            }
        }
    ]
}
```

然后到 `./src/router/index.js` 文件里加上这个路由配置文件的引用。

```js {1,11}
import Test from './modules/test'

let asyncRoutes = [
    {
        meta: {
            title: '演示',
            icon: 'sidebar-default'
        },
        children: [
            ...
            Test
        ]
    },
    ...
]
```

这样就能访问到我们的页面了，但是这时候点击新增按钮是会跳转到 404 页面的，那是因为在 `list.vue` 文件中，我们需要将详情页路由的 `name` 替换掉。

```js
onCreate() {
    if (!this.dialogMode) {
        this.$router.push({
            name: 'testDetail'
        })
    } else {
        this.detailFormDialog.id = ''
        this.detailFormDialog.visible = true
    }
},
onEdit(row) {
    if (!this.dialogMode) {
        this.$router.push({
            name: 'testDetail',
            params: {
                id: row.id
            }
        })
    } else {
        this.detailFormDialog.id = row.id
        this.detailFormDialog.visible = true
    }
}
```

<p><img :src="$withBase('/vue2/module1.gif')" /></p>

这样，我们的一个测试模块就初步创建好了。

## 功能介绍

功能部分的介绍主要还是要看代码，先从列表页 `list.vue` 开始。

最先看到的是这段 `mixins` 混入，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 `./src/mixins/pagination.js` 方便复用。

```js
import paginationMixin from '@/mixins/pagination'

export default {
    ...
    mixins: [paginationMixin],
    ...
}
```

接着在 `data` 对象里存放的是标准模块提供的一些配置项和必要数据参数字段，例如你可以开启详情弹框模式，或者开启批量操作栏，这些都在 `data` 对象里设置即可。

```js {4,16}
data() {
    return {
        // 是否开启详情弹框模式
        dialogMode: true,
        // 详情弹框
        detailFormDialog: {
            visible: false,
            id: ''
        },
        // 搜索
        search: {
            name: ''
        },
        // 批量操作
        batch: {
            enable: true,
            selectionDataList: []
        },
        // 列表数据
        dataList: []
    }
}
```

<p><img :src="$withBase('/vue2/module2.gif')" /></p>

再往下就是页面缓存相关的代码了，记得修改高亮部分代码。

```js {13}
beforeRouteEnter(to, from, next) {
    // 进入页面时，先将当前页面的 name 信息存入 keep-alive 全局状态
    next(vm => {
        if (!vm.dialogMode) {
            vm.$store.commit('keepAlive/add', 'TestList')
        }
    })
},
beforeRouteLeave(to, from, next) {
    if (!this.dialogMode) {
        // 因为并不是所有的路由跳转都需要将当前页面进行缓存，例如最常见的情况，从列表页进入详情页，则需要将列表页缓存，而从列表页跳转到其它页面，则不需要将列表页缓存
        // 所以下面的代码意思就是，如果目标路由的 name 不在指定的数组内，则将当前页面的 name 从 keep-alive 中删除
        if (!['testDetail'].includes(to.name)) {
            // 注意：上面校验的是路由的 name ，下面记录的是当前页面的 name
            this.$store.commit('keepAlive/remove', 'TestList')
        }
    }
    next()
},
mounted() {
    this.getDataList()
    if (!this.dialogMode) {
        this.$eventBus.$on('getDataList', () => {
            this.getDataList()
        })
    }
},
beforeDestroy() {
    if (!this.dialogMode) {
        this.$eventBus.$off('getDataList')
    }
}
```

再往下就是需要你自己编写业务代码的部分了。

详情页代码就不贴了，相对比较简单，因为把表单部分单独封装成组件存放在 `./src/views/[模块文件夹]/components/DetailForm/index.vue` 里了，同样你在 `components/` 文件夹下还能看到另外一个 `FormDialog` 的文件夹，这样的用意其实很明显了，目的就是让表单可以复用，**可以通过传统路由跳转的形式进入详情页，也可以通过弹框的形式打开详情页**。

可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？

这样设计的目的主要有两点：

1. **方便后期维护**。关于详情页到底是用弹框还是路由跳转的形式，我们的原则是，表单填写项如果比较少，用弹框形式，反之用路由跳转形式，但考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候要从弹框改成路由跳转，或者从路由跳转改成弹框，都很麻烦。所以方便后期维护，这部分还是做成了两种形式共存，通过配置一键切换。
2. **跨模块的组件调用**。例如有两个模块，一个用户模块，一个部门模块，用户详情里有一项是选择部门，但是新增用户的时候部门可能还没创建，这时候表单已经填写一半了，如果让用户离开页面去部门模块里创建好再回来新建用户，先不说数据如何缓存的问题，光是操作流被打断，页面跳来跳去就很影响用户体验了。所以这个时候就可以在选择部门后面放一个新增部门的按钮，点击后弹出新增部门的弹框，新增完成后弹框关闭，可以继续在新增用户界面做后续操作。

---

当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。