var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//收藏
var collectionSchema = new Schema({
	userName: String,
	id: String,
	c_resName: String,
	projectDetail: String,
	price: String
});;

//var userSchema = new Schema({any:Schema.Types.Mixed});


//生成方法getModel给予调用，返回user模型
module.exports = {
    getModel: function(){
        return _getModel();
    }
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function(){
    var collectionModel = global.db.model('collection',collectionSchema);
    return collectionModel;

};