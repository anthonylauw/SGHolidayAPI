var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

 

app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Client IP:', ip);
  next();
});

Holiday =require('./models/holiday');
Info =require('./models/info');

// Use native Node promises
mongoose.Promise = global.Promise;

// Connect to Mongoose
mongoose.connect('mongodb://localhost/sgholiday')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var db = mongoose.connection;


app.get('/', function(req, res){
	res.send('Please use /api/holiday')
	 .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

});

app.get('/api/holiday', function(req, res){
	Holiday.getHolidays(function(err, holiday){
		if(err){
			throw err;
			
		}
		res.json(holiday);
		 

	});
});
app.get('/api/holiday/:_id', function(req, res){
	Holiday.getHolidayById(req.params._id, function(err, holiday){
		try{
			if(err){
				throw err;				 
			}
			res.json(holiday);

		 } catch(e) {
      		res.writeHead(200);
      		res.end('I forgive your intention to choke me with your Bad Parameter sent across to my brain, ');
    		}
	});
});


app.post('/api/holiday', function(req, res){
	var holiday = req.body;
	Holiday.addHoliday(holiday, function(err, holiday){
		if(err){
			throw err;
		}
		res.json(holiday);

	});
});

app.put('/api/holiday/:_id', function(req, res){
	var id = req.params._id;
	var holiday = req.body;
	Holiday.updateHoliday(id, holiday, {}, function(err, holiday){
		if(err){
			throw err;
		}
		res.json(holiday);
	});
});

app.delete('/api/holiday/:_id', function(req, res){
	var id = req.params._id;
	Holiday.removeHoliday(id, function(err, holiday){
		if(err){
			throw err;
		}
		res.json(holiday);
	});
});


// Info section

app.get('/api/info', function(req, res){
	Info.getInfos(function(err, info){
		if(err){
			throw err;
		}
		res.json(info);

	});
});




app.listen(3000);
console.log('Running on port 3000...');