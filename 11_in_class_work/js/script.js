// var names = ['andy', 'mary', 'susy', 'bob']
// var numbers = [2, 4, 6, 8]

// for(var i = 0; i<4; i++){
// 	console.log('hello '+ names[i] +'!')
// }

// for(var i = 1; i<1000; i = i + 2){
// 	console.log(i)
// }

// var i = 0
// while(i < 10 ){
// 	console.log(i)
// 	i++
// };

// for(var i = 0; i > names.length; i++){
// 	console.log('hello '+ names[i] +'!')
// }

$(document).ready(function(){
$("h1").on("click", function(){
	$("div.menu").toggle()
})
});

$(document).ready(function(){
$("div.menu").on("click", function(){
	$("div.paragraph").css('background-color','blue');
});
});

$(document).ready(function(){
$("h1").on("click", function(){
	$("body").addClass('awesome')
})
});