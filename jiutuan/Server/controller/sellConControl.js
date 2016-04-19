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

    sellCon.equalSellContent(condition,dbHelper,callback);
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