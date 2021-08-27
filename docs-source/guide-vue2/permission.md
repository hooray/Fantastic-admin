# 权限验证

请在框架配置里设置 `openPermission: true` 开启权限功能。

## 路由权限

在路由的 `meta` 配置项中，其中有一个 `auth` 参数，这个就是用来配置路由的权限，一个路由可以配置多个权限，当配置多个权限时，只要满足其中任何一个，则视为用户有访问该路由的权限，如下：

```js
meta: {
    auth: ['news.browse', 'news.edit']
}
```

权限的格式为 `xxx.yyy` ，其中 `xxx` 表示模块名， `yyy` 表示权限类型，通常有 4 种类型，分别是：

- `browse` 浏览
- `create` 创建
- `edit` 编辑
- `delete` 删除

当然也不局限于这 4 种，可以根据实际业务类型做扩充。

路由权限是比较暴力的，如果没有权限则该路由直接就无法访问，但在实际业务中，我们遇到更多的情况是，可以访问该路由页面，但会根据不同权限，使用页面里的不同功能，这时候就需要用到下面三种鉴权方式。

## 鉴权组件

页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 `<Auth>` 和 `<AuthAll>` 组件，具体使用如下：

```html
<!-- 单权限验证 -->
<Auth :value="'department.create'">
    你有该权限
    <template slot="no-auth">
        你没有该权限
    </template>
</Auth>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<Auth :value="['department.create', 'department.edit']">
    你有该权限
    <template slot="no-auth">
        你没有该权限
    </template>
</Auth>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<AuthAll :value="['department.create', 'department.edit']">
    你有该权限
    <template slot="no-auth">
        你没有该权限
    </template>
</AuthAll>
```

## 鉴权指令

对于单个元素，也提供了 `v-auth` 和 `v-auth-all` 鉴权指令，使用上对比鉴权组件更方便，当然它能做的事情也更简单。

```html
<!-- 单权限验证 -->
<button v-auth="'department.create'">新增部门</button>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<button v-auth="['department.create', 'department.edit']">新增部门</button>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<button v-auth-all="['department.create', 'department.edit']">新增部门</button>
```

## 鉴权函数

鉴权组件和鉴权指令控制的是页面上的元素是否展示，而鉴权函数则更多是使用在业务流程代码里的权限判断。

```js
// 单权限验证，返回 true 或 false
this.$auth('department.create')

// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false
this.$auth(['department.create', 'department.edit'])

// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false
this.$authAll(['department.create', 'department.edit'])
```

## 演示

在 `src/store/modules/user.js` 文件里 action 下有个 `getPermissions` 的方法，在实际项目开发中，记得修改该方法。

```js
// 获取我的权限
getPermissions({state, commit}) {
    return new Promise(resolve => {
        // 通过 mock 获取权限
        api.get('mock/member/permission', {
            params: {
                account: state.account
            }
        }).then(res => {
            commit('setPermissions', res.data.permissions)
            resolve(res.data.permissions)
        })
    })
}
```

在框架演示中，提供了两组权限，你可以在“权限验证”栏目里切换帐号查看不同权限下的效果。如果使用其它用户名登录，则看不到“权限验证”模块。

## 小技巧

由于权限配置不涉及角色，所以在实现上会更灵活，开发者可自行扩展出角色模块，根据不同角色动态设置该角色所拥有的权限，然后用户与角色挂钩，这样就无需繁琐的给每个用户重复配置权限。

当然了，业务有大有小，针对一些小型的管理系统，对权限这块没有这么多复杂的要求，甚至什么角色拥有什么权限都是写死固定的，不需要自由配置。针对这种情况，也可以很方便的实现。

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
        auth: ['admin', 'editor']
    },
    children: [
        {
            path: 'detail',
            name: 'bannerCreate',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
            meta: {
                title: '新增 Banner',
                auth: ['admin', 'editor']
            }
        },
        {
            path: 'list',
            name: 'bannerList',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/list'),
            meta: {
                title: 'Banner 列表',
                auth: ['admin']
            }
        },
        {
            path: 'detail/:id',
            name: 'bannerEdit',
            component: () => import(/* webpackChunkName: 'banner' */ '@/views/banner/detail'),
            meta: {
                title: '编辑 Banner',
                auth: ['admin'],
                sidebar: false
            }
        }
    ]
}
```

如上所示，假设有 2 种角色，一个是管理员 `admin` ，一个是编辑员 `editor` ，如果用户是 `admin` 权限，则可以操作 Banner 管理下的所有功能，如果是 `editor` 权限，则只能进行新增 Banner 操作。