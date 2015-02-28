var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	res.render('home');
});

router.get('/scripted', function(req, res, next) {
	res.render('scripted');
});

router.get('/closing', function(req, res, next) {
	res.render('closing_message');
});

router.get('/delay', function(req, res, next) {
	res.render('delay_message');
});

module.exports = router;
