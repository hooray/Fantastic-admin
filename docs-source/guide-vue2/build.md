# 构建

当项目开发完毕，只需运行以下命令就可以打包整个项目：

```bash
# 打包测试环境
npm run build:test
# or
yarn run build:test

# 打包正式环境
npm run build
# or
yarn run build
```

构建打包成功之后，会在根目录生成 `dist` 文件夹（测试环境打包出的文件夹为 `dist-test` ），里面就是构建打包好的文件。