# 全局资源

## SVG 图标

越来越多项目开始使用 SVG 图标做为精灵图的替代品，本框架也提供了 SVG 图标支持，推荐去[阿里巴巴矢量图标库](https://www.iconfont.cn/)下载高质量 SVG 图标。

使用 SVG 图标也很简单，首先将 svg 文件放到 `./src/assets/icons/` 目录下，然后在页面中就可以通过 `<svg-icon />` 组件使用了，name 就是 svg 文件名，如下：

```html:no-line-numbers
<!-- <svg-icon /> 组件无需手动注册即可使用 -->
<svg-icon name="example" />
```

## 图片

框架用到的图片资源都放在 `./src/assets/images/` 目录下，可自行新建文件夹分类管理。

## 精灵图

精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。

:::tip 说明
在 HTTP/1.1 下，因**队头阻塞**的问题，如果在一个页面里需要展示多张小图，建议使用精灵图

但 HTTP/2 的**多路复用**特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图
:::

精灵图原始图片的存放位置位于 `./src/assets/sprites/` 目录下，注意按文件夹区分。

项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 `.scss` 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。

可通过 `@include` 直接使用精灵图，无需手动引入 `.scss` 文件，使用方法如下：

:::: code-group
::: code-group-item 方法 1
```scss:no-line-numbers
// @include [文件夹名称]-sprite([文件名称]);
.icon {
    @include example-sprite(address);
}

// 输出
.icon {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0px 0px;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
```
:::
::: code-group-item 方法 2
```scss:no-line-numbers
// @include all-[文件夹名称]-sprites;
@include all-example-sprites;

// 输出
.example-address-sprites {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0 0;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
.example-feedback-sprites {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: -110px 0;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
.example-payment-sprites {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0 -110px;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}
```
:::
::::

如果是小型项目，静态图片不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。

## 样式

样式存放目录为 `./src/assets/styles/` ，因为 Vue 的文件特性，页面样式建议写在 `.vue` 文件里，所以该目录只存放全局样式，方便统一管理。

此目录下还有一个特殊目录，即 `./src/assets/styles/resources/` ，这是全局 SCSS 资源目录，首先这个目录里只支持 `.scss` 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。

同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。

:::tip 说明
全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西
:::

## 组件

### 全局组件

全局组件存放在 `./src/components/` 目录下，需要注意各个组件按文件夹进行区分。

每个组件的文件夹内至少保留一个文件名为 `index.vue` 的组件入口（可参考 `SvgIcon` 组件），组件必须设置 `name` 并保证其唯一，因为自动注册会将组件的 `name` 设为组件名。

虽然文件夹名称和组件 `name` 无关联，但建议与组件 `name` 保持一致。

推荐使用 `pnpm new` 指令进行组件生成，详细可查看《[代码文件自动生成](plop.md)》。

### 局部组件

局部组件没有提供专门的存放目录，不过我们建议局部组件跟随页面走，你可以在每个页面文件夹下，建立一个 `component` 文件夹用于存放局部组件。

按照这个规则，后续不管是修改还是调试，代码相对会比较清晰。