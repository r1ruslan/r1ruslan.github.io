// var lastScrollTop = 0;
// $(window).scroll(function(event){
// var st = $(this).scrollTop();
// if (st > lastScrollTop){
//    console.log('scroll down');
// } else {
//    console.log('scroll up');
// }
// lastScrollTop = st;
// });

// var header = new Headhesive('.main-head', options);
// var options = {
// 	offset: 800,
// 	stick: 'headhesive--stick'
// }

$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


// $(window).resize(function() {
//     if($(window).width() >= 768){
//         var rellax = new Rellax('.rellax');
//     };
// });

if ($(window).width() >= 992) {
   var rellax = new Rellax('.rellax');
}

$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });
});


$(function(){
	$('#modal-trigger-1').click(function(){
		$('#modal-window-1').fadeIn(300);
	});
	$('.close').click(function(){
		$('#modal-window-1').fadeOut(300);
	});
});
$(function(){
	$('#modal-trigger-2').click(function(){
		$('#modal-window-2').fadeIn(300);
	});
	$('.close').click(function(){
		$('#modal-window-2').fadeOut(300);
	});
});
$(function(){
	$('#modal-trigger-3').click(function(){
		$('#modal-window-3').fadeIn(300);
	});
	$('.close').click(function(){
		$('#modal-window-3').fadeOut(300);
	});
});
$(function(){
	$('#modal-trigger-4').click(function(){
		$('#modal-window-4').fadeIn(300);
	});
	$('.close').click(function(){
		$('#modal-window-4').fadeOut(300);
	});
});
$(function(){
	$('#modal-trigger-5').click(function(){
		$('#modal-window-5').fadeIn(300);
	});
	$('.close').click(function(){
		$('#modal-window-5').fadeOut(300);
	});
});

$(function(){
	$('#modal-trigger-6').click(function(){
		$('#modal-window-1').fadeOut(300);
		$('#modal-window-5').fadeIn(300);
	});
	$('#modal-trigger-7').click(function(){
		$('#modal-window-2').fadeOut(300);
		$('#modal-window-5').fadeIn(300);
	});
	$('#modal-trigger-8').click(function(){
		$('#modal-window-3').fadeOut(300);
		$('#modal-window-5').fadeIn(300);
	});
	$('#modal-trigger-9').click(function(){
		$('#modal-window-4').fadeOut(300);
		$('#modal-window-5').fadeIn(300);
	});
	$('#modal-trigger-10').click(function(){
		$('#modal-window-5').fadeOut(300);
	});
})


// Instantiate EasyZoom instances
		// var $easyzoom = $('.easyzoom').easyZoom();

		// // Setup thumbnails example
		// // var api = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
		// var api = $('.easyzoom--with-thumbnails').data('easyZoom');

		var $easyzoom = $(".easyzoom").easyZoom();

		// Get the instance API
		var api = $easyzoom.data("easyZoom");

		$('.thumbnails').on('click', 'a', function(e) {
			var $this = $(this);

			e.preventDefault();

			// Use EasyZoom's `swap` method
			api.swap($this.data("standard"), $this.attr("href"));
		});


