# gzip 支持

除了使用 CDN 来提高加载访问速度外，如果后端服务器支持，还可以开启 gzip 进行文件压缩，这是一种更显著的减小文件体积的处理办法，通常可以减小 60% 以上的体积。

开启方式也很简单，只需在 `.env.*` 配置文件里修改为：

```
VUE_APP_GZIP = ON
```

开启后再进行项目打包时，会同时生成 `.gz` 文件。

最后记得开启服务端对 gzip 的支持，以 nginx 为例，需要在配置里加上 `gzip_static on;` 这行配置，如果 nginx 中的 http_gzip_static_module 模块不存在，则还需要进行添加，可参考《[yum安装下的nginx，如何添加模块，和添加第三方模块](https://www.cnblogs.com/caicaizi/p/10241700.html)》