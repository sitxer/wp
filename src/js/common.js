//Функции инициализирующиеся или срабатывающие по document.ready
$(function () {

	//Глобальные переменные

	//Body padding-top = header height
	if ($('#header').length > 0) {
		$('body').css('padding-top', $('#header').outerHeight());
	}

	//Функции срабатывающие по ресайзу
	if ($('#header').length > 0) {
		$(window).on('resize', function () {
			$('body').css('padding-top', $('#header').outerHeight());
		});
	}

	// Убираем плейсхолдер у поля формы при фокусе на нем
	if ($('input,textarea').length > 0) {
		$('input,textarea').focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'))
				.attr('placeholder', '');
		}).blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	}

	//Все инпуты с типом tel имеют маску +7 (999) 999 99 99
	if ($('input[type=tel]').length > 0) {
		$('input[type=tel]').mask('+7 (999) 999 99 99');
	}

	$('.left-filter__box-select').select2({
		dropdownParent: $('#lfilter'),
		minimumResultsForSearch: Infinity
	});
	$('.card__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	$('.card__hidden-wrap').hide();
	$('.card__open-card').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.card').find('.card__hidden-wrap').slideToggle()
	});
	//Мобильное меню
	$('.header-burger').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('header-burger_active');
		$('.mobile-menu').toggleClass('mobile-menu_active');
	});
});