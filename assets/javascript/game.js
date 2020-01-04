$(document).ready(function() {
	//!Define global variables
	//variable for the target number
	var targetNum = Math.floor(Math.random() * 101 + 19);
	console.log("targetNum: ", targetNum);
	//add targetNum to html
	$("#number").text(targetNum);

	//variables for crystal values
	var num1 = Math.floor(Math.random() * 11 + 1);
	var num2 = Math.floor(Math.random() * 11 + 1);
	var num3 = Math.floor(Math.random() * 11 + 1);
	var num4 = Math.floor(Math.random() * 11 + 1);

	//set user generated total to 0
	var userNum = 0;
	//set wins to 0;
	var wins = 0;
	//add wins to html
	$("#total-wins").text(wins);
	//set losses to 0;
	var losses = 0;
	//add losses to html
	$("#total-losses").text(losses);
});
