
$(document).ready(function(){
// get the value of the color
$("#set-color").on("click", function(evt){
// an event to grab the color
  evt.preventDefault()
  // grab what's in the input tag and store variable/color
$("input#color-field").val()
var color = $("input#color-field").val()
// change color of box
$("div.brush").css("background", color)
});

// loop 20 times
for(var i = 0; i < 8000; i++){
  // select body / html



// .append a div with class wrapper
$("body").append($("<div class='square'></div>"))
}
// add mouseover event to divs with class square
$("div.square").on("mouseover", function(){
  // when I mouseover a square, grab the color of the brush
  var color = $("div.brush").css("background")
  //change the color of the square I moused over to the color of the brush
$(this).css("background", color)

})
// select element that we'll change and add event listner for a click
// change the square to what we saved in the variable
});
