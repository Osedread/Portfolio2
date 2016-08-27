////////////////////

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

$("#about img, #about p").invisible();


//JQuery DOM Ready Function
$(document).ready(function() {

	////// Smooth Scroll
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

    $("#about").on("mouseenter", function() {
      $("section img").visible().addClass("bounceInLeft");
      $("section p").visible().addClass("bounceInRight");
    });
});

//////////////// Finish $(function) ////////////////////////