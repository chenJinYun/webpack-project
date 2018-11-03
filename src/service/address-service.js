/*
 * @Author: kim.chen 
 * @Date: 2018-10-20 12:32:46 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-31 19:48:51
 */
var _mm = require('util/mm.js');
var _address = {
    data: {
        "status": 0,
        "data": {
            "pageNum": 1,
            "pageSize": 50,
            "size": 2,
            "orderBy": null,
            "startRow": 1,
            "endRow": 2,
            "total": 2,
            "pages": 1,
            "list": [{
                "id": 8462,
                "userId": 8443,
                "receiverName": "kim",
                "receiverPhone": "13456789999",
                "receiverMobile": null,
                "receiverProvince": "天津",
                "receiverCity": "天津",
                "receiverDistrict": null,
                "receiverAddress": "12",
                "receiverZip": "2323",
                "createTime": 1540812162000,
                "updateTime": 1540812162000
            }, {
                "id": 8463,
                "userId": 8443,
                "receiverName": "kim",
                "receiverPhone": "1345678888",
                "receiverMobile": null,
                "receiverProvince": "吉林省",
                "receiverCity": "延边",
                "receiverDistrict": null,
                "receiverAddress": "433",
                "receiverZip": "",
                "createTime": 1540812180000,
                "updateTime": 1540812180000
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
    },
    // 获取地址列表
    getAddressList: function (resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/shipping/list.do'),
        //     data: {
        //         pageSize: 50
        //     },
        //     success: resolve,
        //     error: reject
        // })
        resolve(this.data.data)
    },
    // 新建地址
    save: function (addressInfo, resolve, reject) {
        // _mm.request({
        //     url: _mm.getServerUrl('/shipping/add.do'),
        //     data: addressInfo,
        //     success: resolve,
        //     error: reject
        // })
        let index = this.data.data.total >0 ? this.data.data.total - 1 : 0
        addressInfo.id = this.data.data.list[index].id + 1;
        addressInfo.userId = 8443;
        this.data.data.total++;
        this.data.data.list.push(addressInfo);
        resolve(true);
    },
    // 获取单条信息
    getAddress: function (id, resolve, reject) {
        let data = this.data.data.list.find(item => {
            return item.id === id;
        });
        resolve(data);
    },
    update: function (data, resolve, reject) {
        this.data.data.list.map(item => {
            if (item.id == data.id) {
                item.receiverName = data.receiverName
                item.receiverProvince = data.receiverProvince
                item.receiverCity = data.receiverCity
                item.receiverPhone = data.receiverPhone
                item.receiverAddress = data.receiverAddress
                item.receiverZip = data.receiverZip;
                console.log(this.data)

                return;
            }

        });
        resolve(true);
    },
    // 删除收件人
    deleteAddress: function (id, resolve, reject) {
        this.data.data.list.map((item, i) => {
            if (item.id == id) {
                this.data.data.list.splice(i, 1);
                this.data.data.total--;
                return;
            }

        });
        resolve(true);
    }
}
module.exports = _address;