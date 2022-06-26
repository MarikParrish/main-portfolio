function overlay(){
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

    overlayShow();
    overlayHide();
}

export default overlay;