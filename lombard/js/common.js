'use strict';

$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
   loop: true,
   dots: false,
   nav: true,
   navText: ["", ""],
   autoplay: false,
   autoplayTimeout: 5000,
   autoplayHoverPause: true,
   autoplaySpeed: 1000,
   margin: 10,
  });
});

$(".footer-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });



function windowSize(){
    if ($(window).width() <= '768'){
      $("#logo").attr("src","img/logo/logo-md.png");
    }
}

// function windowChange(){
//     if ($(window).width() <= '480'){
//       $(".main-mnu ul").append('<li><a href="#"><img src="img/call.png" alt="call"> 38 050 123 45 67</a></li>');
//     }
// }
// $(window).on("load", windowChange);

$(window).on('load resize',windowSize);


function windowSize(){
    if ($(window).width() <= '480'){
      $('#big-button').css('display', 'none');
    }
}


$(document).ready(function(){
    $("#section-map").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body, html').animate({scrollTop: top}, 4000);
  });
});
