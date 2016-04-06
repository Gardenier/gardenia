var order =require('../models/order');

/**
 * 调用公共add方法并且传入操作数据库的模型user
 * @returns {Function}
 */
exports.addOrder = function(data,dbHelper,callback) {
    //获取user模型
    var orderModel = order.getModel();
    dbHelper.addData(orderModel,data,callback);

};
/**

 */
// exports.equalUser = function(condition,dbHelper,callback) {

//     var userModel =user.getModel();
//     dbHelper.equalData(userModel,condition,callback);
// };
/**
 * 调用公共update方法并且传入操作数据库的模型user
 * @param conditions
 * @param update
 * @param options
 * @param dbHelper
 * @param callback
 */
// exports.updateUser = function(condition,update,dbHelper,callback) {
//     var userModel =user.getModel();
//     dbHelper.updateData(userModel,condition,update,callback);
// }
/**
 * 调用公共find方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
// exports.findUser = function(conditions,dbHelper,callback) {

//     var userModel =user.getModel();
//     dbHelper.findData(userModel,conditions,callback);

// }

/**
 * 调用公共remove方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
// exports.removeUser = function(conditions,dbHelper,callback) {


//     var userModel =user.getModel();
//     dbHelper.removeData(userModel,conditions,function(result){
//         callback(result);
//     });
// }

