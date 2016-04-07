var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	id: String,
	userName: String,
	resName: String,
	projectDetail: String,
	pNumber: Number,
	price: Number,
	status: Number,
	feedBack: {
		star: Number,//分数
		text: String,//评价内容
		status: Number//状态
	}
});

//var userSchema = new Schema({any:Schema.Types.Mixed});


//生成方法getModel给予调用，返回user模型
module.exports = {
    getModel: function(){
        return _getModel();
    }
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function(){
    var orderModel = global.db.model('order',orderSchema);
    return orderModel;

};