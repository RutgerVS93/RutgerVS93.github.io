(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

var lat = null;
function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position){
  var mapOptions = {
    zoom: 17;
    center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
  };

  var mapElement = document.getElementById('map');
  map = new google.maps.Map(mapElement, mapOptions);
  var image = 'img/map-marker.svg';
  var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var beachMarker = new google.maps.Marker({
    position: myLatLng
    map: map
    icon: image
  });

  getLocation();

  function handle_error(err) {
  if (err.code == 1) {
    // user said no!
	$("#msg").text('You chose not to share your location.');
  }
}