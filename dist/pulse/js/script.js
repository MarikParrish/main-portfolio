'use strict';

// carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    dots:true,
    dotClass: 'carousel__dots'
  });
});

(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    
    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    // Modal

    $('[data-modal=consultation]').on('click',function (){
      $('.overlay, #consultation').fadeIn('fast');
      $('body').addClass('scroll-hidden');
    });
    $('.modal__close').on('click',function (){
      $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
      $('body').removeClass('scroll-hidden');
    });


    $('.button_mini').each(function (i){
      $(this).on('click',function (){
        $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
      });
    });


    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //   rules:{
    //     name:{
    //       required:true,
    //       minlength:2
    //     },
    //     phone:"required",
    //     email:{
    //       required:true,
    //       email:true
    //     }
    //   },
    //   messages:{
    //     name:{
    //       required: "Пожалуйста, введите своё имя",
    //       minlength:jQuery.validator.format("Введите {0} символа")
    //     },
    //     phone:"Пожалуйста, введите свой номер телефона",
    //     email:{
    //       required:"Пожалуйста, введите свой Email",
    //       email:"Неправильно введен адрес почты"
    //     }
    //   }
    // });
    // $('#order form').validate();

    function validateForms(form){
      $(form).validate({
        rules:{
          name:{
            required:true,
            minlength:2
          },
          phone:"required",
          email:{
            required:true,
            email:true,
          }
        },
        messages:{
          name:{
            required: "Пожалуйста, введите своё имя",
            minlength:jQuery.validator.format("Введите {0} символа")
          },
          phone:"Пожалуйста, введите свой номер телефона",
          email:{
            required:"Пожалуйста, введите свой Email",
            email:"Неправильно введен адрес почты"
          }
        }
      });
    }


    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order-form');

    $('input[name=phone]').mask("+38 (999) 999-9999"); // с type="number" не работает


    // Отпрвка форм


    $('form').submit(function(e){
      e.preventDefault();

      if (!$(this).valid()){
        return;
      }

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find("input").val(""); // очистка input

        $('#order, #consultation').fadeOut('fast');
        $('#thanks').fadeIn('fast');

        $('form').trigger('reset');
      });
      return false;
    });

    // Scroll

    $(window).scroll(function(){
      if ($(this).scrollTop()>1600 && screen.width >= 768){
        $('.pageup').fadeIn('slow');
      } else{
        $('.pageup').fadeOut('slow');
      }
    });

    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 100, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    // $(window).scroll(function(){
    //   if ($(this).scrollTop()>1650){
    //     $('.carousel .container').addClass('container_active animate__animated animate__slideInLeft');
    //   }
    // });

    // $('button').click(function(){
    //   $('body').addClass('scroll-hidden');
    // });

    // $('.modal__close').click(function(){
    //   $('body').removeClass('scroll-hidden');
    // });

    new WOW().init();

  });
  })(jQuery);