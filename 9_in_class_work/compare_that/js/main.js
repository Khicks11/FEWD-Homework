$(document).ready(function(){
var leftNumber, rightNumber;

$('#submit').on('click', function(){
	leftNumber = parseInt($('#a').val());
	rightNumber = parseInt($('#b').val());

if(leftNumber < rightNumber) {
	$('#comparison').text('<');
}	else if (leftNumber>rightNumber){
	$('#comparison').text('>');
}	else {
	$('#comparison').text('=');
}
});

});

/*console.log ('initial status:' +lights)*/