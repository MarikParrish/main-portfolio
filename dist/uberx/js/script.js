const hamburger = document.querySelector('.hamburger'),
      navmenu = document.querySelector('.menu');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger_active');
    navmenu.classList.toggle('menu_active');
});