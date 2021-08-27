# 标准模块 <Badge type="tip" text="专业版" vertical="top" />

在《[代码文件自动生成 - module](plop.md#module)》里介绍了如何快速生成一个标准模块，这个标准模块是一个最基础的 CURD 模块，它包含列表页和编辑页，同时提供了搜索和删除的功能，并且同时也可以生成对应的 mock 文件，在这基础上可以更方便的进行业务扩展。

下面我就实际操作一遍，并介绍一下这个标准模块有哪些特性。

# 用法说明

```:no-line-numbers
? 请选择需要创建的模式： module - 创建标准模块（包含列表页&详情页）
? 请选择模块创建目录 src/views
? 请输入模块名 example
? 请输入模块中文名称 演示
? 是否生成 Mock Yes
√  ++ \src\views\example\list.vue
√  ++ \src\views\example\detail.vue
√  ++ \src\views\example\components\DetailForm\index.vue
√  ++ \src\views\example\components\FormDialog\index.vue
√  ++ \src\mock\example.js
```

这里我已经通过命令在 `./src/views/` 目录下创建好了一个 example 文件夹，并且也生成了 mock 数据。接下来需要去配置下路由，这样我们才可以在导航栏里访问到。

首先在 `./src/router/modules/` 目录下新建一个与文件夹同名的 `example.js` 文件，并在里面复制以下代码：

```js:no-line-numbers
const Layout = () => import('@/layout/index.vue')

export default {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'example',
    meta: {
        title: '演示'
    },
    children: [
        {
            path: 'list',
            name: 'exampleList',
            component: () => import('@/views/example/list.vue'),
            meta: {
                title: '列表'
            }
        },
        {
            path: 'create',
            name: 'exampleCreate',
            component: () => import('@/views/example/detail.vue'),
            meta: {
                title: '新增',
                sidebar: false,
                activeMenu: '/example/list'
            }
        },
        {
            path: 'edit/:id',
            name: 'exampleEdit',
            component: () => import('@/views/example/detail.vue'),
            meta: {
                title: '编辑',
                sidebar: false,
                activeMenu: '/example/list'
            }
        }
    ]
}
```

然后到 `./src/router/index.js` 文件里加上这个路由配置文件的引用。

```js:no-line-numbers {1,12}
import Example from './modules/example'

const asyncRoutes = [
	...,
    {
        meta: {
            title: '页面',
            icon: 'ri-pages-line'
        },
        children: [
            ...PagesExample,
            Example
        ]
    },
    ...
]
```

最后，我们还需要替换几处页面中路由的 `name` 因为需要和我们配置的路由 `name` 一致，才可以正确跳转页面。

先打开 `list.vue` 文件，找到 `onCreate()` 和 `onEdit()` 方法并替换：

```js:no-line-numbers {4,14}
onCreate() {
    if (!this.dialogMode) {
        this.$router.push({
            name: 'exampleCreate'
        })
    } else {
        this.detailFormDialog.id = ''
        this.detailFormDialog.visible = true
    }
},
onEdit(row) {
    if (!this.dialogMode) {
        this.$router.push({
            name: 'exampleEdit',
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

然后打开 `detail.vue` 文件，替换以下两处：

```html:no-line-number {1}
<page-header :title="$route.name == 'exampleCreate' ? '新增演示' : '编辑演示'">
    <el-button icon="el-icon-arrow-left" size="mini" round @click="goBack">返 回</el-button>
</page-header>
```

```js:no-line-numbers {3,5}
goBack() {
    if (this.$store.state.settings.enableTabbar && !this.$store.state.settings.enableMergeTabbar) {
        this.$tabbar.close({ name: 'exampleList' })
    } else {
        this.$router.push({ name: 'exampleList' })
    }
}
```

这时候就可以通过导航栏访问到我们的页面了，我们的一个演示模块也就初步创建好了。

<p><img :src="$withBase('/module1.gif')" /></p>

## 特性介绍

功能部分的介绍主要还是要看代码，先从列表页 `list.vue` 开始。

最先看到的是这段 `mixins` 混入，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 `./src/mixins/pagination.js` 方便复用。

```js:no-line-numbers
import paginationMixin from '@/mixins/pagination'

export default {
    ...
    mixins: [paginationMixin],
    ...
}
```

接着在 `data` 对象里存放的是标准模块提供的一些配置项和必要数据参数字段。

```js:no-line-numbers {4,16}
data() {
    return {
        // 是否开启详情弹框模式
        dialogMode: false,
        // 详情弹框
        detailFormDialog: {
            visible: false,
            id: ''
        },
        // 搜索
        search: {
            title: ''
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

标准模块提供了两种模式详情模式，默认是页面跳转的方式，你可以修改 `dialogMode: true` 开启详情弹框模式，保存后效果如下：

<p><img :src="$withBase('/vue2/module2.gif')" /></p>

再往下就是需要你自己编写业务代码的部分了。

详情页代码就不介绍了，相对比较简单，表单部分单独封装成组件存放在 `./src/views/[模块文件夹]/components/DetailForm/index.vue` 里了，同样你在 `components/` 文件夹下还能看到另外一个 `FormDialog` 的文件夹，这样的用意是让表单可以复用，**可以通过传统路由跳转的形式进入详情页，也可以通过弹框的形式打开详情页**。

可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？

这样设计的目的主要有两点：

1. **方便后期维护**。关于详情页到底是用弹框还是路由跳转的形式，我们的原则是，表单填写项如果比较少，用弹框形式，反之用路由跳转形式，但考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候要从弹框改成路由跳转，或者从路由跳转改成弹框，都很麻烦。所以方便后期维护，这部分还是做成了两种形式共存，通过配置一键切换。
2. **跨模块的组件调用**。例如有两个模块，一个用户模块，一个部门模块，用户详情里有一项是选择部门，但是新增用户的时候部门可能还没创建，这时候表单已经填写一半了，如果让用户离开页面去部门模块里创建好再回来新建用户，先不说数据如何缓存的问题，光是操作流被打断，页面跳来跳去就很影响用户体验了。所以这个时候就可以在选择部门后面放一个新增部门的按钮，点击后弹出新增部门的弹框，新增完成后弹框关闭，可以继续在新增用户界面做后续操作。

---

当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。