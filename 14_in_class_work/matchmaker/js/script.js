$(document).ready(function() {

  $('.hamburger').on('click', function(event){
	event.preventDefault();
  $('.main-nav').slideToggle("slow");
  $('li').css('display', 'block');
  $('.navigation').css('width','100%');
  $('li').css('text-align','center');
  $('li').css('margin-right', '0');
});
})
