var mongoose = require('mongoose');

module.exports = mongoose.model('Course', {
	name: {
		type: String
	},
	label: {
		type: String
	},
	description: {
		type: String,
		default: 'No description available.'
	},
	capacity: {
		type: Number
	},
	enrolled: {
		type: Number
		default: 0
	}
})