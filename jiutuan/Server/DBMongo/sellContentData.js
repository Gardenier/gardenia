var sell =require('../models/sellContent');

/**
 * 调用公共add方法并且传入操作数据库的模型user
 * @returns {Function}
 */
exports.addSellContent = function(data,dbHelper,callback) {
    //获取user模型
    var sellContentModel = sell.getModel();
    dbHelper.addData(sellContentModel,data,callback);

};
/**

 */
exports.equalPackageName = function(condition,dbHelper,callback) {

    var sellContentModel = sell.getModel();
    dbHelper.equalData(sellContentModel,condition,callback);
};
/**
 * 调用公共find方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
exports.findData = function(conditions,dbHelper,callback) {

    var sellContentModel = sell.getModel();
    dbHelper.findData(sellContentModel,conditions,callback);

}

/**
 * 调用公共remove方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
exports.removeUser = function(conditions,dbHelper,callback) {


    var userModel = sell.getModel();
    dbHelper.removeData(userModel,conditions,function(result){
        callback(result);
    });
}

/**
 * 调用公共update方法并且传入操作数据库的模型user
 * @param conditions
 * @param update
 * @param options
 * @param dbHelper
 * @param callback
 */
exports.updateUser = function(conditions,update,options,dbHelper,callback) {


    var userModel = sell.getModel();
    dbHelper.updateData(userModel,conditions,update,options,function(result){
        callback(result);
    });
}