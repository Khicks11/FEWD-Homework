$(document).ready(function() {
    

$(".readmore").on("click",function(){
  $('#show-this-on-click, readless').slideDown();
  	$('.readmore').hide();
    $('.readless').show();
});

$(".readless").on("click",function(){
  $('#show-this-on-click').slideUp();
  	$('.readless').hide();
    $('.readmore').show();
});

$(".learnmore").on("click",function(){
  $('#learnmoretext').slideDown();
  	$('.learnmore').hide();
});


    });

$("a").on("click", function(event) {
   event.preventDefault(".button");});