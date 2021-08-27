# 全局资源

## 图标

现在越来越多项目开始使用 SVG 图标做为精灵图的替代品，本框架也提供了 SVG 图标支持，方便使用。推荐去[阿里巴巴矢量图标库](https://www.iconfont.cn/)下载高质量 SVG 图标。

要使用 SVG 图标也很简单，首先将 svg 文件放到 `./src/assets/icons/` 目录下，然后在页面中就可以通过 `<svg-icon />` 组件使用了，name 就是 svg 文件名，如下：

```html
<svg-icon name="example" />
```

:::tip 更多
专业版支持调用 [Element Icon](https://element.eleme.cn/#/zh-CN/component/icon) 和 [RemixIcon](https://remixicon.com/) ，例如：

```html
<svg-icon name="el-icon-edit" />
<svg-icon name="ri-home-line" />
```
:::

## 图片

框架用到的图片资源都放在 `./src/assets/images/` 目录下，可自行新建文件夹方便进行管理。

## 精灵图

精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。

:::tip 说明
在 HTTP/1.1 下，因**队头阻塞**的问题，如果在一个页面里需要展示多张小图，建议使用精灵图

但 HTTP/2 的**多路复用**特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图
:::

精灵图原始图片的存放位置位于 `./src/assets/sprites/` 目录下，注意按文件夹区分。

项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 `.scss` 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。

可通过 `@include` 直接使用精灵图，无需手动引入 `.scss` 文件：

```scss
// 方法 1
// @include [文件夹名称]-sprite([文件名称]);
.icon {
    @include example-sprite(address);
}

// 方法 2
// @include all-[文件夹名称]-sprites;
@include all-example-sprites;
```

最终输出如下（参考）：

```css
/* 方法 1 */
.icon {
    background-image: url(img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png);
    background-position: 0px 0px;
    background-size: 210px 210px;
    width: 100px;
    height: 100px;
}

/* 方法 2 */
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

如果是小型项目，静态图标不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。

## 样式

样式存放目录为 `./src/assets/styles/` ，因为 Vue 的文件特性，单页的样式都写在单个 `.vue` 文件里，所以我们建议该目录只存放全局样式，方便统一管理。

此目录下还有一个特殊目录，即 `./src/assets/styles/resources/` ，这是全局 SCSS 资源目录，首先这个目录里只支持 `.scss` 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。

同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。

:::tip 说明
全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西
:::