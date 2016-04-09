var dbHelper = require('../DBhelper/dbHelper');
var collection =require('../DBMongo/collectData');

/**
 * add user
 * @returns {Function}
 */
exports.collectAddAction = function(data,callback) {

    collection.addCollection(data,dbHelper,callback);
}

exports.collectRemoveAction = function(conditions,callback) {
	collection.removeCollection(conditions,dbHelper,callback);
}