var dbHelper = require('../DBhelper/dbHelper');
var orderDao =require('../DBMongo/orderData');

/**
 * add order
 * @returns {Function}
 */
exports.orderAddAction = function(data,callback) {

    orderDao.addOrder(data,dbHelper,callback);
}
/**
 * equal user
 * @returns {Function}
 */

//更新 status 已经付款
exports.orderUpdateAction = function(condition,update,callback) {
    orderDao.updateOrder(condition,update,dbHelper,callback);
}

/**
 * get User List
 * @returns {Function}
 */
exports.orderFindAction = function(conditions,callback) {
    orderDao.findOrder(conditions,dbHelper,callback);
}

exports.orderRemoveAction = function(conditions,callback) {
	orderDao.removeOrder(conditions,dbHelper,callback);
}

