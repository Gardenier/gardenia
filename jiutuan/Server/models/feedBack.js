var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//评价
//var userSchema = new Schema({any:Schema.Types.Mixed});(any:{})

var feedBackSchema = new Schema({
    userName: String,
	resName: String,
	packageName: String,
	text: String,
	star: Number,
	status: Boolean
});

//生成方法getModel给予调用，返回user模型
module.exports = {
    getModel: function(){
        return _getModel();
    }
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function(){
    var backModel = global.db.model('feedBack',feedBackSchema);
    return backModel;

};