var mongoose = require('mongoose');

// Holiday Schema
var holidaySchema = mongoose.Schema({
	hdate:{
		type: Date,
		required: true
	},
	day:{
		type: String,
		required: true
	},
	icon_url:{
		type: String,
		required: true
	},
	title:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Holiday = module.exports = mongoose.model('Holiday', holidaySchema);
 
// Get Holidays
module.exports.getHolidays = function(callback, limit){
	Holiday.find(callback).limit(limit);
}

// Get Holiday
module.exports.getHolidayById = function(id, callback){
	Holiday.findById(id, callback);
}



// Add Holiday
module.exports.addHoliday = function(holiday, callback){
	Holiday.create(holiday, callback);
}

// Update Holiday
module.exports.updateHoliday = function(id, holiday, options, callback){
	var query = {_id: id};
	var update = {
		hdate: holiday.hdate,
		day  : holiday.day,
		icon_url  : holiday.icon_url,
		title  : holiday.title,
		description  : holiday.description
	}
	Holiday.findOneAndUpdate(query, update, options, callback);
}


// Delete Holiday
module.exports.removeHoliday = function(id, callback){
	var query = {_id: id};
	Holiday.remove(query, callback);
}