var express = require('express')
var course = require('./courses/course.controller.js')
router = express.Router()

router.use('/courses', course)

module.exports = router