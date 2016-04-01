var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//schema 就是如何定义数据的结构
var userSchema = new mongoose.Schema({
    name:{type: String, required: true},
	password:{type: String, required: true}
});
//生成方法getModel给予调用，返回user模型
module.exports = {
    getModel: function(){
        return _getModel();
    }
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function(type,err){
    var userModel = global.db.model('Buser',userSchema);
    return userModel;

};