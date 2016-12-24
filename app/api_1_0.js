var express = require('express')
var course = require('./controllers/course')
router = express.Router()

router.use('/courses', course)

module.exports = router