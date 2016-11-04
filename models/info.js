var mongoose = require('mongoose');

// Info Schema
var infoSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	} 
});

var Info = module.exports = mongoose.model('Info', infoSchema);
 
// Get Info
module.exports.getInfos = function(callback, limit){
	Info.find(callback).limit(limit);
}

// Add Info
module.exports.addInfo = function(info, callback){
	Info.create(info, callback);
}

// Update Info
module.exports.updateInfo = function(id, info, options, callback){
	var query = {_id: id};
	var update = {
		title  : info.title,
		description  : info.description
	}
	Info.findOneAndUpdate(query, update, options, callback);
}


// Delete Info
module.exports.removeInfo = function(id, callback){
	var query = {_id: id};
	Info.remove(query, callback);
}