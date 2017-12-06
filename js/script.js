
//javascript

//burger menuIcon
function myFunction(x) {
	x.classList.toggle("change");
}




$(function() {
	$('button').on('click', function() {
		$('.note:last').clone().appendTo('.wrapper');
	});
});