var ResumeTemplate = require('./resume.hbs');
var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
	template: ResumeTemplate,
	className: 'l-resume',
	initialize: function(){
	},
	onShow: function(){
	}
});
