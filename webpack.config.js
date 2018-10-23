/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:21:56 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-23 19:17:10
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 环境变量的配置,dev/online,开发和生产环境
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
// 获取html-webpack-plugin参数方法
var getHtmlConfig = function (name,title) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    }
}
var config = {
    entry: { //入口文件
        'common': ['./src/page/common/index.js'],
        'index' : ['./src/page/index/index.js'],
        'list' : ['./src/page/list/index.js'],
        'user-login' : ['./src/page/user-login/index.js'],
        'user-register' : ['./src/page/user-register/index.js'],
        'user-pass-reset' : ['./src/page/user-pass-reset/index.js'],
        'user-pass-update' : ['./src/page/user-pass-update/index.js'],
        'user-center' : ['./src/page/user-center/index.js'],
        'user-center-update' : ['./src/page/user-center-update/index.js'],
        'result' : ['./src/page/result/index.js']
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
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
        new HtmlWebpackPlugin(getHtmlConfig('user-login','用户登录')),
        new HtmlWebpackPlugin(getHtmlConfig('user-register','用户注册')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset','找回密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-pass-update','修改密码')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center','个人中心')),
        new HtmlWebpackPlugin(getHtmlConfig('user-center-update','修改个人信息')),
        new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果'))
    ]
};
if (WEBPACK_ENV === 'DEV') {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8099/');
}
module.exports = config;