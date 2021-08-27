# 构建与预览

## 构建

项目开发完成之后，可以执行 `pnpm build` 命令进行构建，构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件。

如果是需要构建测试环境，则执行 `pnpm build:test` 命令，对应会在根目录生成 dist-test 文件夹。

## 预览

生成好的 dist 文件夹一般需要部署至服务器才算部署发布成功，但为了保证构建出来的文件能正常运行，开发者通常希望能在本地先预览一下，可执行 `pnpm serve` 或 `pnpm serve:test` 命令预览不同环境构建出的文件夹。

## 压缩

在环境配置文件里设置 `VITE_BUILD_COMPRESS` 即可在构建时生成 `.gz` 或 `.br` 文件。

:::: code-group
::: code-group-item 开启 gzip
```dot:no-line-numbers
VITE_BUILD_COMPRESS = gzip
```
:::
::: code-group-item 开启 brotli
```dot:no-line-numbers
VITE_BUILD_COMPRESS = brotli
```
:::
::: code-group-item 同时开启 gzip 和 brotli
```dot:no-line-numbers
VITE_BUILD_COMPRESS = gzip,brotli
```
:::
::::

brotli 是比 gzip 压缩率更高的算法，可以与 gzip 共存不会冲突。

两者均需要 nginx 安装指定模块并开启后才会生效。

## 其它设置

在环境配置文件里除了可以设置压缩选项，还可设置：

```dot:no-line-numbers
# 是否在打包时生成 sourcemap
VITE_BUILD_SOURCEMAP = true
# 是否在打包时删除 console 代码
VITE_BUILD_DROP_CONSOLE = true
```

### 生成 PWA 应用 <Badge type="tip" text="专业版" vertical="top" />

在环境配置文件里开启 PWA 支持

```dot:no-line-numbers
# 是否在打包时候生成PWA
VITE_BUILD_PWA = true
```

同时在 `./vite/plugins/pwa.js` 文件里修改 manifest 信息，对应的图片目录为 `./public/pwa_icons/` 。