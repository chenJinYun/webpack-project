/*
 * @Author: kim.chen 
 * @Date: 2018-10-23 19:13:42 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-23 20:00:21
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var navSide = require('page/common/nav-side/index.js');
var _product = require('service/product-service.js');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');

var page = {
    data: {
        listParam: {
            keyword: _mm.getUrlParam('keyword') || '',
            categoryId: _mm.getUrlParam('categoryId') || '',
            orderBy: _mm.getUrlParam('orderBy') || 'default',
            pageNum: _mm.getUrlParam('pageNum') || 1,
            pageSize: _mm.getUrlParam('pageSize') || 20
        }
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadList()
    },
    bindEvent: function () {
        var _this=this;
        // 排序的点击事件
        $('.sort-title').click(function(){
            
        })
    },
    // 加载list
    loadList: function () {
        var listParam = this.data.listParam;
        var listHtml = '';
        var _this = this;
        _product.getProductList(listParam, function (res) {
            listHtml = _mm.renderHtml(templateIndex, {
                list: res.list
            })
            $('.p-list-con').html(listHtml);
            _this.loadPagination(res.pageNum,res.pages);
        }, function (err) {
            _mm.errorTips(err);
        })
    },
    // 分页
    loadPagination:function(pageNum,pages){
        
    }
}
$(function () {
    page.init()
})