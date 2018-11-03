/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-03 15:00:44
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var navSide = require('page/common/nav-side/index.js');
var _payment = require('service/payment-service.js');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');
// 逻辑部分
var page = {
    data: {
        orderNumber: _mm.getUrlParam('orderNumber')
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        this.loadPaymentInfo();
    },
    // 加载订单详情
    loadPaymentInfo: function () {
        let orderDetailHtml = '';
        let _this = this;
        let $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNumber, function (res) {
            paymentHtml = _mm.renderHtml(templateIndex, res);
            $pageWrap.html(paymentHtml);
            _this.listenOrderStatus()
        }, function (err) {
            $pageWrap.html('<p class="err-tip">' + err + '</p>')
        })
    },
    listenOrderStatus: function () {
        let _this = this;
        this.paymentTimer = window.setInterval(function () {
            _payment.getPaymentStatus(_this.data.orderNumber,function(res){
                if(res){
                    window.location.href="./result.html?type=payment&orderNumer="+_this.data.orderNumber;
                    
                }
            },function(err){
                _mm.errorTips(err)
            })
        }, 5000);
    }
}

$(function () {
    page.init();
});