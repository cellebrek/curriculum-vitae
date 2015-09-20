var Backbone = require('backbone');
var articleModel = require('../models/article');

module.exports = Backbone.Collection.extend({
	model: articleModel
});