var express = require('express');
var router = express.Router();

var models = require('../data-mongoose');

/* POST subscriber listing. */
router.post('/subscribe', function (req, res) {
	var name = req.body.name;
	var phoneNumber = req.body.phoneNumber;

	models.Subscriber.find({name: name}, function (err, doc) {
		console.log(doc);
		if (err) {
			res.send({
				success: false,
				info: "Error when checking for sub on subscribe"
			});
		}
		else if (doc && doc.length > 0) {
			res.send({
				success: false,
				info: "A sub already exists with that name"
			});
		}
		else {
			var sub = new models.Subscriber({name: name, phoneNumber: phoneNumber});
			sub.save(function (err, doc) {
				if (err) {
					res.send({
						success: false,
						info: "Error when creating new sub on subscribe"
					});
				}
				else {
					res.send({
						success: true
					});
				}
			});
		}
	});
});

/*GET subscriber listing */

module.exports = router;
