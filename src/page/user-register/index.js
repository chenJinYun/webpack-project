/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 13:52:47
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

// 表单错误提示
var formError = {
    show: function (errMsg) {
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide: function () {
        $('.error-item').hide().find('.err-msg').text('');
    }
}

// 逻辑部分
var page = {
    init: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var _this = this;
        // 验证username
        $('#username').blur(function () {
            var username = $.trim($(this).val());
            if(!username){
                return;
            }
            // 异步验证用户名名是否存在
            _user.checkUsername(username, function (res) {
                formError.hide();
            }, function (errMsg) {
                formError.show(errMsg);

            });
        })
        // 注册按钮点击提交
        $("#submit").click(function () {
            _this.submit();
        })
        // 回车也提交
        $('.user-content').keyup(function (e) {
            if (e.keyCode === 13) {
                _this.submit();
            }
        })
    },
    // 提交表单
    submit: function () {
        var formData = {
            username: $.trim($('#username').val()),
            password: $.trim($('#password').val()),
            passwordConfirm: $.trim($('#password-confirm').val()),
            email: $.trim($('#email').val()),
            phone: $.trim($('#phone').val()),
            question: $.trim($('#question').val()),
            answer: $.trim($('#answer').val()),
        }
        // 表单验证结果
        var validateResult = this.formValidate(formData);
        if (validateResult.status) {
            _user.register(formData, function (res) {
                window.location.href = './result.html?type=register';
            }, function (errMsg) {
                formError.show(errMsg);
            })
        } else {
            // 错误提示
            formError.show(validateResult.msg);
        }
    },
    // 表单验证
    formValidate: function (formData) {
        var result = {
            status: false,
            msg: ''
        }
        if (_mm.validate(formData.username, 'require')) {
            result.msg = '用户名不能为空';
            return result;
        }
        if (_mm.validate(formData.password, 'require')) {
            result.msg = '密码不能为空';
            return result;
        }
        if (formData.password.length < 6) {
            result.msg = '密码不能小于6位';
            return result;
        }
        if (formData.password !== formData.passwordConfirm) {
            result.msg = '两次密码不一致';
            return result;
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