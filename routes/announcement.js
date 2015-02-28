var express = require('express');
var router = express.Router();
var twilio = require('path/to/twilio-node/lib');

var accountSid = 'ACed50d0bf5af6f9a831f60066ed0a3e22';
var authToken = "";
var client = require('twilio')(accountSid, authToken);
 


/* POST announcement */
router.post('/', function(req, res) {
	var priority = req.body.priority;
	var text = req.body.text;
	

	//creates new announcement:
	var announcement = new Announcement({priority: priority, text: text});
	announcement.save(function(err, doc) {
		if (err) {
			res.send({
				success: false,
				info: "Error when creating new announcement"
			});
		} 
		else {
			//find phone numbers to send events to
			Subscriber.find({}).exec(function(err, allSubscribers) {
				allSubscribers.forEach(function(subscriber) {
					var phoneNumber = subscriber.phoneNumber;
					if (priority == 1) {
						text = "EMERGENCY: " + text;
					}
					
					client.sms.messages.create({
					    body: text,
					    to: "+14108675309",
					    //to: phoneNumber
					    from: "+15005550006"
					}, function(err, sms) {
					    process.stdout.write(sms.sid);
					});
				});
			});
			res.send({
				url: '/',
				success: true
			});
		}
	});	
});

module.exports = router;
