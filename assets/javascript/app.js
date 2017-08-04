var timeLeft = 30;

$(document).ready(function() {

	//Need to make a function that only allows 1 checkbox to be checked, per form

	//Need to give each answer properties of 'correct' and 'incorrect'

	var timerId = setInterval(countdown, 1000);

	function countdown() {
	  if (timeLeft == 0) {
	    clearTimeout(timerId);
	    //endGame function
	  } 
	  else {
	    $("#div1").html("Time Remaining: " + timeLeft + " seconds")
	    timeLeft--;
	  }
	}

	//endGame function
	//Will report back to the user what they answered, and if it was correct or not
	//Will give the user a score based on correct answers

});