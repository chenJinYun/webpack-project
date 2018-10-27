/*
 * @Author: kim.chen 
 * @Date: 2018-10-23 19:13:42 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-27 10:19:49
 */
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css')
var _product = require('service/product-service.js');
var _mm = require('util/mm.js');
var Pagination = require('util/pagination/index.js');
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
        var _this = this;
        // 排序的点击事件
        $('.sort-title').click(function () {

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
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            });
        }, function (err) {
            _mm.errorTips(err);
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
                _this.loadList();
            }
        }))

    }
}
$(function () {
    page.init()
})