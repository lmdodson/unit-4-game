$(document).ready(function() {
	//!define global variables
	//variable for the target number
	var targetNum = Math.floor(Math.random() * 101 + 19);
	console.log("starting target number is ", targetNum);
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

	//!define functions
	//reset function
	function reset() {
		//reset userNum and show it in html as grey
		userNum = 0;
		$("#user-total").text(userNum);
		$("#user-total").css("color", "lightgray");
		//choose a new targetNum and display in html
		targetNum = Math.floor(Math.random() * 101 + 19);
		console.log("target number is now ", targetNum);
		$("#number").text(targetNum);
		//choose new random gem values
		num1 = Math.floor(Math.random() * 11 + 1);
		num2 = Math.floor(Math.random() * 11 + 1);
		num3 = Math.floor(Math.random() * 11 + 1);
		num4 = Math.floor(Math.random() * 11 + 1);
	}
	//win function
	function win() {
		//increment wins
		wins++;
		//tell user they win
		alert("Congratulations, you win!");
		//display in html
		$("#total-wins").text(wins);
		//run the reset
		reset();
	}
	//loss function
	function loss() {
		//increment losses
		losses++;
		//tell user they lost
		alert("Sorry, you lost. Try again!");
		//display in html
		$("#total-losses");
		//run the reset
		reset();
	}
	//!Put it all together
	//gem clicks
	$("gem-1").on("click", function() {
		userNum = userNum + num1;
		console.log("Current user number: " + userNum);
		//update html with current userNum
		$("#user-number").text(userNum);
		//check win condition
		if (userNum == targetNum) {
			$("#user-total").css("color", "green");
			win();
		} else if (userNum > targetNum) {
			$("#user-total").css("color", "red");
			loss();
		}
	});

	$("gem-2").on("click", function() {
		userNum = userNum + num1;
		console.log("Current user number: " + userNum);
		//update html with current userNum
		$("#user-number").text(userNum);
		//check win condition
		if (userNum == targetNum) {
			$("#user-total").css("color", "green");
			win();
		} else if (userNum > targetNum) {
			$("#user-total").css("color", "red");
			loss();
		}
	});

	$("gem-3").on("click", function() {
		userNum = userNum + num1;
		console.log("Current user number: " + userNum);
		//update html with current userNum
		$("#user-number").text(userNum);
		//check win condition
		if (userNum == targetNum) {
			$("#user-total").css("color", "green");
			win();
		} else if (userNum > targetNum) {
			$("#user-total").css("color", "red");
			loss();
		}
	});

	$("gem-4").on("click", function() {
		userNum = userNum + num1;
		console.log("Current user number: " + userNum);
		//update html with current userNum
		$("#user-number").text(userNum);
		//check win condition
		if (userNum == targetNum) {
			$("#user-total").css("color", "green");
			win();
		} else if (userNum > targetNum) {
			$("#user-total").css("color", "red");
			loss();
		}
	});
});
