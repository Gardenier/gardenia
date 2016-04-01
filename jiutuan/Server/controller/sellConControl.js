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

/**
 * get User List
 * @returns {Function}
 */
exports.userFindAction = function(condition,callback) {
    sellCon.findUser(conditions,dbHelper,callback);
}

exports.userRemoveAction = function() {
    return function(req, res) {
        var conditions ={};
        sellCon.removeUser(conditions,dbHelper,function(result){
            res.json(result);
        });
        //除了要删除user表里的内容，还要删除关联表(user_schoolClass)的内容
    }
}

exports.userUpdateAction = function() {
    return function (req, res) {

        var conditions = {};
        var update = {}//{$set : {userName:xxx}};
        var options = {}//{upsert:false};

        sellCon.updateUser(conditions, update, options, dbHelper, function (result) {
            res.json(result);
        });
        //如果要更加关联对象，需要update user_schoolClass表中的userid 和scoolClassId
    }
}