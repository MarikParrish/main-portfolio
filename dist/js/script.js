window.addEventListener('DOMContentLoaded',function(){


    const overlay = require('./modules/overlay'),
          carousel = require('./modules/carousel'),
          scroll = require('./modules/scroll'),
          lang = require('./modules/lang'),
          fontawesome = require('./modules/fontawesome'),
          owlCarousel = require ('./modules/owl.carousel.min');

    overlay();
    carousel();
    scroll();
    lang();
    fontawesome();
    owlCarousel();
});