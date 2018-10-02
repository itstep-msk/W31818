var players = document.querySelectorAll(".player");
var playerScore = document.querySelector(".player-score");
var botScore = document.querySelector(".bot-score");
var quantity = document.querySelector(".game-quantity");
var bot = document.querySelector(".bot");
var playerChoice;
var botChoice;
var count = 0;
var playerWin = 0;
var botWin = 0;
var options = ["rock","papper","scissors"];

for(var i = 0; i < players.length; i++) {
	players[i].addEventListener("click", function() {
		/*
		Обращаемся к текущему элементу. 
		Забираем значение из атрибута и записываем
		в переменную
		*/
		playerChoice = this.getAttribute("data-choice");
		botMakeChoice();
		checkChoice();
	})
}
/*
function playerBot() {
	var random = Math.floor(Math.random() * options.length);
	playerChoice = options[random];
	botMakeChoice();
	checkChoice();
}

setInterval(playerBot)
*/
function botMakeChoice() {
	var random = Math.floor(Math.random() * options.length);
	botChoice = options[random];
	bot.style.backgroundImage = "url(img/" + botChoice + ".png)";
}

function checkChoice() {

	if(playerChoice == botChoice) {
		console.log("DRAW");
	}

	if(botChoice == "rock" && playerChoice == "papper"
		|| botChoice == "scissors" && playerChoice == "rock"
		|| botChoice == "papper" && playerChoice == "scissors") {
		playerWin++;
	}
	if(botChoice == "rock" && playerChoice == "scissors"
		|| botChoice == "scissors" && playerChoice == "papper"
		|| botChoice == "papper" && playerChoice == "rock") {
		botWin++;
	}

	count++;
	quantity.innerHTML = count;
	playerScore.innerHTML = playerWin;
	botScore.innerHTML = botWin;
}
