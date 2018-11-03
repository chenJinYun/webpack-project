/*
 * @Author: kim.chen 
 * @Date: 2018-10-30 19:27:42 
 * @Last Modified by: kim.chen
 * @Last Modified time: 2018-10-30 19:40:16
 */
let _cities = {
    cityInfo: {
        "广东": ['广州', '深圳', '珠海'],
        '香港': ['香港'],
        '广西': ['南宁', '桂林'],
        '北京': ['北京'],
        '上海': ['上海']
    },
    // 获取所有省份
    getProvinces: function () {
        let provinces = [];
        for (const item in this.cityInfo) {
            provinces.push(item)
        }
        return provinces;
    },
    // 获取某省份的城市
    getCities: function (provinceName) {
        return this.cityInfo[provinceName] || [];
    }
}
module.exports = _cities;