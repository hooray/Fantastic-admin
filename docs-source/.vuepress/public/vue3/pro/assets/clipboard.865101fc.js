
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as t,s as l,i as o,w as a,A as n}from"./vendor.5d2d2ca8.js";const i={data:()=>({input:"",input2:""}),methods:{copy(){this.$clipboard(this.input),this.$message.success(`复制成功：${this.input}`)},open(e){window.open(e,"top")}}},u=n("vue3-clipboard 官网"),d=n("复制");i.render=function(n,i,p,s,c,r){const m=e("el-button"),f=e("page-header"),h=e("el-input"),V=e("page-main");return t(),l("div",null,[o(f,{title:"剪贴板"},{default:a((()=>[o(m,{icon:"el-icon-link",onClick:i[0]||(i[0]=e=>r.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:a((()=>[u])),_:1})])),_:1}),o(V,{title:"输入内容，并点击复制按钮"},{default:a((()=>[o(h,{modelValue:c.input,"onUpdate:modelValue":i[1]||(i[1]=e=>c.input=e)},{append:a((()=>[o(m,{onClick:r.copy},{default:a((()=>[d])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),o(V,{title:"复制成功后可在这粘贴测试"},{default:a((()=>[o(h,{modelValue:c.input2,"onUpdate:modelValue":i[2]||(i[2]=e=>c.input2=e)},null,8,["modelValue"])])),_:1})])};export{i as default};
