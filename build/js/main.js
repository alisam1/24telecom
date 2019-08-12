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

    
/*Mobile menu*/

document.querySelector('.open-menu').addEventListener('click', () => {
  document.querySelector('.menu_mobile').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
})

document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.menu_mobile').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active')
})


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

    /* Responsive slider */

    $('.examples__block').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 6000,
          settings: "unslick"
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });