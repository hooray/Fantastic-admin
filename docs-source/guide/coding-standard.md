# 代码规范

## IDE 编辑器

:::tip
请确保已阅读《[准备工作 - 开发环境](ready.md#开发环境)》，并且按照文档说明安装好相关软件及扩展。
:::

为保证代码风格统一，请使用 [Visual Studio Code](https://code.visualstudio.com/) 做为开发 IDE ，框架源码里已提供相关配置文件，可直接测试效果：在保存代码时，会自动对当前文件进行代码格式化操作。

:::tip
无法实现自动格式化代码的效果，请随便打开一个 `.js` 或 `.vue` 文件，检查编辑器右下角的 ESLint 是否显示为✔️，如果显示为🚫，则需要点击并选择“Allow”。

<p>
	<img :src="$withBase('/eslint1.png')" />
	<img :src="$withBase('/eslint2.png')" />
	<img :src="$withBase('/eslint3.png')" />
</p>
:::

## husky & lint-staged

IDE 能做的事比较有限，仅对代码的写法规范进行格式化，对于用户没发现的错误代码，则需要借助 [husky](https://github.com/typicode/husky) 和 [lint-staged](https://github.com/okonet/lint-staged) 这两个依赖来解决，框架已默认集成该依赖。

在提交代码时，husky 会通过 lint-staged 对 `./src` 目录下的 js vue scss 文件进行分别进行 eslint 和 stylelint 检测，如果有报错，则会阻止本次代码提交，直到开发者修改完所有错误代码后，才允许提交到 git 仓库。

这样可以确保 git 仓库里的代码不会有语法错误，在多人协作开发时尤为重要。

::: tip 更多
可通过修改 `.eslintignore` 和 `.stylelintignore` 忽略无需做代码规范校验的文件，例如在项目中引用了一些第三方的插件或组件，我们就可以将其进行忽略。
:::

## 配置代码规范

配置文件主要有 3 处，分别为 IDE 配置（`.editorconfig`）、ESLint 配置（`.eslintrc.js` 和 `.eslintignore`）、StyleLint 配置（`.stylelintrc` 和 `.stylelintignore`）。

以代码缩进举例，框架默认是以 4 空格进行缩进，如果要调整为 2 空格，则需要在 `.editorconfig` 里修改：

```
indent_size = 2
```

在 `.eslintrc.js` 里修改：

```
'indent': [2, 2, {
    'SwitchCase': 1
}],

...

'vue/html-indent': [2, 2],

...

'vue/script-indent': [2, 2, {
    'switchCase': 1
}]
```

在 `.stylelintrc` 里修改：

```
"indentation": 2
```

修改完毕后，再分别执行下面两句命令：

```bash
pnpm run lint:eslint
pnpm run lint:stylelint
```

该操作会将代码进行一次格式校验，如果规则支持自动修复，则会将不符合规则的代码自动进行格式化。以上面的例子，当缩进规则调整后，我们无需手动去每个文件调整，通过命令可以自动应用新的缩进规则。

## 关闭代码规范

如果不想使用 ESLint 和 stylelint 强制规范代码，可将 `src/` 目录分别加入 `.eslintignore` 和 `.stylelintignore` 进行忽略即可。