/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 12:32:46 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-03 14:13:50
 */
var _mm = require('util/mm.js');

let data = {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 2,
        "size": 1,
        "orderBy": null,
        "startRow": 1,
        "endRow": 1,
        "total": 1,
        "pages": 3,
        "list": [{
            "orderNo": 1541222089065,
            "payment": 10886.00,
            "paymentType": 1,
            "paymentTypeDesc": "在线支付",
            "postage": 0,
            "status": 10,
            "statusDesc": "未支付",
            "paymentTime": "",
            "sendTime": "",
            "endTime": "",
            "closeTime": "",
            "createTime": "2018-11-03 13:14:48",
            "orderItemVoList": [{
                "orderNo": 1541222089065,
                "productId": 27,
                "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                "productImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                "currentUnitPrice": 3299.00,
                "quantity": 2,
                "totalPrice": 6598.00,
                "createTime": "2018-11-03 13:14:49"
            }, {
                "orderNo": 1541222089065,
                "productId": 70,
                "productName": "双开门冰箱",
                "productImage": "5a4de435-3b80-4eb6-8a1f-1ddddb35636a.jpg",
                "currentUnitPrice": 5689.00,
                "quantity": 0,
                "totalPrice": 0.00,
                "createTime": "2018-11-03 13:14:49"
            }, {
                "orderNo": 1541222089065,
                "productId": 128,
                "productName": "实用冰箱",
                "productImage": "5bea948a-77d2-4b2b-b315-957ebed6da4f.jpg",
                "currentUnitPrice": 3000.00,
                "quantity": 0,
                "totalPrice": 0.00,
                "createTime": "2018-11-03 13:14:49"
            }, {
                "orderNo": 1541222089065,
                "productId": 30,
                "productName": "【测试学习使用】thinkpad旗舰本",
                "productImage": "f3182089-e21f-4560-a5ce-e600e3408a98.jpeg",
                "currentUnitPrice": 4288.00,
                "quantity": 1,
                "totalPrice": 4288.00,
                "createTime": "2018-11-03 13:14:49"
            }],
            "imageHost": "http://img.happymmall.com/",
            "shippingId": 8463,
            "receiverName": "kim",
            "shippingVo": {
                "receiverName": "kim",
                "receiverPhone": "1345678888",
                "receiverMobile": null,
                "receiverProvince": "吉林省",
                "receiverCity": "延边",
                "receiverDistrict": null,
                "receiverAddress": "433",
                "receiverZip": ""
            }
        }],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [1]
    }




}
let orderDetail = {
    "status": 0,
    "data": {
        "orderNo": 1541222089065,
        "payment": 10886.00,
        "paymentType": 1,
        "paymentTypeDesc": "在线支付",
        "postage": 0,
        "status": 10,
        "statusDesc": "未支付",
        "paymentTime": "",
        "sendTime": "",
        "endTime": "",
        "closeTime": "",
        "createTime": "2018-11-03 13:14:48",
        "orderItemVoList": [{
            "orderNo": 1541222089065,
            "productId": 27,
            "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
            "productImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
            "currentUnitPrice": 3299.00,
            "quantity": 2,
            "totalPrice": 6598.00,
            "createTime": "2018-11-03 13:14:49"
        }, {
            "orderNo": 1541222089065,
            "productId": 70,
            "productName": "双开门冰箱",
            "productImage": "5a4de435-3b80-4eb6-8a1f-1ddddb35636a.jpg",
            "currentUnitPrice": 5689.00,
            "quantity": 0,
            "totalPrice": 0.00,
            "createTime": "2018-11-03 13:14:49"
        }, {
            "orderNo": 1541222089065,
            "productId": 128,
            "productName": "实用冰箱",
            "productImage": "5bea948a-77d2-4b2b-b315-957ebed6da4f.jpg",
            "currentUnitPrice": 3000.00,
            "quantity": 0,
            "totalPrice": 0.00,
            "createTime": "2018-11-03 13:14:49"
        }, {
            "orderNo": 1541222089065,
            "productId": 30,
            "productName": "【测试学习使用】thinkpad旗舰本",
            "productImage": "f3182089-e21f-4560-a5ce-e600e3408a98.jpeg",
            "currentUnitPrice": 4288.00,
            "quantity": 1,
            "totalPrice": 4288.00,
            "createTime": "2018-11-03 13:14:49"
        }],
        "imageHost": "http://img.happymmall.com/",
        "shippingId": 8463,
        "receiverName": "kim",
        "shippingVo": {
            "receiverName": "kim",
            "receiverPhone": "1345678888",
            "receiverMobile": null,
            "receiverProvince": "吉林省",
            "receiverCity": "延边",
            "receiverDistrict": null,
            "receiverAddress": "433",
            "receiverZip": ""
        }
    }

}
var _order = {
    // 获取商品列表
    getProductList: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/order/get_order_cart_product.do'),
        //     success: resolve,
        //     error: reject
        // })
        resolve(data.data);
    },
    // 提交订单
    createOrder: function (orderInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/create.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        })
    },
    // 获取订单列表
    getOrderList: function (listParam, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/order/list.do'),
        //     data:listParam,
        //     success: resolve,
        //     error: reject
        // })
        resolve(data.data);
    },
    // 获取订单详情
    getOrderDetail: function (orderNumber, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/order/detail.do'),
        //     data: {
        //         orderNumber: orderNumber
        //     },
        //     success: resolve,
        //     error: reject
        // })
        resolve(orderDetail.data)
    },
    // 取消订单
    cancelOrder: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/cancel.do'),
            data: {
                orderNumber: orderNumber
            },
            success: resolve,
            error: reject
        })
    }
}
module.exports = _order;