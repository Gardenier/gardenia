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
 * ���������������
 *
 * @param arr Array ��������
 * @param key string �������������
 * @param dir asc����desc����
 */
exports.sortObj = function(arr,key,dir){
    key=key||'id';
    dir=dir||'asc';
    if (arr.length == 0) return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[0][key];//�ָ�ֵ
    var pivotObj = arr[0];//�洢ֵ

    if(dir==='asc'){//����
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] < pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }else{//����
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] > pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }
    return this.sortObj(left,key,dir).concat(pivotObj, this.sortObj(right,key,dir));//concat()��������ַ�������
}