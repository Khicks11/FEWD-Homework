/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and
* move on to the next question.
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.
/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the color to blue.
 */

 $("#button1").on("click", function() { 
    $("p").css("color", "blue");
 });

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
*/
$("#button1").click(function() { 
$("h2").html("Kelsey");
});

/**

 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 */

$("#button1").click(function () {
$(".falseFact").text("True Fact");
});


//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.
/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */
$('#button2').on('click', function() {
$('body').css('background-color','pink');	
});


/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
 $('#button2').click(function(){
$('h2').css('color', 'green');
 });



/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
 $('#button2').click(function(){
 	$('blockquote').html('<span>no quote</span>');
 });


//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */
 $('#button3').click(function(){
$('header h1').text('jQuery Ninja');
 });


/**
 * Question 8:
 * Have the following code execute when button 3 is clicked. Write a JavaScript comment with a description of what happened.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

$('#button3').click(function(){
	$('.city').attr('src', 'http://lorempixel.com/g/500/400/food');
});

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * Bonus: Try to do this with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"});
 */