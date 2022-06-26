function scroll(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>1200 && screen.width >= 1128){
            $('.pageup').fadeIn('slow');
        }else{
            $('.pageup').fadeOut('slow');
        }
    });
}

export default scroll;