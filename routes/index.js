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

router.get('/scripted', function(req, res, next) {
	res.render('emergency_message');
});

router.get('/closing', function(req, res, next) {
	res.render('closing_message');
});

router.get('/delay', function(req, res, next) {
	res.render('delay_message');
});

router.get('/subscribe', function(req, res, next) {
	res.render('subscribe');
});

router.get('/login', function(req, res, next) {
	res.render('login');
});

module.exports = router;
