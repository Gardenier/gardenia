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
 * 调用公共update方法并且传入操作数据库的模型user
 * @param conditions
 * @param update
 * @param options
 * @param dbHelper
 * @param callback
 */
exports.updateOrder = function(condition,update,dbHelper,callback) {
    var orderModel = order.getModel();
    dbHelper.updateData(orderModel,condition,update,callback);
}
/**
 * 调用公共find方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
exports.findOrder = function(conditions,dbHelper,callback) {

    var orderModel = order.getModel();
    dbHelper.findData(orderModel,conditions,callback);
}

/**
 * 调用公共remove方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
exports.removeOrder = function(conditions,dbHelper,callback) {


    var orderModel = order.getModel();
    dbHelper.removeData(orderModel,conditions,callback);
}

