/*
 * @Author: kim.chen 
 * @Date: 2018-10-27 10:18:42 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-27 15:45:28
 */
require('page/common/header/index.js');
require('./index.css')
var _cart = require('service/cart-service.js');
var _mm = require('util/mm.js');
var templateIndex = require('./index.string');
var nav=require('page/common/nav/index.js');


var page = {
    data: {

    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadCart();
    },
    bindEvent: function () {
        var _this = this;
        // 商品的选中、取消选中
        $(document).on('click', '.cart-select', function () {
            let $this = $(this);
            let productId = $this.parents('.cart-table').data('product-id');
            // 切换选中状态
            if ($this.is(':checked')) {
                _cart.selectProduct(productId, function (res) {
                    _this.renderCart(res)
                }, function (err) {
                    _this.showCartError()
                });
            } else {
                _cart.unSelectProduct(productId, function (res) {
                    _this.renderCart(res)
                }, function (err) {
                    _this.showCartError()
                });
            }
        })
        // 全选状态、取消全选
        $(document).on('click', '.cart-select-all', function () {
            let $this = $(this);
            // 全选
            if ($this.is(':checked')) {
                _cart.selectAllProduct(function (res) {
                    _this.renderCart(res)
                }, function (err) {
                    _this.showCartError()
                });
            } else {
                _cart.unSelectAllProduct(function (res) {
                    _this.renderCart(res)
                }, function (err) {
                    _this.showCartError()
                });
            }
        })
        // 商品数量的变化
        $(document).on('click', '.count-btn', function () {
            let $this = $(this);
            let $pCount = $this.siblings('.count-input');
            let type = $this.hasClass('plus') ? 'plus' : 'minus';
            let productId = $this.parents('.cart-table').data('product-id');
            let currCount = parseInt($pCount.val());
            let minCount = 1;
            let maxCount = parseInt($pCount.data('max'));
            let newCount = 0;
            if (type === 'plus') {
                if (currCount >= maxCount) {
                    _mm.errorTips('该商品数量达到上限！');
                    return;
                }
                newCount = currCount + 1;
            } else if (type === 'minus') {
                if (currCount <= minCount) {
                    return;
                }
                newCount = currCount - 1;
            }
            // 更新数量
            _cart.updateProduct({
                productId: productId,
                count: newCount
            }, function (res) {
                _this.renderCart(res)
            }, function (err) {
                _this.showCartError()
            })
        })
        // 删除单个
        $(document).on('click', '.cart-delete', function () {
            if (window.confirm("确认是否要删除")) {
                let productId = $(this).parents('cart-table').data('product-id');
                _this.deleteCartProduct(productId);
            }
        })
        // 删除选中商品
        $(document).on('click', '.delete-selected', function () {
            if (window.confirm("确认是否要删除选中的商品")) {
                let arrProductIds = [];
                $selectedItem = $('.cart-select:checked');
                // 循环查找选中的Productid
                for (var i = 0, iLength = $selectedItem.length.length; i < iLength; i++) {
                    arrProductIds.push($($selectedItem[i]).parents('.cart-table').data('product-id'))
                }
                if ($selectedItem.length) {
                    _this.deleteCartProduct(arrProductIds.join(','));
                } else {
                    _mm.errorTips('您还没有选中要删除的商品')
                }
            }
        })

        // 去结算
        $(document).on('click', '.btn-submit', function () {
            // 总价>0就进行提交
            if (_this.data.cartInfo && _this.data.cartInfo.cartTotalPrice > 0) {
                window.location.href = './confirm.html'
            } else {
                _mm.errorTips('请选择商品后再提交！')
            }
        })



    },
    // 加载商品详情
    loadCart: function () {
        let _this = this;
        // 购物车列表
        _cart.getCartList(function (res) {
            _this.renderCart(res)
        }, function (err) {
            _this.showCartError()
        })

    },
    // 渲染购物车
    renderCart: function (data) {
        this.filter(data);
        // 缓存购物车信息
        this.data.cartInfo = data;
        // 生成html
        let html = _mm.renderHtml(templateIndex, data)
        $('.page-wrap').html(html);
        // 重新获取购物车数量
        nav.loadCartCount()
    },
    // 删除指定商品，支持批量，productId用逗号分隔
    deleteCartProduct: function (productIds) {
        let _this = this;
        _cart.deleteCartProduct(productIds, function (res) {
            _this.renderCart(res)
        }, function (err) {
            _this.showCartError()
        })
    },
    // 数据匹配
    filter: function (data) {
        data.notEmpty = !!data.cartProductVoList.length;
    },
    // 显示错误信息
    showCartError: function () {
        $('.page-wrap').html('<p class="err-tip">出错了，刷新下</p>')

    }
}
$(function () {
    page.init()
})