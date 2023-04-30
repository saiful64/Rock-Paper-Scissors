const rpsChoice = ["Rock", "Paper", "Scissors"];
const totalScore = {
	computerScore: 0,
	playerScore: 0,
};
function getComputerChoice() {
	return rpsChoice[Math.floor(Math.random() * 3)];
}

function getResult(playerChoice, computerChoice) {
	const resultDiv = document.getElementById("result");

	if (playerChoice === computerChoice) resultDiv.innerText = "Its s a tie !!";
	else if (
		(playerChoice === "Rock" && computerChoice === "Scissors") ||
		(playerChoice === "Scissors" && computerChoice === "Paper") ||
		(playerChoice === "Paper" && computerChoice === "Rock")
	) {
		totalScore["playerScore"]++;
		resultDiv.innerText = "Player Win !!";
	} else {
		totalScore["computerScore"]++;
		resultDiv.innerText = "Computer Win !!";
	}

	showResult;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(computerScore, playerScore, playerChoice, computerChoice) {
	console.log(computerScore);

	const handsDiv = document.getElementById("hands");
	const playerScoreDiv = document.getElementById("player-score");
	const computerScoreDiv = document.getElementById("computer-score");

	handsDiv.innerText = `${playerChoice} vs  ${computerChoice} `;
	playerScoreDiv.innerText = `👱 ${playerScore}`;
	computerScoreDiv.innerText = ` ${computerScore} 🤖`;

	if (computerScore >= 5) {
		alert("Computer Won the game!!!");
		endGame();
	}
	if (playerScore >= 5) {
		alert("You Won the game!!!");
		endGame();
	}
}

function onClickRPS(playerChoice) {
	const computerChoice = getComputerChoice();
	getResult(playerChoice, computerChoice);
	showResult(
		totalScore["computerScore"],
		totalScore["playerScore"],
		playerChoice,
		computerChoice
	);
}

function playGame() {
	const rpsButtons = document.querySelectorAll(".rpsButton");
	rpsButtons.forEach((rpsButton) => {
		rpsButton.onclick = () => onClickRPS(rpsButton.value);
	});
}

function endGame() {
	totalScore.playerScore = 0;
	totalScore.computerScore = 0;
	showResult(totalScore["computerScore"], totalScore["playerScore"], "", "");
}

playGame();

const reset = document.getElementById("endGameButton");
reset.onclick = () => {
	totalScore.playerScore = 0;
	totalScore.computerScore = 0;
		showResult(totalScore["computerScore"], totalScore["playerScore"], "", "");

};
