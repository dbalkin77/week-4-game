$(document).ready(function() {
    console.log( "ready!" );

// Variables

var rNumber = ' ';
var wins = 0;
var losses = 0;
var pScore = 0;

// Functions

// Reset


// Clink Events for icons
$( "#image1" ).click(function randomIntFromInterval(min,max)
{
	var img1 = "";

	for (var i =0; i < 2; i++){
		var random = Math.floor(Math.random()*(max-min+1)+min);}
		
		img1 = random + img1;

	console.log(1,12);
});

$( "#image2" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#image3" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#image4" ).click(function() {
  alert( "Handler for .click() called." );
});

})


