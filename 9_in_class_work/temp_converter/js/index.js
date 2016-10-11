$(document).ready(function(){
	var temp = 0;

	$('#convert-button').on('click', function(){
		temp = $('#txtFahrenheit').val();
	temp = (temp - 32) * (5 / 9);
	temp = temp.toFixed(1);
	$('#celsius').text(temp);

	$('#celsius-label').removeClass('hidden');

	if (temp <= 10) {
		$('#weather-image').attr('src', 'http://kurld.com/images/wallpapers/pictures-of-winter/pictures-of-winter-7.jpg')}
	else if (temp > 30){
		$('#weather-image').attr('src', 'http://kurld.com/images/wallpapers/pictures-of-summer/pictures-of-summer-1.jpg');
		}
	else{
		$('#weather-image').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/9/92/Colorful_spring_garden.jpg');
		}
	});
});
