//Get random target number
var targetNumber= Math.floor((Math.random() * (100 - 30)) + 30);
console.log(targetNumber);

$("#number-to-guess").text(targetNumber);

//Get crystal value/number options
var numberOptions= Math.floor((Math.random() * 20) + 1);

var imageCrystal = $('img');

imageCrystal.attr("data-crystalvalue", numberOptions);

//Create click event
$("crystal-image").on("click", function() {
	
})

//Get value of clicked crystal

//Add value to counter

//Check if counter matches target number (if else)

//Record wins/loses

//Restart game