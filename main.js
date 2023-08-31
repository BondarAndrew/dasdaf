let computerScore = 0;
let playerScore = 0;

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});

function playRound(playerChoice) {
    const choices = ["rock", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let roundResult = "";

    if (playerChoice === computerChoice) {
        roundResult = "Нічия!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult = "Ви перемогли!";
        playerScore++;
    } else {
        roundResult = "Комп'ютер переміг.";
        computerScore++;
    }

    document.getElementById("result").textContent = `Ви обрали ${playerChoice}, комп'ютер обрав ${computerChoice}. ${roundResult}`;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("playerScore").textContent = playerScore;
}