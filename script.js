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
        console.log(`Tie. ${humanChoice} ties ${computerChoice}`);
        return "tie";
    } 
    else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
        return "computer";
    }
}

const playGame = () => {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const winner = playRound(computerChoice, humanChoice);
        if (winner === "computer") {
            computerScore++
        } else if (winner === "human") {
            humanScore++;
        }
        console.log(`Computer: ${computerScore} | Human: ${humanScore}`);
    }
}

playGame();