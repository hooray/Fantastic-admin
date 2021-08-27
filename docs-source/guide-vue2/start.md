# 开始

阅读开发文档前，请确保手上已经有 Fantastic-admin 源码，因为文档中提及的内容，都是需要在本地项目中编写或修改代码并运行才能呈现的。如果还没有源码，可以通过下面两种方式获取：

## 基础版

:::warning 分支说明
- `vue2` 演示源码，即在**框架源码**基础上提供各种特性展示，含有大量示例代码
- `template-vue2` 框架源码，不含示例代码，适合直接用于项目开发
:::

- 手动下载
  - 去 [Gitee](https://gitee.com/hooray/fantastic-admin) 下载
  - 去 [Github](https://github.com/hooray/fantastic-admin) 下载
- git 克隆

:::: code-group
::: code-group-item 从 Gitee 克隆
```bash:no-line-numbers
# 拉取演示源码
git clone -b vue2 https://gitee.com/hooray/fantastic-admin.git
# 拉取框架源码
git clone -b template-vue2 https://gitee.com/hooray/fantastic-admin.git
```
:::
::: code-group-item 从 Github 克隆
```bash:no-line-numbers
# 拉取演示源码
git clone -b vue2 https://github.com/hooray/fantastic-admin.git
# 拉取框架源码
git clone -b template-vue2 https://gitee.com/hooray/fantastic-admin.git
```
:::
::::

## 专业版

[去购买](../buy.md)

## 运行

本框架需要你本地安装 [Node.js](https://nodejs.org/zh-cn/) 和 [Git](https://git-scm.com/) ，同时我们强烈建议你安装并使用 [Yarn](https://classic.yarnpkg.com/zh-Hans/) 做为包管理工具。

做好准备工作后，依次执行下面的命令：

```bash
# 克隆项目（如果本地已有源码，可跳过这步）
# 可选择从 github 或 gitee 克隆项目
git clone https://github.com/hooray/fantastic-admin.git
# 或者
git clone https://gitee.com/hooray/fantastic-admin.git

# 进入项目目录
cd fantastic-admin
# 专业版
cd fantastic-admin-pro

# 安装项目依赖（框架使用 yarn 进行依赖包的版本锁定，建议使用 yarn 进行安装）
yarn
# 或者
npm install

# 运行项目
yarn run serve
# 或者
npm run serve
```

运行成功后，会自动访问页面，默认情况下，地址为 `http://localhost:8080`