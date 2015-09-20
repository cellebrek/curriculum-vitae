var Marionette = require('backbone.marionette');
var HeaderTemplate = require('./footer.hbs');

module.exports = Marionette.ItemView.extend({

    template: HeaderTemplate,
    tagName: 'footer',
    className: 'footer',
    events: {

    },
    onShow: function() {

    }
});