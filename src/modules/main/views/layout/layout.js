var LayoutTemplate = require('./layout.hbs');
var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
	template: LayoutTemplate,
	tagName: 'main',
	className: 'l-main',
	ui: {

	},
	regions: {
        resume: '[data-resume]'
	},
	initialize: function(){
	},
	onShow: function(){
	}
});
