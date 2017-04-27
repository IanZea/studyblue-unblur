console.log('StudyBlue Unblur! by @JacobAJordan_');
console.log('Source code available at: https://github.com/jacobjordan94/studyblue-unblur');

$(document).ready(function(){
	$('head').append('<style>#cards .card:after, .cards-wrap .card:after {background: transparent} </style>');
	$('.modal-wrapper').remove();
	$('.card').click(function(){
		$('#seo-landing').removeAttr('style');
	});
	setInterval(function(){
		console.log('Unblurring');
		hiddenCards = null; // LOL come on guys. 
		$('.gameOn').css('color', 'black !important');
		$('.gameOn').css('text-shadow', 'none');
		$('.gameOn > ul').css('color', 'black');
		$('.gameOn > ul > li').css('color', 'black');
		$('.gameOn > div').css('color', 'black');
		$('.card.card-ad').remove();
		$('.card').css('min-height', '200px');
		$('.card').css('max-height', 'auto');
		$('.card').css('height', 'auto');
		$('.card-container').masonry({
			itemSelector: '.card',
		    columnWidth: 310
		});
	}, 1000);
});
