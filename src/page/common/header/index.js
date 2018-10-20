/*
 * @Author: kim.chen 
 * @Date: 2018-10-18 18:59:09 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-18 19:24:00
 */
require('./index.css');

var _mm = require('util/mm.js');
// 头部
var header = {
    init: function () {
        this.bindEvent();
    },
    onLoad: function () {
        var keyword = _mm.getUrlParam('keyword');
        if (keyword) {
            $('#search-input').val(keyword);
        }
    },
    bindEvent: function () {
        var _this = this;
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        // 输入回车提交
        $("#search-btn").keyup(function (e) {
            // 13 是回车
            if (e.keyCode === 13) {
                _this.searchSubmit();
            }
        })
    },
    // 搜索的提交
    searchSubmit: function () {
        var keyword = $.trim($('#search-input').val());
        // 如果提交的时候有keyword，正常跳转到list页
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword;
        } else {
            _mm.goHome();
        }
    }
}
header.init();