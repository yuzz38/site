$(function(){
	$('.header-mobile-btn').on('click', function(e){
		e.preventDefault();
			$('.header-items').toggleClass('header-items--active');
		});
	$('.header-top-advant').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
	$('.section-first').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
	$('.sectin-feedback').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
	$('.header-main').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
	$('.header-main-right').on('click', function(e){
		e.preventDefault();
			$('.header-items').removeClass('header-items--active');
		});
	$('.russia').on('click', function(e){
		e.preventDefault();
			$('.russia-text').toggleClass('russia-text--active');
		});
	$('.europe').on('click', function(e){
		e.preventDefault();
			$('.europe-text').toggleClass('europe-text--active');
		});
	$('.china').on('click', function(e){
		e.preventDefault();
			$('.china-text').toggleClass('china-text--active');
		});
	$('.africa').on('click', function(e){
		e.preventDefault();
			$('.africa-text').toggleClass('africa-text--active');
		});
	$(window).on('load', function(){
			$('.sectin-feedback--3').addClass('sectin-feedback--3--active');
			$('.sectin-feedback--4').addClass('sectin-feedback--4--active');
			$('.sectin-feedback--2').addClass('sectin-feedback--2--active');
		});
	
	$('.australia').on('click', function(e){
		e.preventDefault();
			$('.australia-text').toggleClass('australia-text--active');
		});
	$('.nAmerica').on('click', function(e){
		e.preventDefault();
			$('.nAmerica-text').toggleClass('nAmerica-text--active');
		});
	$('.sAmerica').on('click', function(e){
		e.preventDefault();
			$('.sAmerica-text').toggleClass('sAmerica-text--active');
		});
	$('.right-more').on('click', function(e){
		e.preventDefault();
			$('.more-info').toggleClass('more-info--active');
		});
	$('.right-more').on('click', function(e){
		e.preventDefault();
			$('.right-more').addClass('right-more--active');
		});
	var btn = $('.botton');

		$(window).scroll(function() {
		  if ($(window).scrollTop() > 300) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});
		btn.on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({scrollTop:0}, '300');
			});	
		$("a.scrollto").click(function() {
		    var elementClick = $(this).attr("href")
		    var destination = $(elementClick).offset().top;
		    jQuery("html:not(:animated),body:not(:animated)").animate({
		      scrollTop: destination
		    }, 800);
		    return false;
		  });
		$('.meet-mark').on('click', function(e){
		e.preventDefault();
			$('.meet-mark').addClass('meet-active');
			$('.meet-product').removeClass('meet-active');
			$('.meet-design').removeClass('meet-active');
			$('.meet-devel').removeClass('meet-active');
			$('.about-meet-mark').addClass('about-meet-mark--active');
			$('.about-meet-list').addClass('about-meet-list--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.click-profile').removeClass('click-profile--active');
			$('.sectin-feedback--3').addClass('sectin-feedback--3--active');
			$('.sectin-feedback--4').addClass('sectin-feedback--4--active');
			$('.sectin-feedback--1').addClass('sectin-feedback--1--active');
			$('.sectin-feedback--2').removeClass('sectin-feedback--2--active');
			$('.popup-close').on('click', function(e){
		e.preventDefault();
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.about-meet-product').removeClass('about-meet-product--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-mark').addClass('about-meet-mark--active');
			$('.click-profile').removeClass('click-profile--active');
		});
		});
		$('.meet-product').on('click', function(e){
		e.preventDefault();
			$('.meet-product').addClass('meet-active');
			$('.meet-mark').removeClass('meet-active');
			$('.meet-design').removeClass('meet-active');
			$('.meet-devel').removeClass('meet-active');
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.about-meet-list').removeClass('about-meet-list--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.click-profile').removeClass('click-profile--active');
			$('.sectin-feedback--2').addClass('sectin-feedback--2--active');
			$('.sectin-feedback--3').addClass('sectin-feedback--3--active');
			$('.sectin-feedback--4').addClass('sectin-feedback--4--active');
			$('.sectin-feedback--1').removeClass('sectin-feedback--1--active');

			$('.popup-close').on('click', function(e){
		e.preventDefault();
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.about-meet-list').removeClass('about-meet-list--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.click-profile').removeClass('click-profile--active');
		});
		});
		$('.meet-design').on('click', function(e){
		e.preventDefault();
			$('.meet-design').addClass('meet-active');
			$('.meet-product').removeClass('meet-active');
			$('.meet-mark').removeClass('meet-active');
			$('.meet-devel').removeClass('meet-active');
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.about-meet-list').addClass('about-meet-list--active');
			$('.about-meet-design').addClass('about-meet-design--active');
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.click-profile').removeClass('click-profile--active');
			$('.sectin-feedback--3').removeClass('sectin-feedback--3--active');
			$('.sectin-feedback--4').addClass('sectin-feedback--4--active');
			$('.sectin-feedback--1').addClass('sectin-feedback--1--active');
			$('.sectin-feedback--2').addClass('sectin-feedback--2--active');

			$('.popup-close').on('click', function(e){
		e.preventDefault();
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.about-meet-product').removeClass('about-meet-product--active');
			$('.about-meet-design').addClass('about-meet-design--active');
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.click-profile').removeClass('click-profile--active');
		});
		});
		$('.meet-devel').on('click', function(e){
		e.preventDefault();
			$('.meet-devel').addClass('meet-active');
			$('.meet-product').removeClass('meet-active');
			$('.meet-mark').removeClass('meet-active');
			$('.meet-design').removeClass('meet-active');
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.about-meet-list').addClass('about-meet-list--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-devel').addClass('about-meet-devel--active');
			$('.click-profile').removeClass('click-profile--active');
			$('.sectin-feedback--3').addClass('sectin-feedback--3--active');
			$('.sectin-feedback--4').removeClass('sectin-feedback--4--active');
			$('.sectin-feedback--1').addClass('sectin-feedback--1--active');
			$('.sectin-feedback--2').addClass('sectin-feedback--2--active');

			$('.popup-close').on('click', function(e){
		e.preventDefault();
			$('.about-meet-devel').addClass('about-meet-devel--active');
			$('.about-meet-product').removeClass('about-meet-product--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.click-profile').removeClass('click-profile--active');
		});
		});
		$('.load_more').on('click', function(e){
		e.preventDefault();
			$('.d-none').toggleClass('d-none--active');
			$('.load_more').addClass('load_more--none');
		});
		$("a.log-login").click(function(e) {
			e.preventDefault();
			var destinationPopup = $(this).attr("href");
			$(destinationPopup).addClass('show');
			
			$('.popup__body').animate({
        		 'top':'0'
       			},500);
			$(destinationPopup + ' .popup-close').click(function(e){
				e.preventDefault();
				$('.popup__body').animate({
        		 'top':'-1200'
       			},100);
				$(destinationPopup).removeClass('show');
				
			});
		});
		$('.proffesion-card__profile').on('click', function(e){
		e.preventDefault();
			$('.about-meet-mark').removeClass('about-meet-mark--active');
			$('.about-meet-design').removeClass('about-meet-design--active');
			$('.about-meet-devel').removeClass('about-meet-devel--active');
			$('.about-meet-list').addClass('about-meet-list--active');
			$('.click-profile').addClass('click-profile--active');
		});
		
});