var $jumbo = $("#jumbotron");
var $nav = $("nav li");
var $figure = $("figure");
$jumbo.hide();
$nav.hide();

//JQuery DOM Ready Function
$(document).ready(function() {

  ///// Fade In of the jumbotron at the beginning
  $jumbo.delay(1000).fadeIn("slow", function() {
      $(this).addClass("fading");
      $nav.delay(1000).fadeIn("slow");
  });

  ///// Resizing of projects on hover
    $figure.on("mouseover", function() {
        $(this).children("img").css("width", "120%")
                                .css("height", "120%");
    });

	///// Smooth Scroll
    var scrollToAnchor = function(id) {
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


});

//////////////// Finish $(function) ////////////////////////
