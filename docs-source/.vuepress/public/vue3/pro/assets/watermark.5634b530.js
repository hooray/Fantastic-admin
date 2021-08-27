
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as t,s as a,i as r,w as n,A as l}from"./vendor.5d2d2ca8.js";const o={computed:{enableWatermark:{get:function(){return this.$store.state.settings.enableWatermark},set:function(e){this.$store.commit("settings/updateThemeSetting",{enableWatermark:e})}}}},s=l("开启"),d=l("关闭");o.render=function(l,o,u,i,m,c){const f=e("page-header"),p=e("el-radio-button"),b=e("el-radio-group"),g=e("page-main");return t(),a("div",null,[r(f,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),r(g,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:n((()=>[r(b,{modelValue:c.enableWatermark,"onUpdate:modelValue":o[0]||(o[0]=e=>c.enableWatermark=e)},{default:n((()=>[r(p,{label:!0},{default:n((()=>[s])),_:1}),r(p,{label:!1},{default:n((()=>[d])),_:1})])),_:1},8,["modelValue"])])),_:1})])};export{o as default};
