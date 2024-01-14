(function($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
	};

	$(window).resize(function(){
		fullHeight();
	});

	fullHeight();

	var loader = function() {
		setTimeout(function() { 
			$('#ftco-loader').removeClass('show');
		}, 1);
	};

	loader();

	$.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
			loop:true,
			autoplay: true,
			margin:0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav:true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});

		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
	};

	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		$this.find('.dropdown-menu').removeClass('show');
	});

	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				navbar.addClass('scrolled');	
			} else {
				navbar.removeClass('scrolled sleep');
			}

			if (st > 350 ) {
				navbar.addClass('awake');
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			} else {
				navbar.removeClass('awake');
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};

	scrollWindow();

	var counter = function() {
		$('#section-counter').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');

					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});
			}
		}, { offset: '95%' } );
	};

	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
				}, 100);
			}
		}, { offset: '95%' } );
	};

	contentWayPoint();

	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
			e.preventDefault();
			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function(){
				window.location.hash = hash;
			});
			if ( navToggler.is(':visible') ) {
				navToggler.click();
			}
		});
	};

	OnePageNav();

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.book_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});

	$('.book_time').timepicker({
		timeFormat: 'HH:mm',
		interval: 30,
		dynamic: false,
		dropdown: true,
		scrollbar: true
	});

	$('#actividad').on('change', function () {
		var nuevaHora  = $(this).val();
		var tipoActividad = nuevaHora;
		switch (tipoActividad) {
			case 'reservaComun':
				$('.book_time').timepicker('destroy');
				$('.book_time').timepicker({
					timeFormat: 'HH:mm',
					interval: 30,
					minTime: '10:00',
					maxTime: '20:30',
					startTime: '10:00',
					dynamic: false,
					dropdown: true,
					scrollbar: true
				});
				break;
			case 'cenaClandestina':
				$('.book_time').timepicker('destroy');
				$('.book_time').timepicker({
					timeFormat: 'HH:mm',
					interval: 30,
					minTime: '20:00',
					maxTime: '20:00',
					dynamic: false,
					dropdown: true,
					scrollbar: true
				});
				break;
			case 'reservaTaller':
			case 'reservaLaboratorio':
				$('.book_time').timepicker('destroy');
				$('.book_time').timepicker({
					timeFormat: 'HH:mm',
					interval: 30,
					minTime: '16:00',
					maxTime: '16:00',
					dynamic: false,
					dropdown: true,
					scrollbar: true
				});
				break;
		}
		$('.book_time').timepicker('setTime', nuevaHora);
	});

})(jQuery);

