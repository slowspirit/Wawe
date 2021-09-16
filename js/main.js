$(function(){
  
  $(".menu a, .footer__link, .logo__link").on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn, .menu__list-link').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
  
  var mixer = mixitup('.gallery__content');
});