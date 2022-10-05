$(document).ready(function(){
    
    $(window).resize(function(){
        var header = $(window).width();
        if(header < 639){
            $(".header-menu").hide();
            $(".bar-icon").removeClass("fa-times");
        };
    });
    $(".bar-icon").click(function(){
        $(this).toggleClass("fa-times");
        $(".header-menu").toggle();
    });

    $(window).resize(function(){
       var screenWidth =  $(window).width();
       if(screenWidth > 638){
           $(".header-menu").removeAttr("style");
       }
    });
    var mixer = mixitup('.portfolio-container');

});