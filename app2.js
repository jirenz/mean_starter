var express = require('express')
var app = express()



var url = 'mongodb://localhost:27017/'
courses = ["MATH", "PHYSICS", "COMPUTER_SCIENCE"]
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  	console.log("Connected to db")
});

var courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    capacity: Number
})
//console.log(courseSchema)
var Course = mongoose.model('Course', courseSchema)
var math = new Course({name: 'Measure Theory', description: 'Even more headache than Riemannian integration', capacity: 999})

math.save(function(err, math) {
	if (err) {
		console.log(err)
	} else {
		console.log(math.name + ': save success')
	}
})


app.get('/', function (req, res) {
	res.send("Hello World!")
})

app.get('/courses', function (req, res) {
	res.send(courses[0] + courses[1] + courses[2])
})

app.listen(3000, function () {
	console.log("Running server on port 3000.")
})