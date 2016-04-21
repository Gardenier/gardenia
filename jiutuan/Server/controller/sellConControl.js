var dbHelper = require('../DBhelper/dbHelper');
var sellCon =require('../DBMongo/sellContentData');

/**
 * add user
 * @returns {Function}
 */
exports.sellConAddAction = function(data,callback) {

    sellCon.addSellContent(data,dbHelper,callback);
}
/**
 * equal user
 * @returns {Function}
 */
exports.packageEqualAction = function(condition,callback) {

    sellCon.equalPackageName(condition,dbHelper,callback);
}
exports.sellContentEqualAction = function(condition,callback) {

    sellCon.equalPackageName(condition,dbHelper,callback);
}
/**
 * get User List
 * @returns {Function}
 */
exports.dataFindAction = function(conditions,callback) {
    sellCon.findData(conditions,dbHelper,callback);
}

exports.sellConRemoveAction = function(conditions,callback) {
    sellCon.removeSellCon(conditions,dbHelper,callback);
}

exports.sellConUpdateAction = function(conditions,update,callback) {
    sellCon.updateSellCon(conditions, update, dbHelper,callback);
}
exports.findSoldNumberAction = function(conditions) {
    sellCon.findSoldNumber(conditions);
}
/**
 * 对象数组快速排序
 *
 * @param arr Array 对象数组
 * @param key string 用于排序的属性
 * @param dir asc升序、desc降序
 */
exports.sortObj = function(arr,key,dir){
    key=key||'id';
    dir=dir||'asc';
    if (arr.length == 0) return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[0][key];//分割值
    var pivotObj = arr[0];//存储值

    if(dir==='asc'){//升序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] < pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }else{//降序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] > pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }
    return this.sortObj(left,key,dir).concat(pivotObj, this.sortObj(right,key,dir));//concat()函数多个字符串连接
}