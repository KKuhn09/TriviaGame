//Array of objects that stores our question data
var questions = [{
	question: "Which of these is not a crustacean?",
	answers: ["Crab", "Mollusc", "Crayfish", "Lobster"],
	correctAnswer: "Mollusc"
},{
	question: "Which of these appeared on Earth most recently?",
	answers: ["Sharks", "Jellyfish", "Trees", "Nautiluses"],
	correctAnswer: "Trees"
},{
	question: "About how many days does it take the moon to orbit the earth?",
	answers: ["27", "10", "28", "30"],
	correctAnswer: "27"
}];

var timer; 
//Contains everything needed for our game to run
var game = {
	//The games needed properties
	correct: 0,
	incorrect: 0,
	counter: 30,

	//Count down the games timer
	countDown: function(){
		//Update count down every 1 second 
		var x = setInterval(function(){
			game.counter--; //Decrement counter
			$("#timer").html("Time Remaining: "+game.counter+" seconds"); //Display the result

			if(game.counter == 0){ //If the count down is finished
				clearInterval(x); //Stop the counter
				game.endGame(); //End the game
			}

		}, 1000);
	},

	//Start the game
	startGame: function(){
		$(".div3").empty();  // Clear div3
		this.countDown();  // Start the count down
		//Display games initial timer
		$(".div3").append("<h3 id='timer'>Time Remaining: "+this.counter+" seconds</h3><br>");

		//For each item in our questions array, display the question
		for(var i=0;i<questions.length;i++){

			$(".div3").append("<form id='question"+i+"'></form><br>");//Create a form area for each question
			$("#question"+i).append("<h3>"+questions[i].question+"</h3>");//Display the question

			//For each choice, display it
			for(var j=0;j<questions[i].answers.length;j++){
				$("#question"+i).append("<input type='radio' name='question-"+i+"' value='"+
					questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
	},
	//Calculate the players score
	calculateScore: function(){
		//For each question
		for(var i=0;i<questions.length;i++){
			//Select the checked radio button
			$.each($("input[name='question-"+i+"']:checked"), function(){
				//If value of checked button equals the questions answer
				if ($(this).val() === questions[i].correctAnswer) {
			        game.correct++; //Increment correct
			      		}
			    else {
			       	game.incorrect++; //Increment incorrect
			    }
			});
		}
	},
	//End the game
	endGame: function(){

		game.calculateScore();//Calculate score
		$(".div3").empty();//Clear div3

		//Display players score
		$(".div3").append("<h3>Score:</h3><br>");
		$(".div3").append("<h3>Correct Answers: "+game.correct+"</h3>");
		$(".div3").append("<h3>Incorrect Answers: "+game.incorrect+"</h3>");
		$(".div3").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
	}
}

$(document).ready(function() {

	$("#start-button").click(function(){ // When the start button is clicked
		game.startGame(); // Start the game
	});

});