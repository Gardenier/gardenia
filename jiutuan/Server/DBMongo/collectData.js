var collection =require('../models/collection');

/**
 * 调用公共add方法并且传入操作数据库的模型user
 * @returns {Function}
 */
exports.addCollection = function(data,dbHelper,callback) {
    //获取user模型
    var collectionModel = collection.getModel();
    dbHelper.addData(collectionModel,data,callback);

};

exports.removeCollection = function(conditions,dbHelper,callback) {


    var collectionModel = collection.getModel();
    dbHelper.removeData(collectionModel,conditions,callback);
}
exports.findData = function(conditions,dbHelper,callback) {

    var collectionModel = collection.getModel();
    dbHelper.findData(collectionModel,conditions,callback);

};

