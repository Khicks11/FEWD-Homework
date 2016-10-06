$(document).ready(function(){
	var score = 0;
	$("#zero").on("click", function(){
		score = 0;
		updateScoreDisplay();
	});
	$("#add5").on("click", function(){
		score += 5;
		updateScoreDisplay();
		});
	$("#add10").on("click", function(){
		score += 10;
		updateScoreDisplay();
		});
	$("#sub1").on("click", function(){
		score--;
		updateScoreDisplay();
		});
	function updateScoreDisplay() {
		$("#result").text(score.toFixed(1));
	}
});