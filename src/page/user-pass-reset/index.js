/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 15:06:49
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
    data: {
        username: '',
        question: '',
        answer: '',
        token: '',
    },
    init: function () {
        this.onload();
        this.bindEvent();
    },
    onload: function () {
        this.loadStepUsername();
    },
    bindEvent: function () {
        var _this = this;
        // 用户名点击下一步
        $("#submit-username").click(function () {
            var username = $.trim($('#username').val());
            if (username) {
                _user.getQuestion(username, function (res) {
                    _this.data.username = username;
                    _this.data.question = res;
                    _this.loadStepQuestion();
                }, function (errMsg) {
                    formError.show(errMsg);
                });
            } else {
                formError.show('请输入用户名');
            }
        })

        // 问题答案点击下一步
        $("#submit-answer").click(function () {
            var answer = $.trim($('#answer').val());
            if (answer) {
                _user.checkAnswer({
                    username: _this.data.username,
                    question: _this.data.question,
                    answer: answer
                }, function (res) {
                    _this.data.answer = answer;
                    _this.data.token = res;
                    _this.loadStepPassword();
                }, function (errMsg) {
                    formError.show(errMsg);
                });
            } else {
                formError.show('请输入问题答案');
            }
        })

        // 输入新密码下一步
        $("#submit-password").click(function () {
            var password = $.trim($('#password').val());
            if (password && password.length >= 6) {
                _user.resetPassword({
                    username: _this.data.username,
                    passwordNew: password,
                    forgetToken: _this.data.token
                }, function (res) {
                    window.location.href = './result.html?type=pass-reset';
                }, function (errMsg) {
                    formError.show(errMsg);
                });
            } else {
                formError.show('请输入不小于6位的新密码');
            }
        })

    },
    // 加载输入用户名
    loadStepUsername: function () {
        $('.step-username').show();
    },
    // 加载输入答案
    loadStepQuestion: function () {
        formError.hide();
        $('.step-username').hide().siblings('.step-question').show().
        find('.question').text(this.data.question);

    },
    // 加载输入密码
    loadStepPassword: function () {
        formError.hide();
        $('.step-question').hide().siblings('.step-password').show();
    }

}

$(function () {
    page.init();
});