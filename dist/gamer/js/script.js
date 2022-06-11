'use strict';


$('.contacts__form-mobile').on('input',function(){
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''));
});


// Vanilla Javascript
var input = document.querySelector("#phone");
window.intlTelInput(input,({
  preferredCountries:["ua"],
  utilsScript: 'js/utils.js',
  separateDialCode:true,
  onlyCountries:["ua","ru","us"],
}));