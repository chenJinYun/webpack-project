/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 17:18:35
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var navSide = require('page/common/nav-side/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

// 逻辑部分
var page = {
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        navSide.init({
            name: 'user-pass-update'
        });
    },
    bindEvent: function () {
        var _this = this;
        $(document).on('click', '.btn-submit', function () {
            var userInfo = {
                    password: $.trim($('#password').val()),
                    passwordNew: $.trim($('#passwordNew').val()),
                    passwordConfirm: $.trim($('#password-confirm').val()),
                },
                validateResult = _this.validateForm(userInfo);

            if (validateResult.status) {
                _user.updatePassword({
                    passwordOld:userInfo.password,
                    passwordNew:userInfo.passwordNew
                }, function (res, msg) {
                    _mm.successTips(msg);
                }, function (errMsg) {
                    _mm.errorTips(errMsg)
                });
            } else {
                _mm.errorTips(validateResult.msg)
            }
        })
    },
    validateForm: function (formData) {
        var result = {
            status: false,
            msg: ''
        }
        if (_mm.validate(formData.password, 'require')) {
            result.msg = '原密码不能为空';
            return result;
        }
        if (!formData.passwordNew || formData.passwordNew.length < 6) {
            result.msg = '新密码长度不能小于6位';
            return result;
        }
        if (formData.passwordNew !== formData.passwordConfirm) {
            result.msg = '两次密码不一致';
            return result;
        }
        // 校验通过，返回正确体会
        result.status = true;
        result.msg = '验证通过';
        return result;
    }

}

$(function () {
    page.init();
});