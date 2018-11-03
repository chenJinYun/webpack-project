/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 12:32:46 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-11-03 15:03:09
 */
var _mm = require('util/mm.js');

let data = {"status":0,"data":{"orderNo":"1541222089065","qrUrl":"http://img.happymmall.com/qr-1541222089065.png"}}
var _payment = {
    // 获取支付信息
    getPaymentInfo: function (orderNumber, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/order/pay.do'),
        //     data: {
        //         orderNumber: orderNumber
        //     },
        //     success: resolve,
        //     error: reject
        // })
        resolve(data.data);
    },
    // 获取订单状态
    getPaymentStatus:function(orderNumber, resolve, reject){
         // _mm.request({
        //     url: _mm.getServerUrl('/order/query_order_pay_status.do'),
        //     data: {
        //         orderNumber: orderNumber
        //     },
        //     success: resolve,
        //     error: reject
        // })
        console.log(111)
        resolve(true);
    }
}
module.exports = _payment;