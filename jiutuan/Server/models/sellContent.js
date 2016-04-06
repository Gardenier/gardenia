var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//schema 就是如何定义数据的结构
var sellConSchema = new mongoose.Schema({
    //name: String,//, required: true
	type: String,//, required: true
	resName: String,//, required: true
	packageName: String,//, required: true
	oldPrice: Number,//, required: true
	newPrice: Number,//, required: true
	startDate: String,//, required: true
	endDate: String,//, required: true
	mealSize: String,//, required: true
	area: String,//, required: true
	address: String,
	info: String,//, required: true
	holiday: String,//, required: true
	image: String,//, required: true
	makeAppointment: String,//, required: true
	room: String,//, required: true
	packFood: String,//, required: true
	wifi: String,//, required: true
	parkingNum: Number,//, required: true
	pjNumber:{
		five: Number,
		four: Number,
		three :Number,
		two: Number,
		one: Number
	},//评价个数
	soldNumber: Number,
	phoneNum: String

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