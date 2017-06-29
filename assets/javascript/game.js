//Get random target number
var targetNumber= Math.floor((Math.random() * (100 - 30)) + 30);
console.log(targetNumber);

$("#number-to-guess").text(targetNumber);

var counter = 0;

//Get crystal value/number options
var numberOptions= Math.floor((Math.random() * 20) + 1);

var imageCrystal = $('img');

imageCrystal.attr("data-crystalvalue", numberOptions);

//Create click event
$("crystal-image").on("click", function() {

//Get value of clicked crystal
	var crystalValue= ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

//Add value to counter	
	counter += crystalValue;

//Check if counter matches target number (if else)
	if (counter === targetNumber) {
		alert("You win!");
	} else if (counter >= targetNumber) {
		alert("You lose.");
	}


})







//Record wins/loses

//Restart game