/*
 * @Author: kim.chen 
 * @Date: 2018-10-24 18:48:45 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-24 19:36:29
 */
require('./index.css')
var templatePagination = require('./index.string');
var _mm = require('util/mm.js');

var Pagination = function () {
    let _this = this;

    this.defaultOption = {
        container: null,
        pageNum: 1,
        pageRange: 3,
        onSelectPage: null,
    };
    // 事件处理.事件委托
    $(document).on('click', '.pg-item', function () {
        let $this = $(this);
        //不重新请求
        if ($this.hasClass('active') || $this.hasClass('disabled')) {
            retuen;
        }
        typeof _this.option.onSelectPage === 'function' ?
            _this.option.onSelectPage($this.data('value')) : null;
    })
}
// 渲染分页组件
Pagination.prototype.render = function (userOption) {
    // 合并选项
    this.option = $.extend({}, this.defaultOption, userOption);
    // 判断容器是否为合法的jquery对象
    if (!(this.option.container instanceof jQuery)) {
        return;
    }
    // 判断是否只有一页
    if (this.option.pages <= 1) {
        return;
    }
    // 渲染分页内容
    this.option.container.html(this.getPaginationHtml())
}
// 获取分页的html
Pagination.prototype.getPaginationHtml = function () {
    // |上一页| 1 2 3 4 5 6|下一页| 5/6
    var html = '',
        option = this.option,
        pageArray = [],
        start = option.pageNum - option.pageRange > 0 ? option.pageNum - option.pageRange : 1,
        end = option.pageNum + option.pageRange < option.pages ? option.pageNum + option.pageRange : option.pages;
    // 上一页按钮数据
    pageArray.push({
        name: '上一页',
        value: this.option.perPage,
        disabled: !this.option.hasPreviousPage
    })
    // 数字按钮处理
    for (var i = start; i <= end; i++) {
        pageArray.push({
            name: i,
            value: i,
            active: (i === option.pageNum)
        })
    }
    // 下一页按钮数据
    pageArray.push({
        name: '下一页',
        value: this.option.nextPage,
        disabled: !this.option.hasNextPage
    })
    html = _mm.renderHtml(templatePagination, {
        pageArray: pageArray,
        pageNum: option.pageNum,
        pages: option.pages
    })
    return html;

}
module.exports = Pagination;