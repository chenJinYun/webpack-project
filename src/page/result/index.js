/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 10:39:58 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-03 15:08:44
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function () {
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    if (type === "payment") {
        let $orderNumber = $element.find('.order-number');
        let orderNumber = _mm.getUrlParam('orderNumer');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber)
    }
    // 显示对应的类型元素
    $element.show();
})