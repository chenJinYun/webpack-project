/*
 * @Author: kim.chen 
 * @Date: 2018-10-29 18:25:30 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-31 19:40:54
 */
var _address = require('service/address-service.js');
var _mm = require('util/mm.js');
var templateAddressModal = require('./address-modal.string');
let _cities = require('util/cities/index.js')

var addressModal = {
    show: function (option) {
        this.option = option;
        this.option.data = option.data || {};
        this.$modalWrap = $('.modal-wrap');
        //   渲染页面
        this.loadModal();
        // 绑定事件
        this.bindEvent();

    },
    bindEvent: function () {
        let _this = this;
        // 省份城市的二级联动
        this.$modalWrap.find('#receiver-province').change(function () {
            let selectProvince = $(this).val();
            _this.loadCities(selectProvince);
        })
        // 提交收货地址
        this.$modalWrap.find('.address-btn').click(function () {
            var reveiverInfo = _this.getRecevierInfo(),
                isUpdate = _this.option.isUpdate;
            // 使用新地址且验证通过
            if (!isUpdate && reveiverInfo.status) {
                _address.save(reveiverInfo.data, function (res) {
                    _mm.successTips('地址添加成功！')
                    _this.hide();
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess(res);
                }, function (err) {
                    _mm.errorTips(err)
                })
            } else if (isUpdate && reveiverInfo.status) { //鞥更新地址
                _address.update(reveiverInfo.data, function (res) {
                    _mm.successTips('地址更新成功！')
                    _this.hide();
                    typeof _this.option.onSuccess === 'function' && _this.option.onSuccess();
                }, function (err) {
                    _mm.errorTips(err)
                })
            } else { //验证不通过
                _mm.errorTips(reveiverInfo.errMsg || '好像哪里不对了！')
            }
        })
    },
    loadModal: function () {
        let html = _mm.renderHtml(templateAddressModal, {
            isUpdate: this.option.isUpdate,
            data: this.option.data
        });
        this.$modalWrap.html(html);
        // 加载省份
        this.loadProvince();

    },
    // 加载省份信息
    loadProvince: function () {
        let provinces = _cities.getProvinces() || [],
            $provinceSlect = this.$modalWrap.find('#receiver-province');
        $provinceSlect.html(this.getSelectOption(provinces));
        // 如果是更新地址，并且有省份信息，回填
        if (this.option.isUpdate && this.option.data.receiverProvince) {
            $provinceSlect.val(this.option.data.receiverProvince);
            // 加载城市            
            this.loadCities(this.option.data.receiverProvince)
        }
    },
    // 加载城市信息
    loadCities: function (provinceName) {
        let cities = _cities.getCities(provinceName) || [],
            $citySelect = this.$modalWrap.find('#receiver-city');
        $citySelect.html(this.getSelectOption(cities));
        // 如果是更新地址，并且有城市信息，回填
        if (this.option.isUpdate && this.option.data.receiverCity) {
            $citySelect.val(this.option.data.receiverCity);
        }
    },
    // 获取表单收件人信息，并做表单验证
    getRecevierInfo: function () {
        let recevierInfo = {},
            result = {
                status: false
            };
        recevierInfo.receiverName = $.trim(this.$modalWrap.find('#receiver-name').val());
        recevierInfo.receiverProvince = $.trim(this.$modalWrap.find('#receiver-province').val());
        recevierInfo.receiverCity = $.trim(this.$modalWrap.find('#receiver-city').val());
        recevierInfo.receiverPhone = $.trim(this.$modalWrap.find('#receiver-phone').val());
        recevierInfo.receiverAddress = $.trim(this.$modalWrap.find('#receiver-address').val());
        recevierInfo.receiverZip = $.trim(this.$modalWrap.find('#receiver-zip').val());

        if (this.option.isUpdate) {
            recevierInfo.id = this.$modalWrap.find('#receiver-id').val();
        }
        if (!recevierInfo.receiverName) {
            result.errMsg = "请输入收件人姓名！";
        } else if (!recevierInfo.receiverProvince) {
            result.errMsg = "请选择收件人省份！";

        } else if (!recevierInfo.receiverCity) {
            result.errMsg = "请选择收件人城市！";

        } else if (!recevierInfo.receiverPhone) {
            result.errMsg = "请输入收件人电话！";
        } else if (!recevierInfo.receiverAddress) {
            result.errMsg = "请输入收件人详细地址！";
        } else {
            result.status = true;
            result.data = recevierInfo;
        }
        return result;
    },
    // 获取select的选项 输入：arr 输出:html
    getSelectOption: function (optionArrary) {
        let html = '<option value="">请选择</option>'
        for (let i = 0, iLength = optionArrary.length; i < iLength; i++) {
            html += '<option value="' + optionArrary[i] + '">' + optionArrary[i] + '</option>';
        }
        return html;
    },
    // 关闭弹窗
    hide: function () {
        this.$modalWrap.empty();
    }


}
module.exports = addressModal