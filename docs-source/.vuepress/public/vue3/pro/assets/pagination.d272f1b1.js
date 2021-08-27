
/**
 * name: Fantastic-admin
 * homepage: https://hooray.gitee.io/fantastic-admin/
 */
    
var t={data:()=>({loading:!1,sort:null,order:null,pagination:{page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper"}}),methods:{getParams(t={}){const i={from:(this.pagination.page-1)*this.pagination.size,limit:this.pagination.size};return this.sort&&this.order&&(i.sort=this.sort,i.order=this.order),Object.assign(i,t),i},onSizeChange(t){this.pagination.size=t,this.getDataList()},onCurrentChange(t){this.pagination.page=t,this.getDataList()},onSortChange(t){t.order?(this.sort=t.prop,this.order="ascending"===t.order?"asc":"desc"):(this.sort=null,this.order=null),this.getDataList()}}};export{t as p};
