- **1.2 用webpack4 / parcel快速搭建开发san helloworld**
# 任务目的
- 了解最新的webpack4 / parcel
- 学习如何使用构建工具搭建前端开发环境
- 了解san框架
# 任务描述
请根据学习资料及自己的理解，使用webpack4或parcel搭建一个开发环境，要求如下：

- 支持js、css格式的解析
- 区分 development / production 环境
- 使用npm scripts设罝dev、test、build命令
- 写一个san组件并在浏览器中显示hello world
- 使用babel-loader进行js代码转换
# 任务注意事项
- 注意webpack4中mode参数和process.env.NODE_ENV的联系，注意构建时和配置文件的区别
- 尽里使用最新的plugin、loader版本，以保证对webapck4的兼容
# 在线学习参考资料
- [https://github.com/baidu/san]
- [https://webpack.js.org]
- [https://medium.com/webpack]
- [https://parceljs.org/]

```
npm install -g cnpm --registry=https://registry.npm.taobao.org#安装国内镜像
npm install -g parcel-bundler#Parcel 是一个Web应用程序 打包器
npm init -y#创建一个 package.json 文件：
npm install san --save#安装依赖模块
npm install babel-preset-env --save-dev
cnpm i -D babel-preset-env #安装babel-loader（js代码转换）
```