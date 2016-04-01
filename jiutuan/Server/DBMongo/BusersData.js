var buser =require('../models/Busers');

/**
 * 调用公共add方法并且传入操作数据库的模型user
 * @returns {Function}
 */
exports.addBUser = function(data,dbHelper,callback) {
    //获取user模型
    var buserModel = buser.getModel();
    dbHelper.addData(buserModel,data,callback);

};
/**

 */
exports.equalBUser = function(condition,dbHelper,callback) {

    var buserModel = buser.getModel();
    dbHelper.equalData(buserModel,condition,callback);
};
/**
 * 调用公共update方法并且传入操作数据库的模型user
 * @param conditions
 * @param update
 * @param options
 * @param dbHelper
 * @param callback
 */
exports.updateBUser = function(condition,update,dbHelper,callback) {


    var buserModel = buser.getModel();
    dbHelper.updateData(buserModel,condition,update,callback);
}
/**
 * 调用公共find方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
exports.findUser = function(conditions,dbHelper,callback) {

    var userModel =user.getModel();
    dbHelper.findData(userModel,conditions,callback);

}

/**
 * 调用公共remove方法并且传入操作数据库的模型user
 * @param conditions
 * @param dbHelper
 * @param callback
 */
exports.removeUser = function(conditions,dbHelper,callback) {


    var userModel =user.getModel();
    dbHelper.removeData(userModel,conditions,function(result){
        callback(result);
    });
}

