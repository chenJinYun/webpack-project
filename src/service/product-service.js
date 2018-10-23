/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 12:32:46 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-23 19:36:38
 */
var _mm = require('util/mm.js');
var _project = {
    // 获取商品列表
    getProductList: function (listParam, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/product/list.do'),
            data: listParam,
            method: 'POST',
            success: resolve,
            error: reject
        })
    }
}
module.exports = _project;