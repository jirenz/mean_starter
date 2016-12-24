var express = require('express')
var api_1_0 = require('./api_1_0')
var router = express.Router()

router.use('/api/1.0', api_1_0)
router.get('*', function(req, res) {
		console.log("Response sent")
		res.sendFile('public/index.html', { root: '.' })
	})
module.exports = router
