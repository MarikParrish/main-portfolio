function carousel(){
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
}

module.exports = carousel;