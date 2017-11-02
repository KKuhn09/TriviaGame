//Array of objects that stores our question data
var questions = [{
	question: "Which of these is not a crustacean?",
	answers: ["Crab", "Mollusc", "Crayfish", "Lobster"],
	correctAnswer: "Mollusc"
},{
	question: "How fast will gravity accelerate an object in free fall?",
	answers: ["10 ft/s", "10 m/s", "9.8 ft/s squared", "9.8 m/s squared"],
	correctAnswer: "9.8 m/s squared"
},{
	question: "About how many days does it take the moon to orbit the earth?",
	answers: ["27", "10", "28", "30"],
	correctAnswer: "27"
}]

var timer; 
//Our game object
var game = {
	//The games needed properties
	correct: 0,
	incorrect: 0,
	counter: 10,

	//Count down the games timer
	countdown: function(){
		//Update count down every 1 second 
		var x = setInterval(function(){
			//Decrement counter
			game.counter--;
			//Display the result
			$("#timer").html("Time Remaining: "+game.counter+" seconds");
			//If the count down is finished
			if(game.counter == 0){
				clearInterval(x);
				game.endGame();
			}
		}, 1000);
	},
	//Start the game
	startGame: function(){
		//Clear div3
		$(".div3").empty();
		//Display games timer
		$(".div3").append("<h3 id='timer'>Time Remaining: "+game.counter+" seconds</h3><br>");
		//For each item in our questions array, display the question
		for(var i=0;i<questions.length;i++){
			//Create a form area for each question
			$(".div3").append("<form id='question"+i+"'></form><br>");
			//Display the question
			$("#question"+i).append("<h3>"+questions[i].question+"</h3>");
			//For each answer choice, display it
			for(var j=0;j<questions[i].answers.length;j++){
				$("#question"+i).append("<input type='radio' value='"+questions[i].correctAnswer+"'>"+questions[i].answers[j]);
			}
		}
	},
	//Calculate the players score
	calculateScore: function(){
		//For each question
		for(var i=0;i<questions.length;i++){
			if(console.log("Something");
		}
	},
	//End the game
	endGame: function(){
		//Clear div3
		$(".div3").empty();
		//Calculate score
		game.calculateScore();
		//Display players score
		$(".div3").append("<h3>Score:</h3><br>");
		$(".div3").append("<p>Correct Answers: "+game.correct+"</p>");
		$(".div3").append("<p>Incorrect Answers: "+game.incorrect+"</p><br>");
	}
}

$(document).ready(function() {

	//When the start button is clicked
	$("#start-button").click(function(){
		//Start the game
		game.startGame();
		game.countdown();
	});

});