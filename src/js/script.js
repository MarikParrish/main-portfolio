import carousel from './modules/carousel';
import fontAwesome from './modules/fontawesome';
import lang from './modules/lang';
import overlay from './modules/overlay';
import owlCarousel from './modules/owl.carousel.min';
import scroll from './modules/scroll';


window.addEventListener('DOMContentLoaded',function(){
    overlay();
    carousel();
    scroll();
    lang();
    fontAwesome();
    owlCarousel();
});