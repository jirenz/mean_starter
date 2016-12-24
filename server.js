// Refers https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application

var express = require('express');
var	app = express();
var	body_parser = require('body-parser');
var	db = require('./config/db');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080

mongoose.connect(db.url)

// parse response
app.use(body_parser.json())
app.use(body_parser.json({ type: 'application/vnd.api+json' }))
app.use(body_parser.urlencoded({ extended: true }))

// expose static file
app.use(express.static(__dirname + '/public'))

var routes = require('./app/routes')

app.use(routes)

app.listen(port)

console.log("Listening on port: " + port)
