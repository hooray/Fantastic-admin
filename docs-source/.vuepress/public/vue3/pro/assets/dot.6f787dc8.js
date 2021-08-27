
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as t,s as a,i as n,w as s,v as o,x as d,A as l}from"./vendor.5d2d2ca8.js";const i={methods:{change(){this.$store.commit("menuBadge/switchDot")}}},r=l("切换");i.render=function(l,i,u,c,m,g){const h=e("page-header"),f=e("el-button"),p=e("page-main");return t(),a("div",null,[n(h,{title:"点标记",content:"搭配 Vuex 可实现动态设置"}),n(p,null,{default:s((()=>[o("div",null,"当前 badge 值："+d(l.$store.state.menuBadge.dot),1),n(f,{onClick:g.change},{default:s((()=>[r])),_:1},8,["onClick"])])),_:1})])};export{i as default};
