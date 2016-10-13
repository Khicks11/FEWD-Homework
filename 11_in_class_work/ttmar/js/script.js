$(document).ready(function(){
$("#first_paragraph").on("click", function(){
	$("body").css("background", "magenta")
});

$("#second_paragraph").on("click", function(event){
	event.preventDefault();
	$(".second_paragraph").css("display", "block")
});

$("#first_chorus").on("click", function(event){
	event.preventDefault();
	$(".first_chorus").css("display", "block")
});

$("#third_paragraph").on("click", function(event){
	event.preventDefault();
	$(".third_paragraph").css("display", "block")
});

$("#fourth_paragraph").on("click", function(event){
	event.preventDefault();
	$(".fourth_paragraph").css("display", "block")
});

var counter = 0
$("#second_chorus").on("click", function(event){
	event.preventDefault();
	  console.log(counter);
	  $("p.second_chorus").eq(counter).show()
        counter++ ;            
});


});