function getComputerChoice() {
    const computerChoice = Math.random()

    if (computerChoice < 0.33) {
        return "rock"
    } else if (computerChoice >= 0.33 && computerChoice <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Hey! Welcome to this awesome rock, paper, scissor game.\nPlease write any of the following: 'rock', 'paper' or 'scissor'.\nGood luck versus this super incredible AI!").toString().toLowerCase();
        
        if (humanChoice.length === 0) {
            console.log("Please write something. :(");
        } else if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissor") {
            console.log("Use one of the following: rock, paper, scissor.");
        } else {
            break; // Correct choice, exit loop
        }
    }
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    console.log(`Human played: ${humanChoice}, and computer played: ${computerChoice}`);
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("Human wins!");
        humanScore++;
    } else {
        console.log("Computer wins! Duh!");
        computerScore++;
    }

    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}


let humanScore = 0, computerScore = 0;

for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
}

console.log("Final Score:");
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("Congratulations, you beat the computer!");
} else if (humanScore < computerScore) {
    console.log("Too bad! The computer is victorious.");
} else {
    console.log("It's a draw!");
}