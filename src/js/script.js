'use strict';

window.addEventListener('DOMContentLoaded',()=>{
    const counters = document.querySelectorAll('.counter'),
      bars = document.querySelectorAll('.about__info-bar div');



counters.forEach((item, i) =>{  
    bars[i].style.width = item.innerHTML;
});


const overlayBlock = document.querySelectorAll('.portfolio__item'),
      overlay = document.querySelectorAll('.portfolio__item-overlay');



function overlayShow(){
    overlay.forEach(i =>{
        i.addEventListener('mouseover',()=>{
            i.nextElementSibling.classList.add('portfolio__item-img-zoom');
        });
    });

    overlayBlock.forEach(i =>{
        i.addEventListener('mouseover',()=>{
            i.firstElementChild.classList.add('portfolio__item-overlay-active');
        });
    });

    overlay.forEach(i =>{
        i.addEventListener('mouseover',()=>{
            i.firstElementChild.classList.add('portfolio__item-block-active');
        })
    });

}

function overlayHide(){
    overlay.forEach(i =>{
        i.addEventListener('mouseout',()=>{
            i.nextElementSibling.classList.remove('portfolio__item-img-zoom');
        });
    });
    
    overlayBlock.forEach(e =>{
        e.addEventListener('mouseout',()=>{
            e.firstElementChild.classList.remove('portfolio__item-overlay-active');
        });
    });

    overlay.forEach(i =>{
        i.addEventListener('mouseout',()=>{
            i.firstElementChild.classList.remove('portfolio__item-block-active');
        })
    });
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:60,
        dots:true,
        onResized: function(){
            if (this.settings.mouseDrag)
            {
            this.internalEvents();
            }
            else
            {
            this.$stage.off('mousedown touchstart touchcancel');
            $(document).off('.owl.dragEvents');
            this.$stage.get(0).onselectstart = function() {};
            this.$stage.off('dragstart', function() { return false });
            }
        },
        responsive:{
            0:{
                items:1,
                mouseDrag:true
            },
            720:{
                items:2,
                mouseDrag:true
            },
            977:{
                items:2,
                mouseDrag:false
            }
        },
        dotClass:'services__dots'
    });
  });
  

  $(window).scroll(function(){
      if ($(this).scrollTop()>1200 && screen.width >= 1128){
          $('.pageup').fadeIn('slow');
      }else{
          $('.pageup').fadeOut('slow');
      }
  });





  // Language Change


    document
        .querySelectorAll('.promo__change_lang button')
        .forEach((b) => b.addEventListener('click',setLang));


        function setLang() {
            for (let key in langArr) {
              let elem = document.querySelector('.lng-' + key);
              if (elem) {
                elem.innerHTML = langArr[key][this.value];
              }
            }

            document.querySelector('title').innerHTML = langArr['title'][this.value];
          }



    // changeLangActive

    function changeLangActive(){
        $('.promo__change_lang button').on('click',function(){
            $(this).addClass('promo__change_lang-active').siblings().removeClass('promo__change_lang-active');
        });
    }
    









          
overlayShow();
overlayHide();
changeLangActive();
new WOW().init();
});