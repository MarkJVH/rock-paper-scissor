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
    const scoreDiv = document.querySelector(".score");

    if (scoreDiv.hasChildNodes) {
        scoreDiv.innerHTML = "";
    }

    const summaryParagraph = document.createElement("p");
    const outcomeParagraph = document.createElement("p");
    const scoreParagraph = document.createElement("p");

    summaryParagraph.textContent = `Human played: ${humanChoice}, and computer played: ${computerChoice}`;
    
    if (humanChoice === computerChoice) {
        outcomeParagraph.textContent = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        outcomeParagraph.textContent = "Human wins!";
        humanScore++;
    } else {
        outcomeParagraph.textContent = "Computer wins! Duh!";
        computerScore++;
    }

    scoreDiv.append(outcomeParagraph);

    scoreParagraph.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;
    scoreDiv.append(scoreParagraph);

    if (humanScore == 5  || computerScore == 5) {
        if (humanScore > computerScore) {
            outcomeParagraph.textContent = "Congratulations, you beat the computer!";
        } else if (humanScore < computerScore) {
            outcomeParagraph.textContent = "Too bad! The computer is victorious.";
        } else {
            outcomeParagraph.textContent = "It's a draw!";
        }
    }    
}


let humanScore = 0, computerScore = 0;

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissorButton.addEventListener("click", () => playRound("scissor", getComputerChoice()))



// for (let i = 0; i < 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice())
// }

// console.log("Final Score:");
// console.log(`Human: ${humanScore}, Computer: ${computerScore}`);



