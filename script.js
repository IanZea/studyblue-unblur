console.log("======================================================================")
console.log('StudyBlue Unblur! by @JacobAJordan_');
console.log('Code available at: https://github.com/jacobjordan94/studyblue-unblur');
console.log("======================================================================")
$('.card').css('overflow','auto');
$('.back > .side.side-text > .text.text-small').css('color', 'black');
$('head').append('<style>#cards .card:after, .cards-wrap .card:after {background: transparent} </style>');
$('.card.blur').removeClass('blur');
$('.card.card-ad').remove();
