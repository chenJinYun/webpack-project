/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:27:49 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-03 13:25:10
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var navSide = require('page/common/nav-side/index.js');
var _order = require('service/order-service.js');
var Pagination = require('util/pagination/index.js');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');
// 逻辑部分
var page = {
    data: {
        listParam: {
            pageNum: 1,
            pageSize: 2,

        }
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        this.loadOrderList();
        navSide.init({
            name: 'order-list'
        });
    },
    // 加载订单列表
    loadOrderList: function () {
        let orderListHtml = '';
        let _this = this;
        let $listCon = $('.order-list-con');
        $listCon.html('<div class="loading"></div>');
        _order.getOrderList(this.data.listParam, function (res) {
            orderListHtml = _mm.renderHtml(templateIndex, res);
            $listCon.html(orderListHtml);
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            })
        }, function (err) {
            $listCon.html('<p class="err-tip">加载订单失败！</p>')
        })
    },

    // 分页
    loadPagination: function (pageInfo) {
        let _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectPage: function (pageNum) {
                _this.data.listParam.pageNum = pageNum;
                _this.loadOrderList();
            }
        }))

    }


}

$(function () {
    page.init();
});