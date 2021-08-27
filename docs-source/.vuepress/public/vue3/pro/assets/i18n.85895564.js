
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
import{r as e,o as n,s as t,i as a,w as o}from"./vendor.5d2d2ca8.js";function r(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{"zh-cn":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多语言切换，还支持 Vue 单文件模式语言切换，你可以尝试在这个页面点击右上角的语言切换试试"])}},"zh-tw":{intro:e=>{const{normalize:n}=e;return n(["除了支持全局多語言切換，還支持 Vue 單文件模式語言切換，你可以嘗試在這個頁面點擊右上角的語言切換試試"])}},en:{intro:e=>{const{normalize:n}=e;return n(["In addition to global multi-language switch, also support Vue single file mode language switch, you can try to click on the top right corner of the page to switch language"])}}}})}const i={data:()=>({page:1,pageSize:100}),methods:{handleSizeChange(e){this.pageSize=e},handleCurrentChange(e){this.page=e}}};r(i),i.render=function(r,i,l,g,u,s){const h=e("page-header"),p=e("el-pagination"),c=e("page-main");return n(),t("div",null,[a(h,{title:r.$t("route.i18n"),content:r.$t("intro")},null,8,["title","content"]),a(c,{title:"Element 组件"},{default:o((()=>[a(p,{"current-page":u.page,"page-sizes":[100,200,300,400],"page-size":u.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:s.handleSizeChange,onCurrentChange:s.handleCurrentChange},null,8,["current-page","page-size","onSizeChange","onCurrentChange"])])),_:1})])};export{i as default};
