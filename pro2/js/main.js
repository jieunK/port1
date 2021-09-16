$(document).ready(function(){
    //bxslider//
    $('.slider').bxSlider({
        pager:false,
        controls:true,
        autoStart:true,
        pause:3000,//1000=1초//
    });


    $('.cyber_imgset').bxSlider({
        pager:false,
        controls:false,
        autoStart:true,
        pause:3000,//1000=1초//
    });

    $('.rv1').bxSlider({
        pager:true,
        controls:true,
        auto:true,
        speed:3000,//1000=1초//
        stopAutoOnClick:true,
        autoControlsSelector:true,
        pause:1000,
        maxSlides:4,
        slideWidth:300,
    });
}); //제이쿼리 끝//