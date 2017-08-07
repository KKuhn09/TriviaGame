var timeLeft = 30;

$(document).ready(function() {


	//Need to give each answer properties of 'correct' and 'incorrect'

	var timerId = setInterval(countdown, 1000);
	var score = 0;

	function checkAnswers() {
		if(document.getElementById("correct1").checked){
			score++;
		}
		if(document.getElementById("correct2").checked){
			score++;
		}
		if(document.getElementById("correct3").checked){
			score++;
		}
	}

	function endGame() {
		window.alert("Your score is: " + score);
	}

	function countdown() {
	  if (timeLeft == 0) {
	    clearTimeout(timerId);
	    checkAnswers();
	    endGame();
	  } 
	  else {
	    $("#div1").html("Time Remaining: " + timeLeft + " seconds")
	    timeLeft--;
	  }
	}

});