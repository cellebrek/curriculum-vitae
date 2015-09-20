var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var HeaderView = require('./views/header/header');
var CoverView = require('./views/cover/cover');
var FooterView = require('./views/footer/footer');

var Datas = require('../../../datas.json');

var articlesCollection = require('./collections/articles');

module.exports = Marionette.Controller.extend({

    onStart: function() {
        this.options.regions.header.show(new HeaderView());

        this.options.regions.footer.show(new FooterView());
    },

    indexAction: function() {
    	this.blogAction();
    },

    blogAction: function() {
        this.options.regions.mainContainer.show(new CoverView({
        	collection: new articlesCollection(Datas.blog.articles)
        }));
    }

});