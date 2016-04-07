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
// exports.userEqualAction = function(condition,callback) {

//     userDao.equalUser(condition,dbHelper,callback);
// }

//更新 status 已经付款
exports.orderUpdateAction = function(condition,update,callback) {
    orderDao.updateOrder(condition,update,dbHelper,callback);
}

// exports.userAddDocumentAction = function(data,callback){
//     userDao.addDocument(data,dbHelper,callback);
// }
/**
 * get User List
 * @returns {Function}
 */
exports.orderFindAction = function(conditions,callback) {
    orderDao.findOrder(conditions,dbHelper,callback);
}

// exports.userRemoveAction = function() {
//     return function(req, res) {
//         var conditions ={};
//         userDao.removeUser(conditions,dbHelper,function(result){
//             res.json(result);
//         });
//         //除了要删除user表里的内容，还要删除关联表(user_schoolClass)的内容
//     }
// }

