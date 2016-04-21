var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//schema 就是如何定义数据的结构
var sellConSchema = new mongoose.Schema({
	//name: String,//, required: true
	type: String,//, required: true//商品类型
	resName: String,//, required: true//商家名称
	packageName: String,//, required: true  商品名称
	oldPrice: Number,//, required: true  原价
	newPrice: Number,//, required: true   现价
	startDate: String,//, required: true 开始日期
	endDate: String,//, required: true  结束日期
	mealSize: String,//, required: true 适合用餐人数
	area: String,//, required: true 所属商圈
	address: String,  // 具体地址
	info: String,//, required: true 文字描述
	holiday: String,//, required: true  节假日是否通用
	image: String,//, required: true  首页图片
	inimage1: String,  // 内置图片
	inimage2: String,  // 内置图片
	inimage3: String,  //内置图片
	makeAppointment: String,//, required: true是否需要预约
	room: String,//, required: true 有无包间
	packFood: String,//, required: true 是否打包
	wifi: String,//, required: true 有无WiFi
	parkingNum: Number,//, required: true 停车位数
	pjNumber:{   //评价星
		five: Number,
		four: Number,
		three :Number,
		two: Number,
		one: Number
	},//评价个数
	soldNumber: Number,//销量
	phoneNum: String,//电话
	sure: Number//是否通过

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