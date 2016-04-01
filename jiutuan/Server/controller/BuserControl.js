var dbHelper = require('../DBhelper/dbHelper');
var bD =require('../DBMongo/BusersData');


/**
 * add user
 * @returns {Function}
 */
exports.BuserAddAction = function(data,callback) {

    bD.addBUser(data,dbHelper,callback);
}
/**
 * equal user
 * @returns {Function}
 */
exports.BuserEqualAction = function(condition,callback) {

    bD.equalBUser(condition,dbHelper,callback);
}

//修改密码 更新密码
exports.BuserUpdateAction = function() {
    bD.updateUser(condition, update, dbHelper,callback);
}
/**
 * get User List
 * @returns {Function}
 */
exports.userFindAction = function(condition,callback) {
    bD.findUser(conditions,dbHelper,callback);
}

exports.userRemoveAction = function() {
    return function(req, res) {
        var conditions ={};
        bD.removeUser(conditions,dbHelper,function(result){
            res.json(result);
        });
        //除了要删除user表里的内容，还要删除关联表(user_schoolClass)的内容
    }
}

