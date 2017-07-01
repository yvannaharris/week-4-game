$(function() {
//Get random target number
	var targetNumber= Math.floor((Math.random() * (120 - 19)) + 19);
	console.log(targetNumber);

	$("#number-to-guess").text(targetNumber);


	var counter = 0;

	var win = 0;
	var lose = 0;

//Get crystal value/number options

$.each($('img'), function(index, value) {
	var numberOptions = Math.floor((Math.random() * 12) + 1);
	$(value).attr("data-crystalvalue", numberOptions);
	console.log(numberOptions);
});

//Create click event
	$(".crystal-image").on("click", function() {

//Get value of clicked crystal
		var crystalValue= ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);

//Add value to counter	
		counter += crystalValue;
		console.log(counter);
		$("#crystal-counter").text("Your total score is: " + counter);

//Check if counter matches target number (if else)
//Record wins/loses
		if (counter === targetNumber) {
			alert("You win!");
			win++;
			$("#wins").text("Wins: " + win);
		} else if (counter >= targetNumber) {
			alert("You lose.");
			lose++;
			$("#losses").text("Losses: " + lose);
		}


	});



//Restart game
function reset() {
	//reset counter?

	counter = 0;

	targetNumber= Math.floor((Math.random() * (100 - 30)) + 30);

	$("#number-to-guess").text(targetNumber);

	var numberOptions= Math.floor((Math.random() * 20) + 1);

	var imageCrystal = $('img');

	imageCrystal.attr("data-crystalvalue", numberOptions);
};




});

