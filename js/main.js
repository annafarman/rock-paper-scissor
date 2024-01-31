const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(`The AI has spoken: ${computerSelection}. Brace yourself for the showdown!`);

    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'paper':
                console.log("AI reigns supreme. Better luck next time!");
                return 2;
            case 'rock':
                console.log("Stalemate! The battle ends in a draw." );
                return 0;
            default:
                console.log("Victory! Human spirit triumphs over algorithms!");
                return 1;
                
        }

    } else if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'paper':
                console.log("Stalemate! The battle ends in a draw." );
                return 0;
            case 'rock':
                console.log("Victory! Human spirit triumphs over algorithms!");
                return 1;
            default:
                console.log("AI reigns supreme. Better luck next time!");
                return 2;
                
        }
    } else if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'paper':
                console.log("Victory! Human spirit triumphs over algorithms!");
                return 1;
            case 'rock':
                console.log("AI reigns supreme. Better luck next time!");
                return 2;
            default:
                console.log("Stalemate! The battle ends in a draw." );  
                return 0;           
        }
    }
        
}

function playGame () {

    let rounds = 1;

    for (let i = 1; i <= 5; i++) {

        let playerSelection = (prompt("Rock, paper, scissors, and... action! Pick your power move!")).toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`Your choice:  ${playerSelection}. Let the games begin!"`); 

        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            let winnerID = playRound(playerSelection.toLowerCase(), computerSelection);
            rounds++;
            keepScore(winnerID);

        } else {
            console.log("Oops! Looks like you're wandering off the battlefield! Remember, it's only rock, paper, or scissors allowed here. Give it another shot!");
            i--;
        }   

    }

    if (rounds > 5) {
        showScore();
        console.log("Looks like the curtain falls on our epic showdown! Game over, folks! Until our next clash of wits and hands!");
    }

}

let AI = 0;
let human = 0;

function keepScore(value) {
    switch (value) {
        case 1:
            human++;
            break;
        case 2:
            AI++;
            break;
        default:
            break;
    }
}

function showScore() {
    console.log(`You: ${human}   AI:${AI}`);
    if ( AI > human) {
        console.log("Ah, the digital realm reigns supreme this time! Bow down to the AI overlords, for they have claimed victory over our mortal endeavors!");
    } else {
        console.log("Congratulations, you've outsmarted the digital brainiac! Victory is yours against the AI overlords!");
    }

}

playGame();