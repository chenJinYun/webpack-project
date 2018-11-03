/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 12:32:46 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-30 18:47:10
 */
var _mm = require('util/mm.js');

let data = {
    "orderItemVoList": [{
        "orderNo": null,
        "productId": 27,
        "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
        "productImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
        "currentUnitPrice": 3299.00,
        "quantity": 1,
        "totalPrice": 3299.00,
        "createTime": ""
    }],
    "productTotalPrice": 3299.0,
    "imageHost": "http://img.happymmall.com/"
}
var _order = {
    // 获取商品列表
    getProductList: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/order/get_order_cart_product.do'),
        //     success: resolve,
        //     error: reject
        // })
        resolve(data);
    },
    // 提交订单
    createOrder: function (orderInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        })
    }
}
module.exports = _order;