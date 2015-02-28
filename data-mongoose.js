var mongoose = require('mongoose');

var schoolSchema = mongoose.Schema({
	admins: [{type: mongoose.Schema.Types.ObjectId, ref: 'admin'}]
});

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

var subscribersSchema = mongoose.Schema({
	subscribers: [{
		name: String,
		phoneNumber: String
	}]
});

var School = mongoose.model('School', schoolSchema);
var Admin = mongoose.model('Admin', adminSchema);
var History = mongoose.model('History', historySchema);
var Announcement = mongoose.model('Announcement', announcementSchema);
var Subscribers = mongoose.model('Subscribers', subscribersSchema);

exports.School = School;
exports.Admin = Admin;
exports.History = History;
exports.Announcement = Announcement;
exports.Subscribers = Subscribers;