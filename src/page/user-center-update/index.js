/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 16:52:41
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var navSide = require('page/common/nav-side/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

var templateIndex = require('./index.string');
// 逻辑部分
var page = {
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        navSide.init({
            name: 'user-center'
        });
        this.loadUserInfo();
    },
    bindEvent: function () {
        var _this = this;
        $(document).on('click', '.btn-submit', function () {
            var userInfo = {
                    phone: $.trim($('#phone').val()),
                    question: $.trim($('#question').val()),
                    email: $.trim($('#email').val()),
                    answer: $.trim($('#answer').val())
                },
                validateResult = _this.validateForm(userInfo);

            if (validateResult.status) {
                _user.updateUserInfo(userInfo, function (res,msg) {
                    _mm.successTips(msg);
                    window.location.href = './user-center.html'

                }, function (errMsg) {
                    _mm.errorTips(errMsg)
                });
            } else {
                _mm.errorTips(validateResult.msg)
            }
        })
    },
    loadUserInfo: function () {
        var userHtml = '';
        _user.getUserInfo(function (res) {
            userHtml = _mm.renderHtml(templateIndex, res.data);
            $('.panel-body').html(userHtml);
        }, function (errMsg) {
            _mm.errorTips(errMsg);
        })
    },
    validateForm: function (formData) {
        var result = {
            status: false,
            msg: ''
        }
        if (!_mm.validate(formData.phone, 'phone')) {
            result.msg = '手机号格式不正确';
            return result;
        }
        if (!_mm.validate(formData.email, 'email')) {
            result.msg = '邮箱格式不正确';
            return result;
        }
        if (_mm.validate(formData.question, 'require')) {
            result.msg = '问题不能为空';
            return result;
        }
        if (_mm.validate(formData.answer, 'require')) {
            result.msg = '答案不能为空';
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