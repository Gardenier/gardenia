var dbHelper = require('../DBhelper/dbHelper');
var userDao =require('../DBMongo/usersData');

/**
 * add user
 * @returns {Function}
 */
exports.userAddAction = function(data,callback) {

    userDao.addUser(data,dbHelper,callback);
}
/**
 * equal user
 * @returns {Function}
 */
exports.userEqualAction = function(condition,callback) {

    userDao.equalUser(condition,dbHelper,callback);
}

exports.userUpdateAction = function(condition,update,callback) {
    userDao.updateUser(condition, update,dbHelper,callback);
}
/**
 * get User List
 * @returns {Function}
 */
exports.userFindAction = function(condition,callback) {
    userDao.findUser(conditions,dbHelper,callback);
}

exports.userRemoveAction = function() {
    return function(req, res) {
        var conditions ={};
        userDao.removeUser(conditions,dbHelper,function(result){
            res.json(result);
        });
        //除了要删除user表里的内容，还要删除关联表(user_schoolClass)的内容
    }
}

