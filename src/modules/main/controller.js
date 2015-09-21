var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ResumeView = require('./views/resume/resume');

var Datas = require('../../../datas.json');

module.exports = Marionette.Controller.extend({
    indexAction: function() {
    	this.resumeAction();
    },
    resumeAction: function() {
        this.options.regions.resume.show(new ResumeView());
    }

});
