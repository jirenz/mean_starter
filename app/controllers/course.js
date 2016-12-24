var express = require('express');
var Course = require('../models/course');

router = express.Router();

router.get('/', function(req, res) {
	console.log('get')
	Course.find({}, function(err, courses) {
		if (err) {
			console.log(err);
			res.sendStatus(404);
		} else {
			res.status(200).json(courses);
		}
	});
});
router.get('/:course_id', function(req, res) {
	course_id = req.params.course_id
	console.log('get' + course_id)
	Course.findById(course_id, function(err, course) {
		if (err) {
			console.log(err);
			res.sendStatus(404);
		} else {
			res.status(200).json(course);
		}
	});
});
router.post('/', function(req, res) {
	console.log('post')
	/*{
		name: req.body.name,
		label: req.body.label,
		description: req.body.description,
		capacity: req.body.capacity
	}*/
	var attributes = req.body
	new_course = new Course(attributes)
	new_course.save(function(err, course) {
		if (err) {
			console.log(err);
			res.sendStatus(404);
		} else {
			res.status(200).json(course);
		}
	})
});
router.put('/:course_id', function(req,res) {
	console.log('put')
	course_id = req.params.course_id;
	var attributes = req.body;
	Course.findByIdAndUpdate(course_id, attributes, function(err, course) {
		if (err) {
			console.log(err);
			res.sendStatus(404);
		} else {
			res.status(200).json(course);
		}
	});
});
router.delete('/:course_id', function(req, res) {
	console.log('delete')
	course_id = req.params.course_id;
	Course.findByIdAndRemove(course_id, function(err, course) {
		if (err) {
			res.sendStatus(404);
		} else {
			res.status(200).json(course);
		}
	});
});
module.exports = router;
