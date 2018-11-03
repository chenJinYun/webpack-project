/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-03 14:43:23
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var navSide = require('page/common/nav-side/index.js');
var _order = require('service/order-service.js');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');
// 逻辑部分
var page = {
    data: {
        orderNumber: _mm.getUrlParam('orderNumber')
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        navSide.init({
            name: 'order-detail'
        });
        this.loadDetail();

    },
    bindEvent: function () {
        let _this = this;
        $(document).on('click', '.order-cancel', function () {
            if (window.confirm('确认要取消该订单吗？')) {
                _order.cancelOrder(_this.data.orderNumber, function (res) {
                    _mm.successTips('该订单取消成功');
                    _this.loadDetail();
                }, function (err) {
                    _mm.errorTips(err);
                })
            }
        })

    },
    // 加载订单详情
    loadDetail: function () {
        let orderDetailHtml = '';
        let _this = this;
        let $con = $('.content');
        $con.html('<div class="loading"></div>');
        _order.getOrderDetail(this.data.orderNumber, function (res) {
            _this.dataFilter(res);
            orderDetailHtml = _mm.renderHtml(templateIndex, res);
            $con.html(orderDetailHtml);

        }, function (err) {
            $con.html('<p class="err-tip">' + err + '</p>')
        })
    },
    dataFilter: function (data) {
        data.needPay = data.status == 10;
        data.isCancelable = data.status == 10;
    }

}

$(function () {
    page.init();
});