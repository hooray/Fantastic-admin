# Vuex

Vuex 同样实现了自动注册，开发只需关注 `./src/store/modules/` 文件夹里的文件即可，同样也按模块区分文件。注意，需要开启命名空间，文件名即模块名。

例如新建一个 `example.js` 的文件：

```js
const state = () => ({})
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

使用方法：

```js:no-line-numbers
this.$store.state.example.xxx;
this.$store.getters['example/xxx'];
this.$store.dispatch('example/xxx');
this.$store.commit('example/xxx');
```
