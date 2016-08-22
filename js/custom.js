// Create invisibility methods in JQuery
(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));


//JQuery DOM Ready Function
$(document).ready(function() {

	//Jumbotron fadeIn-fadeOut animation	
	setInterval(function jumbotronFade() {
	$("#jumbotron").fadeIn(4000).delay(600).fadeOut(3000); }, 800);

	//Skills button show
	$(".btn-skill").on("mouseenter", function() {
		$(this).siblings(".hidden-skill").visible();
		$(this).invisible();
	});

	$(".btn-skill").on("mouseleave", function() {
		$(this).siblings(".hidden-skill").invisible();
		$(this).visible();
	});

});


/* If I put the .hide() method inside document ready,
the user is able to see the jumbotron from the beginning
if the loading time is slow */
$("#jumbotron").hide();
$(".hidden-skill").invisible();

