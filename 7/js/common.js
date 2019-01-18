$('.playbutton').click(function(){
    $('.this_video').html('<iframe class="videoframe" src="https://www.youtube.com/embed/jG7dSXcfVqE?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen></iframe>');
});
$('.playbutton_2').click(function(){
    $('.this_video_2').html('<iframe class="videoframe" src="https://www.youtube.com/embed/jG7dSXcfVqE?rel=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen></iframe>');
});


// function windowChange(){
//     if ($(window).width() <= '768'){
//     }
// }
// $(window).on('load',windowChange);


$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


// $('.scroll-down').on("click", function(event) {
//     $(".main").moveDown();
// });


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

$(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-menu").slideToggle();
    return false;
  });

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled: true, // set to true to enable gallery

    preload: [0,2], // read about this option in next Lazy-loading section

    navigateByImgClick: true,

    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  }
});

// $('.scroll-down').click(function(){
//        $('html, body').animate({scrollTop:$('.section-2').position().top}, 1500);
// });

// function windowChange(){
//     if ($(window).width() <= '768'){
//       $(".main-menu ul").append('<li><a href="#">Dealers</a></li>');
//       $(".main-menu ul").append('<li><a id="modal-trigger-3">Disclaimer</a></li>');
//       $(".main-menu ul").append('<li><a id="modal-trigger-4">Privacy policy</a></li>');
//     } else {
//       $(".main-menu ul").remove('<li><a href="#">Dealers</a></li>');
//       $(".main-menu ul").append('<li><a id="modal-trigger-3">Disclaimer</a></li>');
//       $(".main-menu ul").append('<li><a id="modal-trigger-4">Privacy policy</a></li>');
//     }
// }
// $(window).on('load',windowChange);

$(window).load(function() {
  $("#container1").twentytwenty();
});