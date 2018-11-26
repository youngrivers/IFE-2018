const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    //entry: path.join(__dirname, 'src/main.js'), //绝对路径
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        hot: true // 配合 HMR 实现热加载
    },
    plugins: [
        //每次打包都清除dist文件夹
        new CleanWebpackPlugin(['dist']),
        //打包html文件
        new HtmlWebpackPlugin({
            title: 'ouput management 2.6-vue',
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        //vue新更新的plugin
        new VueLoaderPlugin(),
        //HotModule
        new webpack.HotModuleReplacementPlugin(),
    ],
    //支持 template 选项
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /(\.js|\.jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            }]
        }]
    }
}