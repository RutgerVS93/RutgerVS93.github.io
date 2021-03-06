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

var x = 0;
var y = 0;
var z = 0;

//Accelerometer Stuff
window.ondevicemotion = function(event) {
  x = event.accelerationIncludingGravity.x;
  y = event.accelerationIncludingGravity.y;
  z = event.accelerationIncludingGravity.z;
}

//Accelerometer Values
function accelerometerValues(){
  document.getElementById("xValue").innerHTML = "X Value: " + x;
  document.getElementById("yValue").innerHTML = "Y Value: " + y;
  document.getElementById("zValue").innerHTML = "Z Value: " + z;
}

var alpha = 0;
var beta = 0;
var gamma = 0;

//Gyroscope Stuff
window.ondeviceorientation = function(event){
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
}

//Gyroscope Values
function gyroscopeValues(){
  document.getElementById("alphaValue").innerHTML = "Alpha Value: " + alpha;
  document.getElementById("betaValue").innerHTML = "Beta Value: " + beta;
  document.getElementById("gammaValue").innerHTML = "Gamma Value: " + gamma;
}

//AJAX Stuff
function loadDoc(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("AJAX1").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://rutgervs93.github.io/data.xml", true);
  xhttp.send();
}

//Geolocation Stuff
function getLocation(){
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

  var mymap = L.map('mapid').setView(latlng, 13)
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
  }).addTo(mymap);

  var marker = L.marker(latlng).addTo(mymap);
  });
}