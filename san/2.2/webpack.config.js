const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
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
        /**new webpack.optimization.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require'] //排除关键字
        })**/
    ],
    module: {
        rules: [{ //.san文件转换
            test: /.san$/,
            use: 'san-loader'
        }, { //es6->es5
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }]
    }
}