/*
 * @Author: kim.chen 
 * @Date: 2018-10-13 15:29:01 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-23 19:05:03
 */

 require('page/common/nav/index.js');
 require('./index.css');
 require('page/common/header/index.js');
 require('util/slider/index.js');
 var navSide = require('page/common/nav-side/index.js');
 var templateBanner = require('./index.string');
var _mm= require('util/mm.js');

navSide.init({name:'order-list'});
$(function() {
    var bannerHtml=_mm.renderHtml(templateBanner)
    $('.banner-con').html(bannerHtml);
    // 初始化
    var $slider=$('.banner').unslider({
        dots:true,
    });
    // 前一张后一张事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward=$(this).hasClass('prev')?'prev':'next';
        $slider.data('unslider')[forward]();
    })
    
});