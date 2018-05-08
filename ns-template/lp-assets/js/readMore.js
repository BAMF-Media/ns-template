// $(document).ready(function () {
//
//     var showChar = 150;
//     var ellipsestext = "...";
//     var moretext = "Read more";
//     var lesstext = "Show less";
//
//     var check = true;
//     function readMoreContent() {
//         if (check) {
//             $('.more').each(function () {
//                 // if ($(".morecontent")) {
//                 //     alert("sada");
//                     var content = $(this).html();
//                     if (content.length > showChar) {
//                         var c = content.substr(0, showChar);
//                         var h = content.substr(showChar, content.length - showChar);
//                         var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
//                         $(this).html(html);
//                     }
//                 // }
//
//             });
//         }
//         check = false;
//     }
//
//
//     readMoreContent();
//
//     var widthWindow = $(window).width();
//     if (widthWindow < 768) {
//         $(".morecontent span").css({"display": "none"});
//         $(".morelink").css({"display": "block"});
//         $(".moreellipses").css({"display": "block"});
//     }
//     else {
//         $(".morecontent span").css({"display": "block"});
//         $(".morelink").css({"display": "none"});
//         $(".moreellipses").css({"display": "none"});
//     }
//     $(window).on('resize', function () {
//         var widthWindow = $(window).width();
//         if (widthWindow < 768) {
//             $(".morecontent span").css({"display": "none"});
//             $(".morelink").css({"display": "block"});
//             $(".moreellipses").css({"display": "block"});
//             readMoreContent();
//         }
//         else {
//             $(".morecontent span").css({"display": "block"});
//             $(".morelink").css({"display": "none"});
//             $(".moreellipses").css({"display": "none"});
//         }
//     });
//
//     $(".morelink").click(function () {
//         if ($(this).hasClass("less")) {
//             $(this).removeClass("less");
//             $(this).html(moretext);
//         } else {
//             $(this).addClass("less");
//             $(this).html(lesstext);
//         }
//         $(this).parent().prev().slideToggle();
//         $(this).prev().slideToggle();
//         return false;
//     });
// });
//
//
//
//
//
//
//
//
