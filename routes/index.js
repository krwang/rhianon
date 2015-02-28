var express = require('express');
var router = express.Router();

var models = require('../data-mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
	res.render('home');
});

router.get('/subscribe', function(req, res, next) {
	res.render('subscribe');
});

router.get('/login', function(req, res, next) {
	res.render('login');
});

module.exports = router;
