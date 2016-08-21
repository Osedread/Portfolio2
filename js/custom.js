//JQuery 
$(document).ready(function() {

	jumbotronFade();

});

$("#jumbotron").hide();

setInterval(
	function jumbotronFade() {
	$("#jumbotron").fadeIn(3000).delay(400).fadeOut(3000);

}, 800);