/*
 * @Author: kim.chen 
 * @Date: 2018-10-27 12:09:44 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-27 15:43:59
 */

var _mm = require('util/mm.js');
let count =1;
var _cart = {
    // 获取购物车数量
    getCartCount: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/get_cart_product_count.do'),
        //     success: resolve,
        //     error: reject
        // });
        resolve(count)
    },
    // 添加到购物车
    addToCart: function (productInfo, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/cart/add.do'),
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
    // 获取购物车列表
    getCartList: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/list.do'),
        //     success: resolve,
        //     error: reject
        // });
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": true,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                },{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": true,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                }],
                "cartTotalPrice": 3299.0,
                "allChecked": true,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    },
    // 选中商品
    selectProduct: function (productId, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/select.do'),
        //     data: {
        //         productId: productId
        //     },
        //     success: resolve,
        //     error: reject
        // });
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": true,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                }],
                "cartTotalPrice": 3299.0,
                "allChecked": true,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    },
    // 取消选中商品
    unSelectProduct: function (productId, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/un_select.do'),
        //     data: {
        //         productId: productId
        //     },
        //     success: resolve,
        //     error: reject
        // });
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": false,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                }],
                "cartTotalPrice": 3299.0,
                "allChecked": false,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    },
    // 取消全选
    unSelectAllProduct: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/un_select_all.do'),
        //     success: resolve,
        //     error: reject
        // });
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": true,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                }],
                "cartTotalPrice": 3299.0,
                "allChecked": false,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    },
    // 全选
    selectAllProduct: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/select_all.do'),
        //     success: resolve,
        //     error: reject
        // });
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": true,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                }],
                "cartTotalPrice": 3299.0,
                "allChecked": true,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    },
    // 更新购物车商品数量
    updateProduct: function (productInfo, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/update.do'),
        //     data: productInfo,
        //     success: resolve,
        //     error: reject
        // });
        count=productInfo.count;
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [{
                    "id": 20237,
                    "userId": 8443,
                    "productId": 27,
                    "quantity": count,
                    "productName": "Midea/美的 BCD-535WKZM(E)冰箱双开门无霜智能家用厨卫家电",
                    "productSubtitle": "送品牌烤箱，五一大促",
                    "productMainImage": "ac3e571d-13ce-4fad-89e8-c92c2eccf536.jpeg",
                    "productPrice": 3299.00,
                    "productStatus": 1,
                    "productTotalPrice": 3299.00,
                    "productStock": 4,
                    "productChecked": true,
                    "limitQuantity": "LIMIT_NUM_SUCCESS"
                }],
                "cartTotalPrice": 3299.0,
                "allChecked": true,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    },
    // 删除指定商品
    deleteCartProduct:function (productIds, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/cart/delete.do'),
        //     data: {productIds:productIds},
        //     success: resolve,
        //     error: reject
        // });
        let cartList = {
            "status": 0,
            "data": {
                "cartProductVoList": [],
                "cartTotalPrice": 3299.0,
                "allChecked": true,
                "imageHost": "http://img.happymmall.com/"
            }
        }
        resolve(cartList.data);
    }


}
module.exports = _cart;