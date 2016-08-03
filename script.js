console.log('StudyBlue Unblur! by @JacobAJordan_');

var blurs = document.getElementsByClassName('card blur');
var texts = document.getElementsByClassName('text-small');
while(blurs.length){
	blurs[0].className = 'card';
}
for(var i = 0; i < texts.length; i++){
	texts[i].style = 'color:black';
}