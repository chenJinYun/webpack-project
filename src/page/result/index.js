/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 10:39:58 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-20 10:55:08
 */
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function () {
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    // 显示对应的类型元素
    $element.show();
})