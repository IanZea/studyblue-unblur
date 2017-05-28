/*
 * Hey StudyBlue, developer of the StudyBlue Unblur! extension here. 
 * Playing this game with you is pretty fun!
 */

(function(){
	$(document).ready(function(){

		console.log('StudyBlue Unblur! by @JacobAJordan_');
		console.log('Source code available at: https://github.com/jacobjordan94/studyblue-unblur');

		$('head').append('<style>#cards .card:after, .cards-wrap .card:after {background: transparent} </style>');

		var cards = $('.card');

		clearAllIntervals();
		addCard();

		$('.card-ad').remove();
		$('.modal-wrapper').remove();

		cards.click(function(){
			$('#seo-landing').removeAttr('style');
		});
		cards.css('cursor', 'initial');

		$('body').css('user-select', 'auto');

		cards.css('height', 'auto');
		cards.removeAttr('itemtype');
		cards.removeAttr('itemscope');

		$('.side.side-text').css('color', 'black');
		$('.side.side-text').css('text-shadow', 'none');

		$('.text.text-small').css('color', 'black');
		$('.text.text-small').css('text-shadow', 'none');
		
		$('.antiUnblur').css('color', 'black');
		$('.antiUnblur').css('text-shadow', 'none');


		$('.card-container').masonry({
			itemSelector: '.card',
		    columnWidth: 310
		});

		function clearAllIntervals(){
			for(var i = 0; i < 99999; i++){
				window.clearInterval(i);
			}
		}

		function addCard() {
			var twitterBird = `<svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg" style="display:block;height:20px;width:20px;">
			  <path d="
			    M 630, 425
			    A 195, 195 0 0 1 331, 600
			    A 142, 142 0 0 0 428, 570
			    A  70,  70 0 0 1 370, 523
			    A  70,  70 0 0 0 401, 521
			    A  70,  70 0 0 1 344, 455
			    A  70,  70 0 0 0 372, 460
			    A  70,  70 0 0 1 354, 370
			    A 195, 195 0 0 0 495, 442
			    A  67,  67 0 0 1 611, 380
			    A 117, 117 0 0 0 654, 363
			    A  65,  65 0 0 1 623, 401
			    A 117, 117 0 0 0 662, 390
			    A  65,  65 0 0 1 630, 425
			    Z"
			    style="fill:#3BA9EE;"/>
			</svg>`;
			var frontText = 'Message From the Developer';
			var backText = `Hello, this is the developer of StudyBlue Unblur!<br>If this extension ever stops working contact me on <a href="http://twitter.com/@JacobAJordan_" style="color:blue;text-decoration:underline;">Twitter. ${twitterBird} </a>`;
			var front = `<div class="front" itemprop="text"><div class="side side-text"><div class="text text-small">${frontText}</div></div></div>`;
			var back = `<div class="back" itemprop="text"><div class="side side-text" style=""><div class="text text-small" style=""><span class="" style="color:black;">${backText}</span></div></div></div>`;
			var card = `<div class="card js-button-join" id="developer-message" itemscope="" itemtype="http://schema.org/CreativeWork" onclick="" style="height: auto; position: absolute; left: 310px; top: 0px; min-height: 200px;">${front}${back}</div>`;
			$('#cards').prepend(card);
		}
	});
})();
