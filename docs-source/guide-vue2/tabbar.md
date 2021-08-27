# 标签栏 <Badge type="tip" text="专业版" vertical="top" />

<p><img :src="$withBase('/vue2/tabbar.gif')" /></p>

在配置里开启标签栏后，在面包屑导航上方将会出现标签栏区域，点击侧边导航会默认新开一个标签页，支持对标签页右键操作，可实现**刷新**、**固定**、**关闭**等操作。

在页面中可使用 `this.$tabbarClose()` 方法关闭当前标签页，也可以使用 `this.$tabbarClose('/router/path')` 传入路由 path 关闭指定标签页。