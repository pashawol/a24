// Для лэзи загрузки


document.addEventListener("DOMContentLoaded", function () {
	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;

	const lazyLoad = function () {
		if (active === false) {
			active = true;

			setTimeout(function () {
				lazyImages.forEach(function (lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.src = lazyImage.dataset.src;
						// lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
							window.addEventListener("DOMContentLoaded", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
	window.addEventListener("DOMContentLoaded", lazyLoad);
});


// лэзи 
document.addEventListener("DOMContentLoaded", function () {
	let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
	let active = false;

	const lazyLoad = function () {
		if (active === false) {
			active = true;

			setTimeout(function () {
				lazyImages.forEach(function (lazyImage) {
					if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
						lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
						lazyImage.src = lazyImage.dataset.src;
						// lazyImage.srcset = lazyImage.dataset.srcset;
						lazyImage.classList.remove("lazy");

						lazyImages = lazyImages.filter(function (image) {
							return image !== lazyImage;
						});

						if (lazyImages.length === 0) {
							document.removeEventListener("scroll", lazyLoad);
							window.removeEventListener("resize", lazyLoad);
							window.removeEventListener("orientationchange", lazyLoad);
							window.addEventListener("DOMContentLoaded", lazyLoad);
						}
					}
				});

				active = false;
			}, 200);
		}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);
	window.addEventListener("DOMContentLoaded", lazyLoad);
});



document.addEventListener("DOMContentLoaded", function () {
	var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

	if ("IntersectionObserver" in window) {
		let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					lazyBackgroundObserver.unobserve(entry.target);
				}
			});
		});

		lazyBackgrounds.forEach(function (lazyBackground) {
			lazyBackgroundObserver.observe(lazyBackground);
		});
	}
});
jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS


	var url = document.location.href;
	$.each($(".s-po-body .s-catalog-tab-link "), function () {

		if (this.href == url) {
			if ($(this).hasClass("s-catalog-tab-link") == true) {

				$(this).addClass('active');
			}


		};

	});

	$('.popover-js').popover({
		placement: 'auto',
		trigger: 'hover',
	})



	var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	$(".date-picker-block-js").each(function () {

		var th = $(this);

		th.find('.startDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			minDate: today,
			maxDate: function () {
				return th.find('.endDate').val();
			}
		});
		th.find('.endDate').datepicker({
			locale: 'ru-ru',
			uiLibrary: 'bootstrap4',
			// iconsLibrary: 'fontawesome',
			format: 'dd.mm.yyyy',
			minDate: function () {
				return th.find('.startDate').val();
			}
		});
	})
	$('.datepicker-date').datepicker({
		locale: 'ru-ru',
		uiLibrary: 'bootstrap4',
		format: 'dd.mm.yyyy',

	});

	$(".label-date-picker-js  input").click(function () {
		$(this).next().click();
	})

	// правил
	// accordion
	$(".showhide").click(function () {
		$(this).toggleClass("active").next("div").slideToggle().parent().toggleClass("active");
	})

	// галерея
	$(".gal").each(function () {

		$(this).find("a").magnificPopup({
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,

			},
			gallery: {
				enabled: true
			}
		});
	})
	// мобильное меню
	var toggMnu = $(".toggle-mnu-1").click(function () {

		$(".toggle-mnu-1").toggleClass("on");
		// $("body").toggleClass("fixed");
		$(".hidden-mnu").slideToggle();
		$("html, body").toggleClass("fixed");
		return false;
	});


	// листалка по стр
	$(" .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 20;

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});




	// слайдер на главной
	var swiper = new Swiper('.s-articals__slider', {
		loop: true,
		speed: 450,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		preloadImages: false,
		lazy: true,
		lazy: {
			loadPrevNext: true,
		}

	});

	// слайдер в карточке 
	var swiperCard = new Swiper('.carusel-slider', {
		// loop: true ,
		speed: 450,

		watchSlidesVisibility: true,
		lazy: {
			loadPrevNext: true,
		},
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	});
	// слайдер в блоге

	var swiperblog = new Swiper('.blog-slider', {
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 450,
		// slidesPerColumn: 3,
		// slidesPerView: 'auto',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		preloadImages: false,
		lazy: true,
		lazy: {
			loadPrevNext: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
			},

			768: {
				slidesPerView: 1,
			}
		}
	});

	// слайдеры со стр сдать авто
	var swiperR = new Swiper('.slider-one', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 450,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		lazy: true,
		lazy: {
			loadPrevNext: true,
		}
	});

	// слайдеры со стр сдать авто
	var swiperfr = new Swiper('.slider-carusel-js', {
		loop: true,
		slidesPerView: 1,
		speed: 450,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		lazy: true,
		lazy: {
			loadPrevNext: true,
		}
	});

	// слайдеры со стр about
	var swiperfr = new Swiper('.slider-carusel-ab-js', {
		loop: true,
		slidesPerView: 1,
		speed: 450,
		slideToClickedSlide: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		lazy: true,
		lazy: {
			loadPrevNext: true,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: -30,
			depth: 100,
			modifier: 1,
			slideShadows: false,
		},
		grabCursor: true,
	});

	// аккордион в ЛК

	$(".toggle-td-js").click(function () {
		$(this).toggleClass("active").parent("tr").find(".hidden-td-js .td-inner").slideToggle(250).toggleClass("active");
	})


	function heightses() {

		var w = $(window).width();
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//

		$(".btn-more-js").click(function () {
			var tr = $(this).parents(".s-po-body__section").find("tr:hidden");
			if (w > 992) {
				tr.fadeIn();


			} else if (w < 991.98) {
				tr.css("display", "block");
			}
		})



		// скрывает/показывает td  в аккордионе
		$(".hidden-td-js .td-inner").each(function () {
			if (w > 992) {
				$(".toggle-td-js").removeClass("active");
				$(this).removeClass("active").removeAttr("style")

			} else if (w < 991.98 && !$(this).hasClass("active")) {

				$(this).hide();
			}
		})

		if (w > 992) {
			$(".s-po-body__section tr").removeAttr("style");
			// swiperCard.init();
			// swiperCard.destroy();
			//  $(".toggle-mnu-1").removeClass("on");
			//   // $("body").removeClass("fixed");
			//   $(".hidden-mnu").removeClass("active");
			//   $("html, body").removeClass("fixed");
		}


		var topH = $("header ").height() + $('.top-nav  ').height();
		var topH2 = $(".header-block ").height();
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed-ready');
			} else {
				$('.top-nav  ').removeClass('fixed-ready');
			}
		});

		if ($(this).scrollTop() > topH2) {
			$('.top-nav  ').addClass('fixed');

		} else {
			$('.top-nav  ').removeClass('fixed');

		}
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH2) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});

		// конец добавил
	}

	$(window).resize(function () {
		heightses();
	});

	heightses();



	// модальное окно
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		callbacks: {

			close: function () {
				$(".form-wrap__prev-video iframe").remove();
			}
			// e.t.c.
		}
	});
	$(".data-modal").click(function () {
		var mod = $(this).attr("href");
		$(mod).find(".form-wrap__title").text($(this).data("title"));
	})


	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});



	// маска на инпут
	$("input[type='tel']").attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask({
		"mask": "+7(999)999-99-99"
	});

	// включение видео
	$(".form-wrap__prev-video").each(function () {
		$(this).on("click", function () {
			$(this).find(".pretty-embed__bg").removeClass("on")
			$('<iframe src="https://www.youtube.com/embed/' + $(this).find(".pretty-embed__bg").data("src") +
				'?autoplay=1" class="on" allow="encrypted-media" allowfullscreen="allowfullscreen"></iframe>').prependTo(this);
		})
	})


	$(".input-range").each(function () {
		let minV = $(this).data("min"),
			maxV = $(this).data("max");

		$(this).ionRangeSlider({
			type: "double",
			min: minV,
			max: maxV,
		});

	})
	$(".input-range-single").each(function () {
		let minV = $(this).data("min"),
			maxV = $(this).data("max");

		$(this).ionRangeSlider({
			type: "single",
			min: minV,
			max: maxV,
		});

	})

	$(".s-calc__range-js").each(function () {
		let minV = $(this).data("min"),
			maxV = $(this).data("max");

		$(this).ionRangeSlider({
			grid: true,
			force_edges: true,
			from: 2,
			prettify_enabled: true,
			values: [
				"0 ₽", "500 тыс.&nbsp;₽",
				"1 млн.&nbsp;₽", "5 млн.&nbsp;₽", "10 млн.&nbsp;₽"
			]
		});

	})


	//  маске в модалке регистрации звонка
	$(".form-wrap__tel-block input[type='tel']").attr("pattern", "[0-9]{2}-[0-9]{2}").inputmask({
		"mask": "99-99"
	});

	$(".form-wrap__select--reg-call")
		.change(function () {
			var str = "";
			str = $(this).val();
			console.log(str)
			if (str == '') {
				$(".tabs-blocks__item").fadeOut();

			}
			$(str).fadeIn().siblings().hide();


		})
	//  .trigger("change");

	$(function () {
		var tab = ('tabs-modal');


		$('.' + tab + '__btns--sm').on('click', '.' + tab + '__col:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	});


	$('.btn-tab-js').click(function (e) {
		e.preventDefault();
		var th = $(this),
			tabRadio = th.data('tab-block');
		// console.log(tabRadio);
		//  th.hide();
		$('#' + tabRadio).slideDown().addClass("active")
			.siblings('.tab-block').removeClass('active').slideUp();

	})
 



	// добавил
	function heightses2() {

		var w = $(window).width();
		var topH = $(".header ").height();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.s-catalog-filter  ').addClass('fixed');
			} else {
				$('.s-catalog-filter  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	$(window).resize(function () {
		heightses2();
	});

	heightses2();



	// маска на инпут
	$(".input-time").attr("pattern", "([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?").inputmask("99:99");;

	// кастомный инпут файл

	var file = $(".add-file input[type=file]");
	file.each(function () {

		$(this).change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(this).parents('.add-file').find(".add-file__filename  ");
			name.text(filename);

		});
	})

	// табы в блоке s-add-car
	$('.photo-block__input').change(function () {
		$('.form-wrap__tabs').not('.active').addClass('active').siblings().removeClass('active');
	})

	$(".btn-modal-close").click(()=>{$.magnificPopup.close()});
});