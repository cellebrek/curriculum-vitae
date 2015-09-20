var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
	template: LayoutTemplate,
	tagName: 'section',
	className: 'main',
	ui: {

	},
	regions: {
		header: '.header-container',
		footer: '.footer-container',
		mainContainer: '.main-container'
	},
	initialize: function(){
	},
	onShow: function(){
	}
});