$(document).ready(function() {
    console.log( "ready!" );
});
// Variables

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
var finalScore = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
            100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
var wins = 0;
var losses = 0;
var playerScore = 0;
var pokeBall = Math.floor(Math.random() * numbers.length);
var yoshiEgg = Math.floor(Math.random() * numbers.length);
var mushroom = Math.floor(Math.random() * numbers.length);
var coinBox = Math.floor(Math.random() * numbers.length);

// Generate Computer Score and display to browser
var computerScore = Math.floor(Math.random() * finalScore.length);
$("#computerScore").text(computerScore);

// Functions/////////////////
// Reset
var reset = function () {
	computerScore = Math.floor(Math.random() * finalScore.length);
	$("#computerScore").text(computerScore);
	playerScore = 0;
	$("#playerScore").text(playerScore);
	pokeBall = Math.floor(Math.random() * numbers.length);
	yoshiEgg = Math.floor(Math.random() * numbers.length);
	mushroom = Math.floor(Math.random() * numbers.length);
	coinBox = Math.floor(Math.random() * numbers.length);
}


// Clink Events for icons


$( "#pokeball" ).click(function() {
	playerScore = playerScore + pokeBall;
	$("#playerScore").text(playerScore);
	if (playerScore === computerScore) {
	wins++;
	$( "#wins" ).text(wins);
	reset();
} 
	else if (playerScore > computerScore) {
	losses++;
	$( "#losses" ).text(losses);
	reset();
}
});

$( "#yoshiEgg" ).click(function() {
	playerScore = playerScore + yoshiEgg;
	$("#playerScore").text(playerScore);
	if (playerScore === computerScore) {
	wins++;
	$( "#wins" ).text(wins);
	reset();
} 
	else if (playerScore > computerScore) {
	losses++;
	$( "#losses" ).text(losses);
	reset();
}
});

$( "#mushroom" ).click(function() {
	playerScore = playerScore + mushroom;
	$("#playerScore").text(playerScore);
	if (playerScore === computerScore) {
	wins++;
	$( "#wins" ).text(wins);
	reset();
} 
	else if (playerScore > computerScore) {
	losses++;
	$( "#losses" ).text(losses);
	reset();
}
});

$( "#coinBox" ).click(function() {
	playerScore = playerScore + mushroom;
	$("#playerScore").text(playerScore);
	
	if (playerScore === computerScore) {
	wins++;
	$( "#wins" ).text(wins);
	reset();
} 
	else if (playerScore > computerScore) {
	losses++;
	$( "#losses" ).text(losses);
	reset();
}

});
	
// if (updatedPlayerScore === playerScore) {
// 	wins++;
// 	$( "#wins" ).text(wins);
// 	reset(); 
// }

// if (updatedPlayerScore > computerScore) {
// 	losses++;
// 	$( "#losses" ).text(losses);
// 	reset();
// }

	


















