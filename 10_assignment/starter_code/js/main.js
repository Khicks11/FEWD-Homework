/* PSUEDOCODE

//Get input

// When 'submit' is clicked and
	// if input equals "New York", "New York City", "NYC"
		// store input in var
		// get 'body' 'background' in css
		// reset url to 'images/nyc.jpg'
	// else if input equals "San Francisco" or "SF" or "Bay Area"
		// store input in var
		// get 'body' 'background' in css
		// reset url to 'images/sf.jpg'
	// else if input equals "Los Angeles" or "LA" or "LAX"
		// store input in var
		// get 'body' 'background' in css
		// reset url to 'images/la.jpg'
	// else if input equals "Austin" or "ATX"
		// store input in var
		// get 'body' 'background' in css
		// reset url to 'images/austin.jpg'
	// else if input equals "Sydney" or "SYD"
		// store input in var
		// get 'body' 'background' in css
		// reset url to 'images/sydney.jpg'

*/
$(document).ready(function(){
var city;
	$('#submit-btn').on('click', function(event) {
		event.preventDefault();
		city = $('#city-type').val();
		changeCityScape();
	});

	function changeCityScape() {
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

/*	event.preventDefault('#submit-btn')*/
