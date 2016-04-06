var express = require('express');
var router = express.Router();

/* GET index page. */
router.get("/",function(req,res){ 
	/*global.sellConControl.dataFindAction({},function(err,doc){
		res.render("index",{title:'HomeIndex',objList:doc,div:doc.length});//已登录则渲染home页面
	});*/
	res.render('show-time',{title: "欢迎页"});
});

/* GET home page. */
router.get("/home",function(req,res){ 
	if(!req.session.user){ 					//到达/home路径首先判断是否已经登录
		req.session.error = "请先登录"
		res.redirect("/login");				//未登录则重定向到 /login 路径
	}
	global.sellConControl.dataFindAction({},function(err,doc){
		res.render("home",{title:'Home',objList:doc});
	});
	
});

/* GET logout page. */
router.get("/logout",function(req,res){    // 到达 /logout 路径则登出， session中user,error对象置空，并重定向到根路径
	req.session.user = null;
	req.session.error = null;
	res.redirect("/");
});

/* GET login page. */
router.route("/login").get(function(req,res){    
	res.render("login",{title:'User Login'});
}).post(function(req,res){ 					  
	var uname = req.body.uname;	
	var upwd = req.body.upwd;
	var condition = {name: uname};
			
	global.userControl.userEqualAction(condition,function(err,doc){  
		if(err){ 		
			res.send(500);							
			console.log(err);
		}else if(!doc){ 								
			req.session.error = '用户名不存在';
			res.send(401);							
		//	res.redirect("/login");
		}else{ 
			if(req.body.upwd != doc.password){ 
				req.session.error = "密码错误";
				res.send(404);
			//	res.redirect("/login");
			}else{ 									
				req.session.user = doc;
				res.send(200);
			//	res.redirect("/home");
			}
		}
	});
});

/* GET register page. */
router.route("/register").get(function(req,res){   
	res.render("register",{title:'User register'});
}).post(function(req,res){ 
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var arr = {};
	var data = {userName: uname,password: upwd};	
	var condition = {userName: uname};
	global.userControl.userEqualAction(condition,function(err,doc){
		if(err) {
			res.send(500);
            console.log('index'+err);
		}else if(doc){ 
			req.session.error = '找到相同数据！';
			console.log('请重新注册！');
			res.send(300);
		}
		else {
			//req.session.error = '未找到相同数据！';
			global.userControl.userAddAction(data,function(err,doc){ 
				if (err) {
		            res.send(500);
		            console.log(err);
		        } else {
		            req.session.error = '用户名创建成功！';
		            res.send(200);
		        }
		    });	
		}
	});			
});

// router.route("/order").get(function(req,res){   
// 	res.render("order",{title:'User order'});
// }).post(function(req,res){ 

// 	var resName = req.body.resName;
// 	var projectDetail = req.body.projectDetail;
// 	var price = req.body.price;
// 	var status = req.body.status;
// 	var star = req.body.star;
// 	var text = req.body.text;
// 	var resName = req.body.resName;
// 	var sstatus = req.body.sstatus;
// 	var data = {
// 		resName: resName,projectDetail: projectDetail,
// 		price: price,status:status,star: star,text:text,sstatus: sstatus
// 	};	
// 	var condition = {userName: uname};
// 	global.userControl.userAddDocumentAction(data,function(err,doc){ 
// 	if (err) {
//             res.send(500);
//             console.log(err);
//         } else {
//             req.session.error = '用户名创建成功！';
//             res.send(200);
//         }
//     });		
// });


/* GET seller login page. */
router.route("/sellerLogin").get(function(req,res){    // 到达此路径则渲染login文件，并传出title值供 login.html使用
	res.render("sellerLogin",{title:'User Login'});
}).post(function(req,res){ 					   // 从此路径检测到post方式则进行post数据的处理操作
	var uname = req.body.uname;		
	var condition = {name: uname};		//获取post上来的 data数据中 uname的值
	global.BuserControl.BuserEqualAction(condition,function(err,doc){  
		if(err){ 		
			res.send(500);							
			console.log(err);
		}else if(!doc){ 								
			req.session.error = '用户名不存在';
			res.send(401);							
		//	res.redirect("/login");
		}else{ 
			if(req.body.upwd != doc.password){ 
				req.session.error = "密码错误";
				res.send(404);
			//	res.redirect("/login");
			}else{ 									
				req.session.user = doc;
				res.send(200);
			//	res.redirect("/home");
			}
		}
	});
});

/* GET seller register page. */
router.route("/sellerRegister").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
	res.render("sellerRegister",{title:'User register'});
}).post(function(req,res){ 
	//这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	//var User = global.dbHandel.getModel('BUser');
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var data = {name: uname,password: upwd};
	var condition = {name: uname};;
	global.BuserControl.BuserEqualAction(condition,function(err,doc){
		if(err) {
			res.send(500);
            console.log('index'+err);
		}else if(doc){ 
			req.session.error = '找到相同数据！';
			console.log('请重新注册！');
			res.send(300);
		}
		else {
			//req.session.error = '未找到相同数据！';
			global.BuserControl.BuserAddAction(data,function(err,doc){ 
			if (err) {
		            res.send(500);
		            console.log(err);
		        } else {
		            req.session.error = '用户名创建成功！';
		            res.send(200);
		        }
		    });	
		}
	});	
});

/**/
router.route("/busData").get(function(req,res){  
	if(!req.session.user){ 					//到达/home路径首先判断是否已经登录
		req.session.error = "请先登录"
		res.redirect("/sellerLogin");				//未登录则重定向到 /login 路径
	}
	res.render("busData",{title:'User busData'});
}).post(function(req,res){ 
	//var sellContent = global.sellContent.getModel();
	//var name = req.body.name;
	var type = req.body.type;
	var resName = req.body.resName;
	var packageName = req.body.packageName;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var image = req.body.image;
	var oldPrice = req.body.oldPrice;
	var newPrice = req.body.newPrice;
	var mealSize = req.body.mealSize;
	var area = req.body.area;
	var address = req.body.address;
	var phoneNum = req.body.phoneNum;
	var holiday = req.body.holiday;
	var makeAppointment = req.body.makeAppointment;
	var room = req.body.room;
	var packFood = req.body.packFood;
	var wifi = req.body.wifi;
	var parkingNum = req.body.parkingNum;
	var info = req.body.info;
	var item = {five:0,four:0,three:0,two:0,one:0};
	var soldNumber = 0;
	var data = {
		//name: name,
		type: type,
		resName: resName,
		packageName: packageName,
		startDate: startDate,
		endDate: endDate,
		image: image,
		oldPrice: oldPrice,
		newPrice: newPrice,
		mealSize: mealSize,
	 	area: area,
		address: address,
		holiday: holiday,
		makeAppointment: makeAppointment,
		room: room,
		packFood: packFood,
		wifi: wifi,
		parkingNum: parkingNum,
		info: info,
		pjNumber: item,
		soldNumber: soldNumber,
		phoneNum: phoneNum

	};
	// sellContent.findOne({resName:resName},function(err,doc){   
	// 	if(err){ 
	// 		res.send(500);
	// 		req.session.error =  '网络异常错误！';
	// 		console.log(err);
	// 	}else if(doc){ 
	// 		req.session.error = '用户名已存在！';
	// 		res.send(500);
	// 	}else{ 
	// 		sellContent.collection.insert({ 							
	// 			name: name,
	// 			type: type,
	// 			resName: resName,
	// 			packageName: packageName,
	// 			startDate: startDate,
	// 			endDate: endDate,
	// 			image: image,
	// 			oldPrice: oldPrice,
 // 				newPrice: newPrice,
 // 				mealSize: mealSize,
 // 			 	packageNumber: packageNumber,
 // 				address: address,
	// 			holiday: holiday,
	// 			makeAppointment: makeAppointment,
	// 			room: room,
	// 			packFood: packFood,
	// 			wifi: wifi,
	// 			parkingNum: parkingNum,
	// 			info: info,
	// 			pjNumber: data,
	// 			// pjNumber.four: four,
	// 			// pjNumber.three: three,
	// 			// pjNumber.two: two,
	// 			// pjNumber.one: one,
	// 			soldNumber: soldNumber
 				

	// 		},function(err,doc){ 
	// 			if (err) {
 //                    res.send(500);
 //                    console.log(err);
 //                } else {
 //                    req.session.error = '用户名创建成功！';
 //                    res.send(200);
 //                }
 //            });
	// 	}
	// });
	global.sellConControl.packageEqualAction({packageName:packageName},function(err,doc){
		if(err) {
			res.send(500);
            console.log('index'+err);
		}else if(doc){ 
			req.session.error = '请创建新的套餐！';
			//console.log('请创建新的套餐！');
			res.send(300);
		}
		else {
			global.sellConControl.sellConAddAction(data,function(err,doc){
				if (err) {
		            res.send(500);
		            console.log(err);
		        } else {
		            req.session.error = '录入数据成功！';
		            res.send(200);
		        }
		    });
		}
	});	
	
});

//忘记密码 重新设置
router.route("/foundPassword").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
	res.render("foundPassword",{title:'User register'});
}).post(function(req,res){ 
	//这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	//var User = global.dbHandel.getModel('user');
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var data = {password: upwd};	
	global.userControl.userEqualAction({name: uname},function(err,doc){
		if(err) {
			res.send(500);
            req.session.error = '500！';
		}else if(!doc){ 
			req.session.error = '用户名不存在！';
			//console.log('请重新注册！');
			res.send(404);
		}
		else {
			//req.session.error = '未找到相同数据！';
			global.userControl.userUpdateAction({name: uname},data,function(err,doc){ 
				if (err) {
		            res.send(500);
		            console.log(err);
		        } else {
		            req.session.error = '密码修改成功！';
		            res.send(200);
		        }
		    });
		}
	});
});

//列表页
router.route('/product_list/:type').get(function(req, res){
		if(req.params.type == "cate"){
			global.sellConControl.dataFindAction({type: "美食"},function(err, List){
				res.render("product_list",{title: "美食-列表页",objList:List});
			});
		}
		else if(req.params.type == "movie"){
			global.sellConControl.dataFindAction({type: "电影"},function(err, List){
				res.render("product_list",{title: "电影-列表页",objList:List});
			});
		}
		else if(req.params.type == "entertainment"){
			global.sellConControl.dataFindAction({type: "娱乐"},function(err, List){
				res.render("product_list",{title: "休闲娱乐-列表页",objList:List});
			});
		}
		else if(req.params.type == "shopping"){
			global.sellConControl.dataFindAction({type: "购物"},function(err, List){
				res.render("product_list",{title: "购物-列表页",objList:List});
			});
		}
		else if(req.params.type == "service"){
			global.sellConControl.dataFindAction({type: "服务"},function(err, List){
				res.render("product_list",{title: "生活服务-列表页",objList:List});
			});
		}
		else if(req.params.type == "grogshop") {
			global.sellConControl.dataFindAction({type: "酒店"},function(err, List){
				res.render("product_list",{title: "酒店-列表页",objList:List});
			});
		}
});
//详情页
router.route("/product_detail/:type").get(function(req,res){
	/*console.log('req.query.id'+req.query.id);
	global.sellConControl.dataFindAction({_id:req.query.id},function(err,doc){
		res.render("product_detail",{title:'Home',objList:doc});//已登录则渲染home页面
	});*/
	if(req.params.type == "cate"){
		global.sellConControl.dataFindAction({type: "美食",_id:req.query.id},function(err, List){
			res.render("product_detail",{title: "美食-详情页",objList:List});
		});
	}
	else if(req.params.type == "movie"){
		global.sellConControl.dataFindAction({type: "电影",_id:req.query.id},function(err, List){
			res.render("product_detail",{title: "电影-详情页",objList:List});
		});
	}
	else if(req.params.type == "entertainment"){
		global.sellConControl.dataFindAction({type: "娱乐",_id:req.query.id},function(err, List){
			res.render("product_detail",{title: "休闲娱乐-详情页",objList:List});
		});
	}
	else if(req.params.type == "shopping"){
		global.sellConControl.dataFindAction({type: "购物",_id:req.query.id},function(err, List){
			res.render("product_detail",{title: "购物-详情页",objList:List});
		});
	}
	else if(req.params.type == "service"){
		global.sellConControl.dataFindAction({type: "服务",_id:req.query.id},function(err, List){
			res.render("product_detail",{title: "生活服务-详情页",objList:List});
		});
	}
	else if(req.params.type == "grogshop") {
		global.sellConControl.dataFindAction({type: "酒店",_id:req.query.id},function(err, List){
			res.render("product_detail",{title: "酒店-详情页",objList:List});
		});
	}
});

//购买页面1 提交订单
router.route("/buyStep_1").get(function(req,res){    
	global.sellConControl.dataFindAction({_id:req.query.id},function(err,doc){
		res.render("buyStep_1",{title:'Home',objList:doc});
	});
}).post(function(req,res){
	var name = req.body.userName;
	var rname = req.body.resName; 
	var pd = req.body.projectDetail;
	var price = req.body.price;
	var status = req.body.status;
	var feed = {
		star: 0,//分数
		text: 'dd',//评价内容
		status: 0//状态
	};
	var data = {
		userName: name,
		resName: rname,
		projectDetail: pd,
		price: price,
		status: status,
		feedBack: feed
	};
	console.log(data.userName+'\n'+
		data.resName+'\n'+
		data.projectDetail+'\n'+
		data.price+'\n'+
		data.status+'\n'+
		data.feedBack.star+'\n'+
		data.feedBack.text+'\n'+
		data.feedBack.status+'\n');
	global.orderControl.orderAddAction(data,function(err,doc){
		if (err) {
            res.send(500);
            console.log(err);
        } else {
            ///req.session.error = '密码修改成功！';
            console.log('订单已录入');
            res.send(200);
        }
	});
});

//购买页面1 支付
router.route("/buyStep_2").get(function(req,res){    
	res.render("buyStep_2",{title:'Home'});
});
//加入购物车 跳转页面
router.route("/shopCar").get(function(req,res){    
	global.sellConControl.dataFindAction({_id:req.query.id},function(err,doc){
		res.render("shopCar",{title:'Home',objList:doc});
	});
});
//个人中心
router.route("/userCenter").get(function(req,res){
	//global.orderControl.dataFindAction({},function(err,doc){,objList: doc
		res.render("userCenter",{title:"个人中心"});
	//});
	//res.render("userCenter",{title:""});
});

module.exports = router;
