var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET show-time.html*/
router.get('/show',function(req, res, next) {
  res.render('show-time', {title: '����ҳ'});
});
/*GET home.html*/
router.get('/home',function(req, res, next) {
  res.render('home', {title: '��ҳ'});
});
/*GET product_detail.html*/
router.get('/product_detail',function(req, res, next) {
  res.render('product_detail', {title: '����ҳ'});
});
module.exports = router;
