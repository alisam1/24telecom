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

    var examplesSlider = $('.examples__block');
    settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    // reslick only if it's not slick()
    $(window).on('load resize', function() {
      if ($(window).width() >= 768) {
        if (examplesSlider.hasClass('slick-initialized')) {
          examplesSlider.slick('unslick');
        }
        return
      }

      if (!examplesSlider.hasClass('slick-initialized')) {
        return examplesSlider.slick(settings);
      }
    });

    /* GSAP

    document.getElementById("line");
    TweenLite.to(bar, 0.5, {width:"100px", height:"2px"});

    document.getElementById("line1");
    TweenLite.to(bar1, 2, {width:"100px", height:"2px", delay:1});

    document.getElementById("line2");
    TweenLite.to(bar2, 3, {width:"100px", height:"2px", delay:2});

    document.getElementById("line");
    TweenLite.to(bar4, 0.5, {width:"2px", height:"60px"});

    document.getElementById("line1");
    TweenLite.to(bar3, 0.5, {width:"2px", height:"60px"});

    document.getElementById("line2");
    TweenLite.to(bar5, 0.5, {width:"2px", height:"60px"});
     */


    /* Scroll */ 

    $(window).scroll(function() {
      console.log('event scroll');
      if (ZagolovokBlock2IsInVision()) {
        ShowText();
      }
    });
    
    var $area = $('#area');
    
    function ZagolovokBlock2IsInVision() {
      var windowBottom = $(window).scrollTop() + $(window).height();
      var block2Bottom = $area.offset().top + $('.how-work').height();
      return windowBottom >= block2Bottom;
    }
    
    function ShowText() {
      document.getElementById("line");
        TweenLite.to(bar, 0.5, {width:"100px", height:"2px"});
    
        document.getElementById("line1");
        TweenLite.to(bar1, 2, {width:"100px", height:"2px", delay:1});
    
        document.getElementById("line2");
        TweenLite.to(bar2, 3, {width:"100px", height:"2px", delay:2});
    
        document.getElementById("line");
        TweenLite.to(bar4, 0.5, {width:"2px", height:"60px"});
    
        document.getElementById("line1");
        TweenLite.to(bar3, 0.5, {width:"2px", height:"60px"});
    
        document.getElementById("line2");
        TweenLite.to(bar5, 0.5, {width:"2px", height:"60px"});
    }