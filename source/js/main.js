/* Main slider */

$(document).ready(function ($) {
    $('.one-time').slick({
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    
    });
    });

    /* Gallery */

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
});
