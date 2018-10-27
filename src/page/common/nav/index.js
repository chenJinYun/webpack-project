/*
 * @Author: kim.chen 
 * @Date: 2018-10-18 18:59:09 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-27 13:06:01
 */
require('./index.css');

var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart   = require('service/cart-service.js');

// 导航条
var nav = {
    init: function () {
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;

    },
    bindEvent: function () {
        // 点击登录
        $('.js-login').click(function () {
            _mm.doLogin();
        });
        // 点击注册
        $(".js-register").click(function (e) {
            window.location.href = './user-register.html'
        });
        // 点击退出
        $('.js-layout').click(function () {
            _user.loyout(function (res) {
                window.location.reload();
            }, function (errMsg) {
                _mm.errorTips(errMsg);
            })
        })

    },
    // 加载用户信息
    loadUserInfo: function () {
        _user.checkLogin(function (res) {
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function (errMsg) {
            // do nothing
        });
    },
    // 加载购物车数量
    loadCartCount: function () {
        _cart.getCartCount(function (res) {
            $('.nav .cart-count').text(res || 0);
        }, function (errMsg) {
            $('.nav .cart-count').text(0);
        });
    }
}
module.exports = nav.init();