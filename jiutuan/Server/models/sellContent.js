var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//schema 就是如何定义数据的结构
var sellConSchema = new mongoose.Schema({
    name:{type: String, required: true},
	type:{type: String, required: true},
	resName:{type: String, required: true},
	packageName:{type: String, required: true},
	oldPrice:{type: String, required: true},
	newPrice:{type: String, required: true},
	startDate:{type:String, required: true},
	endDate:{type: String, required: true},
	packageNumber:{type: String, required: true},
	address:{type: String, required: true},
	mealSize:{type: String, required: true},
	info:{type: String, required: true},
	holiday:{type: String, required: true},
	image:{type: String, required: true},
	makeAppointment:{type: String, required: true},
	room:{type: String, required: true},
	packFood:{type: String, required: true},
	wifi:{type: String, required: true},
	parkingNum:{type: String, required: true}
});
//生成方法getModel给予调用，返回user模型
module.exports = {
    getModel: function(){
        return _getModel();
    }
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function(type,err){
    var userModel = global.db.model('sellContent',sellConSchema);
    return userModel;

};