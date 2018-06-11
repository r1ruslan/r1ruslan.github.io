$(document).ready(function(){
	$("h1, h2").animated("fadeInRight");
	$(".bigrow .col").animated("fadeInUp");
	$("h6").animated("fadeInUp");
	$(".review-item").animated("fadeInUp");
	$(".post-block, .photo-square").animated("pulse");
	$(".s6-info .img-wrapper").animated("fadeInLeft");

  	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop : true,
		autoplay: true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

});

$('.accordion-title').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('plus')) {
        $this.next().removeClass('plus');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.accordion-cont').removeClass('plus');
        $this.parent().parent().find('.accordion-cont').slideUp(350);
        $this.next().toggleClass('plus');
        $this.next().slideToggle(350);
    }
});

$(document).ready(function(){
    var show = true;
	var countbox = ".section-3";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top >= e_top - 400 || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 1200
			});
			show = false;
		}
	});
});


$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

// var title = document.getElementsByClassName('accordion-title'),
// 	cont = document.getElementsByClassName('accordion-cont');

// for (var i = 0; i < title.length; i++) {
// 	title[i].addEventListener('click', function(){
// 		if (!(this.classList.contains('plus'))){
// 			for(var i = 0; i < title.length; i++){
// 				title[i].classList.remove('plus');
// 			}
// 			this.classList.add('plus');
// 		}
// 	})
// }



// var acc = document.getElementsByClassName("accordion-title");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("plus");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }
