/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 12:32:46 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 12:50:05
 */
var _mm = require('util/mm.js');
var _user = {
    // 登录
    login: function (userInfo,resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/login.do'),
            DATA:userInfo,
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    //  检查登录状态
    checkLogin: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    },
    // 登出
    logout: function (resolve,reject) {
        _mm.request({
            url: _mm.getServerUrl('/user/logout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        })
    }
}
module.exports = _user;