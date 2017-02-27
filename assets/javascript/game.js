//Declaring Object for stones//

var infinityStones = {
	space: {
		name: "space_stone",
		value: 0,
		img: "assets/images/space_stone.png",
		alt: "The Majestic Space Stone.",
	},
	mind: {
		name: "mind_stone",
		value: 0,
		img: "assets/images/mind_stone.png",
		alt: "The Glorious Mind Stone.",
	},
	reality: {
		name: "reality_stone",
		value: 0,
		img: "assets/images/reality_stone.png",
		alt: "The Noble Reality Stone."
	},
	power: {
		name: "power_stone",
		value: 0,
		img: "assets/images/power_stone.png",
		alt: "The Sumptuous Power Stone.",
	},
	time: {
		name: "time_stone",
		value: 0,
		img: "assets/images/time_stone.png",
		alt: "The Grand Time Stone.",
	},

}

//Define global variables and set to zero//

var numberToGuess = 0;
var userNumber = 0;
var wins = 0;
var losses = 0;

//Function to get a random numbers//

var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};

//When the page loads//

$(document).ready(function() {

//Print Stone Images//

$("#stones-div").append('<img id="' + infinityStones.space.name + '" class="img-rounded" src="' + infinityStones.space.img + '" alt="' + infinityStones.space.alt + '">');
$("#stones-div").append('<img id="' + infinityStones.mind.name + '" class="img-circle" src="' + infinityStones.mind.img + '" alt="' + infinityStones.mind.alt + '">');
$("#stones-div").append('<img id="' + infinityStones.reality.name + '" class="img-circle" src="' + infinityStones.reality.img + '" alt="' + infinityStones.reality.alt + '">');
$("#stones-div").append('<img id="' + infinityStones.power.name + '" class="img-circle" src="' + infinityStones.power.img + '" alt="' + infinityStones.power.alt + '">');
$("#stones-div").append('<img id="' + infinityStones.time.name + '" class="img-circle" src="' + infinityStones.time.img + '" alt="' + infinityStones.time.alt + '">');


//New Game Function//
function newGame() {
	$("#score-board").html('<h4>Wins: ' + wins + '</h4><h4>Losses: ' + losses + '</h4>');
	numberToGuess = getRandom(19, 120);
	$("#number-to-guess").html(numberToGuess);
	userNumber = 0;
	$("#user-number").html(userNumber);
	infinityStones.space.value = getRandom(1, 12);
	infinityStones.mind.value = getRandom(1, 12);
	infinityStones.reality.value = getRandom(1, 12);
	infinityStones.power.value = getRandom(1, 12);
	infinityStones.time.value = getRandom(1, 12);
};

//Call the newGame Function//

newGame();

//On Click Events for stones//

$("#space_stone").on("click", function() {
	userNumber = userNumber + infinityStones.space.value;
	$("#user-number").html(userNumber);
	if (userNumber === numberToGuess) {
		alert("Congratulations, Guardian! Your mission is successful.");
		wins++;
		newGame();
	} else if (userNumber > numberToGuess) {
		alert("Your energy is too much for the stones, but the galaxy is still stable! Try again.");
		losses++;
		newGame();
	} else {
	}
})

$("#mind_stone").on("click", function() {
	userNumber = userNumber + infinityStones.mind.value;
	$("#user-number").html(userNumber);
	if (userNumber === numberToGuess) {
		alert("Congratulations, Guardian! Your mission is successful.");
		wins++;
		newGame();
	} else if (userNumber > numberToGuess) {
		alert("Your energy is too much for the stones, but the galaxy is still stable! Try again.");
		losses++;
		newGame();
	} else {
	}
})

$("#reality_stone").on("click", function() {
	userNumber = userNumber + infinityStones.reality.value;
	$("#user-number").html(userNumber);
	if (userNumber === numberToGuess) {
		alert("Congratulations, Guardian! Your mission is successful.");
		wins++;
		newGame();
	} else if (userNumber > numberToGuess) {
		alert("Your energy is too much for the stones, but the galaxy is still stable! Try again.");
		losses++;
		newGame();
	} else {
	}
})

$("#power_stone").on("click", function() {
	userNumber = userNumber + infinityStones.power.value;
	$("#user-number").html(userNumber);
	if (userNumber === numberToGuess) {
		alert("Congratulations, Guardian! Your mission is successful.");
		wins++;
		newGame();
	} else if (userNumber > numberToGuess) {
		alert("Your energy is too much for the stones, but the galaxy is still stable! Try again.");
		losses++;
		newGame();
	} else {
	}
})

$("#time_stone").on("click", function() {
	userNumber = userNumber + infinityStones.time.value;
	$("#user-number").html(userNumber);
	if (userNumber === numberToGuess) {
		alert("Congratulations, Guardian! Your mission is successful.");
		wins++;
		newGame();
	} else if (userNumber > numberToGuess) {
		alert("Your energy is too much for the stones, but the galaxy is still stable! Try again.");
		losses++;
		newGame();
	} else {
	}
})

});
