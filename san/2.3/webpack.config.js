const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/main.js', //入口文件
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist' //本地服务器页面目录
    },
    plugins: [ //插件配置
        new htmlWebpackPlugin({ //压缩html文件
            template: './src/index.html'
        }),
        //new ExtractTextPlugin('style.css') // 分离 CSS
    ],
    module: {
        rules: [{ //es6->es5
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, { //把样式表嵌入到 webpack 打包后的 JS 文件中
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ // 分离 CSS，成为一个单独的文件
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'postcss-loader'
                ]
            })
        }]
    }
}