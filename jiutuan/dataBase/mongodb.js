// var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://localhost:27017/test';	
// var insertData = function(db, callback) {  
//   //连接到表  
//   var collection = db.collection('tb2');
//   //插入数据
//   var data = [{"name":'wilson001',"age":21},{"name":'wilson002',"age":22}];
//   collection.insert(data, function(err, result) { 
//     if(err)
//     {
//       console.log('Error:'+ err);
//       return;
//     }	 
//     callback(result);
//   });
// }
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//   console.log("连接成功！");
//   insertData(db, function(result) {
//     console.log(result);
//     db.close();
//   });
// });
// module.exports = {
// 	con:function(){
// 		console.log("hello kyuhyun");
// 	}
// }


//mongoose
var mongoose =require('mongoose'),
    Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/test',
function(err){
    if(err){
      console.log('连接失败');
    }
});
var User = new Schema({
  name: String,
  password: String
});

module.exports = mongoose.model('User', User);  