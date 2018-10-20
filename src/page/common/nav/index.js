/*
 * @Author: kim.chen 
 * @Date: 2018-10-18 18:59:09 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 15:25:05
 */
require('./index.css');

var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
// 导航条
var nav = {
    init: function () {
        this.bindEvent();
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
            _user.loyout(function(res){
                window.location.reload();
            },function(errMsg){
                _mm.errorTips(errMsg);
            })
        })

    }
}
module.exports = nav.init();