/*
 * @Author: kim.chen 
 * @Date: 2018-10-29 18:25:30 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-31 19:58:47
 */
require('page/common/header/index.js');
require('./index.css')
var _order = require('service/order-service.js');
var _address = require('service/address-service.js');
var _mm = require('util/mm.js');
var nav = require('page/common/nav/index.js');
var templateProduct = require('./product-list.string');
var templateAddress = require('./address-list.string');
var addressModal = require('./address-modal.js');

var page = {
    data: {
        selectedAddressId: null
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadAddressList();
        this.loadProductList();
    },
    bindEvent: function () {
        var _this = this;

        // 地址选择
        $(document).on('click', '.address-item', function () {
            $(this).addClass('active').siblings('.address-item').removeClass('active');
            _this.data.selectedAddressId = $(this).data('id');
        })
        // 订单提交
        $(document).on('click', '.order-submit', function () {
            let shipingId = _this.data.selectedAddressId;
            if (shipingId) {
                _order.createOrder({
                    shipingId: shipingId
                }, function (res) {
                    window.location.href = "./payment.html?orderNumber=" + res.orderNo
                }, function (err) {
                    _mm.errorTips(err);
                })
            } else {
                _mm.errorTips('请选择地址后提交');
            }
        })
        // 地址添加
        $(document).on('click', '.address-add', function () {
            addressModal.show({
                isUpdate: false,
                onSuccess: function (res) {
                    _this.loadAddressList(res);
                }
            })
        })
        // 地址的编辑
        $(document).on('click', '.address-update', function (e) {
                e.stopPropagation();
                var shipingId = $(this).parents('.address-item').data('id');
                _address.getAddress(shipingId, function (res) {
                    addressModal.show({
                        isUpdate: true,
                        data: res,
                        onSuccess: function () {
                            _this.loadAddressList();
                        }
                    })
                }, function (err) {
                    _mm.errorTips(err);
                });

            }),
            // 地址删除
            $(document).on('click', '.address-delete', function (e) {
                e.stopPropagation();

                var shipingId = $(this).parents('.address-item').data('id');
                if (window.confirm('确认要删除改地址吗？')) {
                    _address.deleteAddress(shipingId, function (res) {
                        _this.loadAddressList();
                    }, function (err) {
                        _mm.errorTips(err);
                    });
                }

            }),
            // 点击关闭弹窗
            $(document).on('click', '.close', function () {
                addressModal.hide()
            })




    },
    // 加载地址列表
    loadAddressList: function () {
        let _this = this;
        // 地址列表
        _address.getAddressList(function (res) {
            _this.addressFilter(res);
            let addressHtml = _mm.renderHtml(templateAddress, res);
            $('.address-con').html(addressHtml);
        }, function (err) {
            $('.address-con').html("<p class='err-tip'>地址加载失败，请刷新重试</p>");
        })

    },
    // 处理地址列表选中状态
    addressFilter: function (data) {
        if (this.data.selectedAddressId) {
            let selectAddressIdFlag = false;
            for (let index = 0, length = data.list.length; index < length; index++) {
                if (data.list[index].id === this.data.selectedAddressId) {
                    data.list[index].isActive = true;
                    selectAddressIdFlag -= true;
                }
            }
            // 如果以前选中的地址不在列表里，将其删除
            if (!selectAddressIdFlag) {
                this.data.selectedAddressId = null;
            }
        }
    },

    // 加载商品清单
    loadProductList: function () {
        let _this = this;
        // 购物车列表
        _order.getProductList(function (res) {
            let productHtml = _mm.renderHtml(templateProduct, res);
            $('.product-con').html(productHtml);
        }, function (err) {
            $('.product-con').html("<p class='err-tip'>商品列表加载失败，请刷新重试</p>");
        })

    },

}
$(function () {
    page.init()
})