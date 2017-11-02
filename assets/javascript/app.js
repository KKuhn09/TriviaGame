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
	//The games needed variables
	correct: 0,
	incorrect: 0,
	counter: 30,

	//Function that counts down the game
	countdown: function(){
		//Update count down every 1 second 
		var x = setInterval(function(){
			
		}, 1000);
	},
	//Function that starts the game
	start: function(){
		//Clear div3
		$(".div3").empty();
		//Display games timer
		$(".div3").append("<h3 id='timer'>Time Remaining:"+game.counter+" seconds</h3><br>");
		//For each item in our questions array, display the question
		for(var i=0;i<questions.length;i++){
			$(".div3").append("<form id='question"+i+"'></form><br>");
			$("#question"+i).append("<h3>"+questions[i].question+"</h3>");
			for(var j=0;j<questions[i].answers.length;j++){
				$("#question"+i).append("<input type='radio'>"+questions[i].answers[j]);
			}
		}
		game.countdown();
	}
}

$(document).ready(function() {

	//When the start button is clicked
	$("#start-button").click(function(){
		//Start the game
		game.start();
	});

});