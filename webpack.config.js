/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:21:56 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-18 19:59:48
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 环境变量的配置,dev/online,开发和生产环境
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
// 获取html-webpack-plugin参数方法
var getHtmlConfig = function (name) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
}
var config = {
    entry: { //入口文件
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: { //出口文件
        path: "./dist",
        publicPath: '/dist',
        filename: 'js/[name].js'
    },
    externals: { //全局加载jquery
        'jquery': 'window.jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=100&name=resource/[name].[ext]'
            },
            {
                test: /\.string$/,
                loader: 'html-loader'
            },
        ]
    },
    resolve: {
        alias: {
            node_modules: __dirname + '/node_modules',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ //公共模块
            name: 'common',
            filename: 'js/base.js'
        }),
        new ExtractTextPlugin("css/[name].css"), //单独打包css到文件
        //html模板处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
    ]
};
if (WEBPACK_ENV === 'DEV') {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8099/');
}
module.exports = config;