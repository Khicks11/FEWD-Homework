jQuery(document).ready(function(){

  // When purple box is clicked, set all paragraphs to be purple
  
  $("#purpleBox").on("click", function() { 
    $('p').toggleClass('colorpurple');
  });

  // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black

  $("#blueBox").on("click", function() { 
    $('.hipsterSpeak').toggleClass('hipstercolor');
  });
  // When the red box is clicked set the list items toggle red background and white text on and off
  $("#redBox").on("click", function() { 
    $('li').toggleClass('redbackground');
  });

  // When any of the boxes are clicked, add a 6px solid black bottom border
});