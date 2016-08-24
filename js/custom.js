// Create fade effect methods in JQuery
(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            
            $(this).css({
            	opacity: 1.0,
            	visibility: "visible"})
            .animate({opacity: 0});
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
        	
            $(this).css({
            	opacity: 0,
            	visibility: "visible"})
            .animate({opacity: 1.0});

        });
    };
}(jQuery));

/* If I put the .hide() method inside document ready,
the user is able to see the jumbotron from the beginning
if the loading time is slow */
// $("#jumbotron").hide();
$("#skills p").invisible();


//JQuery DOM Ready Function
$(document).ready(function() {

	// Smooth Scroll
  var scrollToAnchor = function( id ) {
 
    // grab the element to scroll to based on the name
    var elem = $("a[name='"+ id +"']");
 
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = $("#"+id);
    }
 
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" ) {
 
      // do the scroll
      $('html, body').animate({
              scrollTop: elem.offset().top
      }, 1000 );
 
    }
  };
 
  // bind to click event
  $("a").click(function( event ) {
 
    // only do this if it's an anchor link
    if ( $(this).attr("href").match("#") ) {
 
      // cancel default event propagation
      event.preventDefault();
 
      // scroll to the location
      var href = $(this).attr('href').replace('#', '');
      scrollToAnchor( href );
 
    }
 
  });
/*
	//Jumbotron fadeIn-fadeOut animation	
	setInterval(function jumbotronFade() {
	$("#jumbotron").fadeIn(2000).delay(5000).fadeOut(3000); }, 800);
*/
	//Skills button show
	$(".btn-skill").on("mouseenter", function() {
		$(this).siblings("p").visible();
		$(this).css("opacity", "0.3");
	});

	$(".btn-skill").on("mouseleave", function() {
		$(this).siblings("p").delay(400).invisible();
		$(this).css("opacity", "1");
	});

});




