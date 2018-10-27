/*
 * @Author: kim.chen 
 * @Date: 2018-10-15 19:34:57 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-27 14:19:25
 */
var Hogan = require('hogan.js');
var conf = {
    serverHost: '',
}
var _mm = {
    // 网络请求
    request: function (param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function (res) {
                if (res.status === 0) {
                    // 请求成功
                    typeof param.success === 'function' && param.success(res.data, res.msg);

                } else if (res.status === 10) {
                    // 没有登录状态
                    _this.doLogin();
                } else if (res.status === 1) {
                    typeof param.error === 'function' && param.error(res.msg);
                }

            },
            error: function (err) {
                typeof param.error === 'function' && param.error(err.statusText);

            }
        })
    },
    // 获取服务器地址
    getServerUrl: function (path) {
        return conf.serverHost = path;
    },
    // 获取url参数
    getUrlParam: function (name) {
        // happmmall.com/product/list?keyword=xxxx&page=1 -> keyword=xxxx&page=1
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 渲染html模板
    renderHtml: function (htmlTemplate, data) {
        // 先编译在运行
        var tempalte = Hogan.compile(htmlTemplate),
            result = tempalte.render(data);
        return result;
    },
    // 成功提示
    successTips: function (msg) {
        alert(msg || '操作成功');
    },
    // 失败提示
    errorTips: function (msg) {
        alert(msg || '哪里不对了~');
    },
    // 字段的验证，支持非空判断，手机，邮箱，格式
    validate: function (value, type) {
        var value = $.trim(value);
        // 非空验证
        if ('require' === type) {
            return !value;
        }
        // 手机号验证
        if ('phone' === type) {
            return /^1\d{10}$/.test(value);
        }
        // 邮箱验证
        if ('email' === type) {
            return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value);
        }
    },
    // 统一登录处理
    doLogin: function () {
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    goHome: function () {
        window.location.href = './index.html'
    }
};

module.exports = _mm;