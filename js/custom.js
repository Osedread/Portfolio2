var $jumbo = $("#jumbotron");
var $nav = $("nav");
var $toTop = $(".arrowToTop");

$jumbo.hide();
$nav.hide();
$toTop.hide();

//JQuery DOM Ready Function
$(document).ready(function() {

  ///// Fade In of the jumbotron at the beginning
  
  $jumbo.delay(1000).fadeIn("slow", function() {
      $(this).addClass("fading");
      $nav.delay(1000).slideDown("slow");
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

//// Arrow To Top
  // Make the arrow dissapear or appear depending on window position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $toTop.fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });
  $toTop.on('click', function() {
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });

});

//////////////// Finish $(function) ////////////////////////
