$(document).foundation();

;(function($){

/******************************
MAP
******************************/
	$(window).load(function () {
		var mapDiv = $('#map')[0];
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 48.621136, lng: 35.227426},
			zoom: 14,
			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {lat: 48.621136, lng: 35.227426},
			map: map,
			draggable: true,
			icon: '../img/pin.png'
		});


	});
/******************************
SLIDER
******************************/
	$(document).ready(function() {
			$('.ba-slider').slick({
			dots: true,
			infinite:false,
			slide: '.ba-slider__slide'
		});
	});

})(jQuery);

