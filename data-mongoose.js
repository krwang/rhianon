var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
	name: String,
	password: String,
	email: String,
	phoneNumber: String
});

var historySchema = mongoose.Schema({
	announcements: [{type: mongoose.Schema.Types.ObjectId, ref: 'announcement'}]
});

var announcementSchema = mongoose.Schema({
	priority: Number,
	text: String,
	location: String,
	dateTime: String
});

var subscriberSchema = mongoose.Schema({
	name: String,
	phoneNumber: String
});

var Admin = mongoose.model('Admin', adminSchema);
var History = mongoose.model('History', historySchema);
var Announcement = mongoose.model('Announcement', announcementSchema);
var Subscriber = mongoose.model('Subscriber', subscriberSchema);

exports.Admin = Admin;
exports.History = History;
exports.Announcement = Announcement;
exports.Subscriber = Subscriber;