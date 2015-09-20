var Marionette = require('backbone.marionette');
var CoverTemplate = require('./cover.hbs');

require('magnific-popup');

require('slick-carousel');

module.exports = Marionette.ItemView.extend({

    template: CoverTemplate,
    tagName: 'section',
    className: 'blog-preview',
    ui: {
    	slider: '[data-slider]',
        gallery: '[data-gallery]'
    },

    onShow: function() {
        if (this.ui.slider.length > 0) this.initializeSlider();

        if (this.ui.gallery.length > 0) this.initializeGallery();

    },

    initializeSlider: function() {
        this.ui.slider.slick({
            slide: '[data-slider-item]',
            infinite: true,
            slidesToShow: 1,
            swipe: true,
            useCSS: true,
            dots: true,
            arrows: false,
        });
    },

    initializeGallery: function() {
        this.ui.gallery.magnificPopup({
            delegate: 'a',
            type: 'image'
        });
    }
});