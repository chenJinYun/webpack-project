/*
 * @Author: kim.chen 
 * @Date: 2018-10-27 10:18:42 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-27 11:19:26
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var _product = require('service/product-service.js');
var _cart = require('service/cart-service.js');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');


var page = {
    data: {
        productId: _mm.getUrlParam('productId') || '',
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        if (!this.data.productId) {
            _mm.goHome();
        }
        this.loadDetail();
    },
    bindEvent: function () {
        var _this = this;
    },
    // 加载商品详情
    loadDetail: function () {
        let _this=this;
        let html = '';
        let $pageWrap=$('.page-wrap')
        // loading
        $pageWrap.html("<div class='loading'></div>")
        // 请求详细信息
        _product.getProductDetail(this.data.productId, function (res) {
            _this.filter(res)
            html = _mm.renderHtml(templateIndex, res);
            $pageWrap.html(html)
        }, function () {
            $pageWrap.html("<pclass='err-tip'>此商品太淘气，找不到了</p>")
        })
    },
    // 数据匹配
    filter:function(data){
        data.subImages=data.subImages.split(',')
    }
}
$(function () {
    page.init()
})