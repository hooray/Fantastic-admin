# Vuex

## 介绍

Vuex 同样实现了自动注册，开发只需关注 `./store/modules/` 文件夹里的文件即可，请根据模块区分文件。

新建模板：

```js
// example.js
const state = {}
const getters = {}
const actions = {}
const mutations = {}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
```

文件默认开启命名空间，文件名会默认注册为模块名，使用方法：

```js
this.$store.state.example.xxx;
this.$store.getters['example/xxx'];
this.$store.dispatch('example/xxx');
this.$store.commit('example/xxx');
```

## settings

负责存放配置相关数据，不建议在该文件进行二次开发。

## keepAlive

负责记录页面缓存的组件 `name` 名，不建议在该文件进行二次开发。

## menu

负责生成导航菜单的路由数据，不建议在该文件进行二次开发。

## tabbar

负责记录标签栏状态，不建议在该文件进行二次开发。

当配置开启标签栏功能时，页面组件的 `name` 会在打开页面时自动加入缓存列表，如果页面无需缓存，则不设置 `name` 即可，注意，是页面组件的 `name` ，不是路由的 `name` 。

固定的标签会将数据存放到 `localStorage` 里。

## user

负责实现用户的登录、登出，以及用户信息处理。

这个文件是需要二次开发的，其中 `getters.isLogin`、`dispatch('login')`、`commit('setUserData')`、`commit('removeUserData')` 为必须修改的地方，主要负责校验是否登录、登录操作、登录成功记录用户信息、登出清除用户信息。

按框架的设计，用户登录时不获取权限数据，登录成功后通过 `dispatch('getPermissions')` 获取用户权限数据，如果你的系统是在登录时就能拿到用户权限数据，那在这个方法里可以只保留一句 `resolve(permissions)` ，只需将权限数据 resolve 出去即可。