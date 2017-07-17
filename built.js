// Cache the elements before load
var $about = $("#about");
var $footer = $("#footer");
var $jumbo = $("#jumbotron");
var $nav = $("nav");
var $navBtn = $("nav button");
var $title = $("#jumbotron h3");
var $work = $("#work");

// Other variables
var $toTop = $(".arrowToTop");
var $skillsBars = $(".about li");


$about.hide();
$footer.hide();
$jumbo.hide();
$nav.hide();
$toTop.hide();
$work.hide();


// Preloader script and animations on load
  // Wait for window load
  $(window).on("load", function() {
    // Animate loader off screen
    $(".loader-container").fadeOut("slow");
    // Fade In of the jumbotron at the beginning
    $jumbo.delay(1000).fadeIn("slow", function() {
      $nav.delay(1000).slideDown("slow", function() {
        $about.delay(4000).show();
        $work.show();
        $footer.show();
      });
    });
  });

// jQuery DOM Ready Function
$(document).ready(function() {
  
	// Smooth Scroll
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
      $("html, body").animate({
              scrollTop: elem.offset().top
      }, 1000 );
    }
  };
    // bind to click event
    $("a").on("click", function( event ) {
      // only do this if it's an anchor link
      if ( $(this).attr("href").match("#") ) {
        // cancel default event propagation
        event.preventDefault();
        // scroll to the location
        var href = $(this).attr("href").replace("#", "");
        scrollToAnchor( href );
      }
    });

  // Arrow To Top
  // Make the arrow dissapear or appear depending on window position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $toTop.fadeIn();
    } else {
      $toTop.fadeOut();
    }
  });
  
  $toTop.on("click", function() {
    $("html, body").animate({scrollTop : 0}, 800);
    return false;
  });

  // Skills bar
  $skillsBars.on("inview", function(event, isInView) {
    if (isInView) {
      $(".skills-html").animate({width: "95%"}, 1000);
      $(".skills-css").animate({width: "90%"}, 1000);
      $(".skills-sass").animate({width: "40%"}, 1000);
      $(".skills-js").animate({width: "65%"}, 1000);
      $(".skills-bs").animate({width: "70%"}, 1000);
      $(".skills-jq").animate({width: "70%"}, 1000);
      $(".skills-grunt").animate({width: "30%"}, 1000);
      $(".skills-git").animate({width: "45%"}, 1000);
    }
  });

  

// Finish $(function)
});

