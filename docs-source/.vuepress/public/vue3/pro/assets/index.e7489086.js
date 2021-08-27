
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as t,o as a,s as e,i as s,w as i,A as n,x as l,v as o}from"./vendor.5d2d2ca8.js";const g={methods:{toggle(){this.$store.state.settings.mainPageMaximizeStatus?this.$mainPageMaximize(!1):this.$mainPageMaximize(!0)}}},m=o("p",null,"专业版可通过双击标签页，或在标签页上右键并选择“最大化”进入。",-1),r=o("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1);g.render=function(o,g,u,d,c,p){const x=t("page-header"),f=t("el-button"),h=t("page-main");return a(),e("div",null,[s(x,{title:"主页面最大化",content:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),s(h,null,{default:i((()=>[m,r,s(f,{onClick:p.toggle},{default:i((()=>[n(l(o.$store.state.settings.mainPageMaximizeStatus?"退出":"开启")+"最大化",1)])),_:1},8,["onClick"])])),_:1})])};export{g as default};
