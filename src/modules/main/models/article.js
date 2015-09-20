var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		title: "",
		content: "",
		slider: null,
		gallery: null
	}
});