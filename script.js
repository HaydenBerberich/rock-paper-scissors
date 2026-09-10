const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
};

const getHumanChoice = () => {
    return prompt("rock, paper, or scissors: ").toLowerCase();
}

const playRound = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) {
        text.textContent = `Tie. ${humanChoice} ties ${computerChoice}.`;
        return "tie";
    } 
    else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        return "human";
    } else {
        text.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
        return "computer";
    }
}

const playGame = (humanChoice) => {
    const computerChoice = getComputerChoice();
    const winner = playRound(computerChoice, humanChoice);
    if (winner === "computer") {
        computerScore++
    } else if (winner === "human") {
        humanScore++;
    }
    text.textContent += (` Computer: ${computerScore} | Human: ${humanScore}.`);

    if (computerScore === 5) {
        text.textContent += " Computer wins game."
    } else if (humanScore === 5) {
        text.content += " You win game!"
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const text = document.querySelector("div");

let computerScore = 0;
let humanScore = 0;

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));