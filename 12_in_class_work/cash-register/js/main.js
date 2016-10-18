$(document).ready(function(){
// set a variable to be the total

var total = 0
// add event listener to my form
$("#entry").on("submit", function(evt){
  evt.preventDefault()
  // grabbing value out of the input tag
  var userInput = parseFloat($("#newEntry").val())
  var tr = $("<tr></tr>")
  tr.append($("<td></td>"))
  tr.append($("<td>" + userInput.toFixed(2) + "</td>"))
  $("#entries").append(tr)
  // reset to empty string
  $("#newEntry").val("")
total = (userInput + total)

$("#total").text("$" + total.toFixed(2))
})
})


// get input from .total
// create 2 new table rows in html
// save input in one of the table rows
// initially input equals output
// second time input equals output plus initial output
// record all inputs in register
