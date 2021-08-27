# 错误日志 <Badge type="tip" text="专业版" vertical="top" />

首先需要在框架配置里开启错误日志。

```js:no-line-numbers
enableErrorLog: true
```

然后需要到 `./src/util/error.log.js` 文件里编写业务代码，框架为方便演示，将错误日志记录在 `sessionStorage` 里。

开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。

由于开启错误日志监控后，所有的 js 错误都不会在控制台里显示，所以在开发环境下即使开启错误日志也不会被启用，如果需要在开发环境下测试，可在 `./src/util/error.log.js` 里修改开启的条件判断。