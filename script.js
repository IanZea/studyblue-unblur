console.log('======================================================================\n' +
			'StudyBlue Unblur! by @JacobAJordan_\n' + 
			'Code available at: https://github.com/jacobjordan94/studyblue-unblur\n' +
			'======================================================================');
$('.back > .side.side-text > .text.text-small').css('color', 'black');
$('head').append('<style>#cards .card:after, .cards-wrap .card:after {background: transparent} </style>');
$('.card.blur').removeClass('blur');
$('.card.card-ad').remove();
$('.card').css('min-height', '200px');
$('.card').css('max-height', 'auto');
$('.card').css('height', 'auto');
$('.card-container').masonry({
	itemSelector: '.card',
    columnWidth: 310
});