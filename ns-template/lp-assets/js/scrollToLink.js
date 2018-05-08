/*Link effects start*/




$(".shopNow").on("click", "a", function (event) {
    //cancel stanadrt click on link

    // if($(window).width() > 768 ){
    //     var addHeightMobile =  50;
    // }
    // else {
    //     var addHeightMobile = $('.bannerTextMobile').outerHeight();
    // }

    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top   }, 1500);
});