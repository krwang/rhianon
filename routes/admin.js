var express = require('express');
var router = express.Router();

var models = require('../data-mongoose');

/* GET admin listing. */
router.post('/login', function(req, res) {
	var name = req.body.name;
	var password = req.body.password;

	models.Admin.findOne({name: name}, function (err, doc) {
		if (err) {
			res.send({
				success: false,
				info: "Error when searching for admin on login"
			});
		}
		else if (doc) {
			if (doc.password == password) {
				res.send({
					url: '/home',
					success: true
				});
			}
			else {
				res.send({
					success: false,
					info: "The password is incorrect"
				});
			}
		}
		else {
			res.send({
				success: false,
				info: "The admin name is incorrect"
			});
		}
	});
});

router.post('/signup', function (req, res) {
	var name = req.body.name;
	var password = req.body.password;
	var email = req.body.email;
	var phoneNumber = req.body.phoneNumber;

	models.Admin.findOne({name: name}, function (err, doc) {
		console.log(doc);
		if (err) {
			res.send({
				success: false,
				info: "Error when checking admin on login"
			});
		}
		else if (doc) {
			res.send({
				info: "An account already exists with that username",
				success: false
			});
		}
		else {
			var account = new models.Admin({name: name, password: password, email: email, phoneNumber: phoneNumber});
			account.save(function (err, doc) {
				if (err) {
					res.send({
						success: false,
						info: "Error when creating new admin account"
					});
				}
				else {
					res.send({
						url: '/home',
						success: true
					});
				}
			});
		}
	});
});

module.exports = router;
