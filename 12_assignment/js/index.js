$(document).ready(function() {

  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
  for (var i=0; i < cities.length; i++) {
    $('select').append("<option>" + cities[i] + "</option")};

  $('#city-type').change(changeCityScape);

  function changeCityScape() {
    var city = $('#city-type').val();
    if (city === 'NYC') {
      $('body').css('background-image', 'url(images/nyc.jpg)');
    } else if (city === 'SF') {
      $('body').css('background-image', 'url(images/sf.jpg)');
    } else if  (city === 'LA') {
      $('body').css('background-image', 'url(images/la.jpg)');
    } else if  (city === 'ATX') {
      $('body').css('background-image', 'url(images/austin.jpg)');
    } else if  (city === 'SYD') {
      $('body').css('background-image', 'url(images/sydney.jpg)');
    };
  };
});

// set a variable with arrays for city-type options
// on first click: append array options
// use for/else to connect image to array selections
// change background of body using css
