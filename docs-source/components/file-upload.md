# FileUpload 文件上传

## Props

| 参数    | 说明                                                                         | 类型    | 可选值 | 默认值         |
| :------ | :--------------------------------------------------------------------------- | :------ | :----- | :------------- |
| action  | 必选参数，上传的地址                                                         | string  | -      | -              |
| headers | 设置上传的请求头部                                                           | object  | -      | -              |
| data    | 上传时附带的额外参数                                                         | object  | -      | -              |
| name    | 上传的文件字段名                                                             | string  | -      | file           |
| size    | 上传文件大小限制，单位为MB                                                   | number  | -      | 2              |
| max     | 上传数量限制                                                                 | number  | -      | 3              |
| files   | 上传的文件列表，例如：[{name: 'xxx.jpg', url: 'http://xxx.cdn.com/xxx.jpg'}] | array   | -      | []             |
| notip   | 是否隐藏提示栏                                                               | boolean | -      | false          |
| ext     | 支持的文件类型                                                               | array   | -      | ['zip', 'rar'] |