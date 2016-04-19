var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


//var userSchema = new Schema({any:Schema.Types.Mixed});(any:{})

var userSchema = new Schema({
    name: String,
	password: String
});

//生成方法getModel给予调用，返回user模型
module.exports = {
    getModel: function(){
        return _getModel();
    }
};

//通过db将表user和Schema结构连接在一起，没有表的话会自动产生。
var _getModel = function(){
    var userModel = global.db.model('user',userSchema);
    return userModel;

};