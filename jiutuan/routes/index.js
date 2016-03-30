var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res,next) {
  res.render('index', { title: 'Express' });    // 到达此路径则渲染index文件，并传出title值供 index.html使用
});

/* GET login page. */
router.route("/login").get(function(req,res){    // 到达此路径则渲染login文件，并传出title值供 login.html使用
	res.render("login",{title:'User Login'});
}).post(function(req,res){ 					   // 从此路径检测到post方式则进行post数据的处理操作
	//get User info
	 //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	var User = global.dbHandel.getModel('user');  
	var uname = req.body.uname;				//获取post上来的 data数据中 uname的值
	User.findOne({name:uname},function(err,doc){   //通过此model以用户名的条件 查询数据库中的匹配信息
		if(err){ 										//错误就返回给原post处（login.html) 状态码为500的错误
			res.send(500);
			console.log(err);
		}else if(!doc){ 								//查询不到用户名匹配信息，则用户名不存在
			req.session.error = '用户名不存在';
			res.send(404);							//	状态码返回404
		//	res.redirect("/login");
		}else{ 
			if(req.body.upwd != doc.password){ 	//查询到匹配用户名的信息，但相应的password属性不匹配
				req.session.error = "密码错误";
				res.send(404);
			//	res.redirect("/login");
			}else{ 									//信息匹配成功，则将此对象（匹配到的user) 赋给session.user  并返回成功
				req.session.user = doc;
				res.send(200);
			//	res.redirect("/home");
			}
		}
	});
});

/* GET register page. */
router.route("/register").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
	res.render("register",{title:'User register'});
}).post(function(req,res){ 
	//这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	var User = global.dbHandel.getModel('user');
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	User.findOne({name: uname},function(err,doc){   // 同理 /login 路径的处理方式
		if(err){ 
			res.send(500);
			req.session.error =  '网络异常错误！';
			console.log(err);
		}else if(doc){ 
			req.session.error = '用户名已存在！';
			res.send(500);
		}else{ 
			User.create({ 							// 创建一组user对象置入model
				name: uname,
				password: upwd
			},function(err,doc){ 
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
// router.route("/busData").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
// 	res.render("busData",{title:'User busData'});
// }).post(function(req,res){ 
// 	//这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
// 	var sellContent = global.dbHandel.getModel('sellContent');
// 	var uname = req.body.uname;
// 	var upwd = req.body.upwd;
// 	sellContent.findOne({name: uname},function(err,doc){   // 同理 /login 路径的处理方式
// 		if(err){ 
// 			res.send(500);
// 			req.session.error =  '网络异常错误！';
// 			console.log(err);
// 		}else if(doc){ 
// 			req.session.error = '用户名已存在！';
// 			res.send(500);
// 		}else{ 
// 			sellContent.create({ 							// 创建一组user对象置入model
// 				name: uname,
// 				password: upwd
// 			},function(err,doc){ 
// 				if (err) {
//                     res.send(500);
//                     console.log(err);
//                 } else {
//                     req.session.error = '用户名创建成功！';
//                     res.send(200);
//                 }
//             });
// 		}
// 	});
// });

/* GET home page. */
router.get("/home",function(req,res){ 
	if(!req.session.user){ 					//到达/home路径首先判断是否已经登录
		req.session.error = "请先登录"
		res.redirect("/login");				//未登录则重定向到 /login 路径
	}
	res.render("home",{title:'Home'});         //已登录则渲染home页面
});
router.route("/busData").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
	res.render("busData",{title:'User busData'});
}).post(function(req,res){  
	var sellContent = global.dbHandel.getModel('sellContent');
	var uname = req.body.uname;
	var utype = req.body.utype;
	var resName = req.body.resName;
	var packageName = req.body.packageName;
	var oldPrice = req.body.oldPrice;
	var newPrice = req.body.newPrice;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var packageNumber = req.body.packageNumber;
	var address = req.body.address;
	var mealSize = req.body.mealSize;
	var info = req.body.info;
	var holiday = req.body.holiday;
	var image = req.body.image;
	var makeAppointment = req.body.makeAppointment;
	var room = req.body.room;
	var packFood = req.body.packFood;
	var wifi = req.body.wifi;
	var parkingNum = req.body.parkingNum;
	sellContent.findOne({name: uname},function(err,doc){   // 同理 /login 路径的处理方式
		if(err){ 
			res.send(500);
			req.session.error =  '网络异常错误！';
			console.log('网络异常错误！'+err);
		}else{
			sellContent.create({ 							// 创建一组user对象置入model
				name: uname,
				type: utype,
				resName: resName,
				packageName: packageName,
				oldPrice: oldPrice,
				newPrice: newPrice,
				startDate: startDate,
				endDate: endDate,
				packageNumber: packageNumber,
				address: address,
				mealSize: mealSize,
				info: info,
				holiday: holiday,
				image: image,
				makeAppointment: makeAppointment,
				room: room,
				packFood: packFood,
				wifi: wifi,
				parkingNum: parkingNum
			},function(err,doc){ 
				if (err) {
	                res.send(500);
	                console.log('create'+err);
	            } else {
	                //req.session.error = '数据录入成功！';
	                res.send(200);
	                console.log('数据录入成功！');
	            }
	        });
		}
	});
});

/* GET logout page. */
router.get("/logout",function(req,res){    // 到达 /logout 路径则登出， session中user,error对象置空，并重定向到根路径
	req.session.user = null;
	req.session.error = null;
	res.redirect("/");
});

/* GET seller login page. */
router.route("/sellerLogin").get(function(req,res){    // 到达此路径则渲染login文件，并传出title值供 login.html使用
	res.render("sellerLogin",{title:'User Login'});
}).post(function(req,res){ 					   // 从此路径检测到post方式则进行post数据的处理操作
	//get User info
	 //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	var User = global.dbHandel.getModel('BUser');  
	var uname = req.body.uname;				//获取post上来的 data数据中 uname的值
	User.findOne({name:uname},function(err,doc){   //通过此model以用户名的条件 查询数据库中的匹配信息
		if(err){ 										//错误就返回给原post处（login.html) 状态码为500的错误
			res.send(500);
			console.log(err);
		}else if(!doc){ 								//查询不到用户名匹配信息，则用户名不存在
			req.session.error = '用户名不存在';
			res.send(404);							//	状态码返回404
		//	res.redirect("/login");
		}else{ 
			if(req.body.upwd != doc.password){ 	//查询到匹配用户名的信息，但相应的password属性不匹配
				req.session.error = "密码错误";
				res.send(404);
			//	res.redirect("/login");
			}else{ 									//信息匹配成功，则将此对象（匹配到的user) 赋给session.user  并返回成功
				req.session.user = doc;
				res.send(200);
				//res.redirect("/busData");
			}
		}
	});
});

/* GET seller register page. */
router.route("/sellerRegister").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
	res.render("sellerRegister",{title:'User register'});
}).post(function(req,res){ 
	//这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
	var User = global.dbHandel.getModel('BUser');
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	User.findOne({name: uname},function(err,doc){   // 同理 /login 路径的处理方式
		if(err){ 
			res.send(500);
			req.session.error =  '网络异常错误！';
			console.log(err);
		}else if(doc){ 
			req.session.error = '用户名已存在！';
			res.send(500);
		}else{ 
			User.create({ 							// 创建一组user对象置入model
				name: uname,
				password: upwd
			},function(err,doc){ 
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
module.exports = router;