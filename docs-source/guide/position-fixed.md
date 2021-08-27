# 高级 position:fixed <Badge type="tip" text="专业版" vertical="top" />

我们都知道 `position:fixed` 是相对于浏览器窗口进行定位的，那在本框架中，要如何实现 `<FixedActionBar />` 组件这种不管在任何布局场景下，始终固定在右侧内容区域内底部呢？

专业版已将这块处理封装成一个 HTML 的 data 属性了，就是 `data-fixed-calc-width` 。如果你有同样的需求，只需在最外层原本要设置 `position:fixed` 的 DOM 上增加 `data-fixed-calc-width` 即可。

```html:no-line-numbers
<div data-fixed-calc-width>
    ...
</div>
```