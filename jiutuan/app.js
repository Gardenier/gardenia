var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var session = require('express-session');

//var home = require('./routes/home');
var users = require('./routes/users');
var ejs = require('ejs');
//var connect = require('connect');
//var mongoose = require('./mongodb');
var mongoose = require('mongoose');
global.dbHandel = require('./database/dbHandel');
global.dbHandel = require('./database/methods');
global.db = mongoose.connect("mongodb://localhost:27017/nodedb");
var app = express();
// var app = connect()
//     .use(connect.logger('dev'))
//     .use(function (req, res) {
//         res.end('hello world\n');
//     })
//     .listen(3000);
// //导入connect插件

//var app = express();
app.use(session({ 
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie:{ 
        maxAge: 1000*60*30
    }
}));

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//让ejs模板文件，使用扩展名为html的文件。
app.engine('.html', ejs.__express);
app.set('view engine', 'html');// app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(connect.session({secret:'lgphp',key:'lgphp',cookie:{maxAge:20000}}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);
//app.use('/home',home);

//session start
app.use(function(req,res,next){ 
    res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   //获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();  //中间件传递
});
//session end

// app.get('/', routes.index);
// app.get('/home', routes.home);
// app.get('/busData', routes.busData);
// app.get('/register',routes.register);
// app.get('/login',routes.login);
// app.get('/product_detail',routes.product_detail);
app.use('/', routes);  // 即为为路径 / 设置路由
app.use('/users', users); // 即为为路径 /users 设置路由
app.use('/login',routes); // 即为为路径 /login 设置路由
app.use('/register',routes); // 即为为路径 /register 设置路由
app.use('/sellerLogin',routes); 
app.use('/sellerRegister',routes);
app.use('/home',routes); // 即为为路径 /home 设置路由
app.use("/logout",routes); // 即为为路径 /logout 设置路由
app.use("/busData",routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
