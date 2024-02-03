const options = ['purr', 'paw', 'claw'];
let cat = 0;
let human = 0;
let rounds = 0;
const playerScore = document.querySelector('#player-score');
const catScore = document.querySelector('#cat-score');

const baseImage = document.querySelector("#base-img");
const resultsImage = document.querySelector("#results-img");

const baseTxt = document.querySelector('#base');
const humanWinsTxt = document.querySelector('#humanWins');
const catWinsTxt = document.querySelector('#catWins');
const tieTxt = document.querySelector('#stalemate');

function getComputerChoice() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'purr') {
        switch (computerSelection) {
            case 'paw':
                return 2;
            case 'purr':
                return 0;
            default:
                return 1;
        }

    } else if (playerSelection == 'paw') {
        switch (computerSelection) {
            case 'paw':
                return 0;
            case 'purr':
                return 1;
            default:
                return 2;

        }
    } else if (playerSelection == 'claw') {
        switch (computerSelection) {
            case 'paw':
                return 1;
            case 'purr':
                return 2;
            default:
                return 0;
        }
    }
}

function updateScore() {
    playerScore.textContent = human;
    catScore.textContent = cat;
}

function declareWinner(result) {
    if (result == 1) human++;
    if (result == 2) cat++;
    updateScore();
}

function updateBoard(playerSelection, catSelection) {
    const playerImage = document.querySelector('#player-choice');
    const playerText = document.querySelector('#player-text');
    const catImage = document.querySelector('#cat-choice');
    const catText = document.querySelector('#cat-text');

    switch (playerSelection) {
        case "claw":
            playerImage.src = "img/scissors.PNG";
            playerText.textContent = "claw"
            break;
        case "paw":
            playerImage.src = "img/paper.PNG";
            playerText.textContent = "paw";
            break;
        default:
            playerImage.src = "img/rock.PNG";
            playerText.textContent = "purr";
            break;
    }


    switch (catSelection) {
        case "claw":
            catImage.src = "img/scissors.PNG";
            catText.textContent = "claw"
            break;
        case "paw":
            catImage.src = "img/paper.PNG";
            catText.textContent = "paw";
            break;
        default:
            catImage.src = "img/rock.PNG";
            catText.textContent = "purr";
            break;
    }

}

function toggleBoard() {
    baseImage.classList.toggle('hidden');
    resultsImage.classList.toggle('hidden');
}

function toggleText(value) {
    baseTxt.classList.toggle('hidden');
    switch (value) {
        case 1:
            humanWinsTxt.classList.toggle('hidden');
            break;
        case 2:
            catWinsTxt.classList.toggle('hidden');
            break;
        default:
            tieTxt.classList.toggle('hidden');
            break;
    }
}

function resetText() {
    if (baseTxt.classList.contains('hidden')) baseTxt.classList.remove('hidden');
    if (!humanWinsTxt.classList.contains('hidden')) humanWinsTxt.classList.add('hidden');
    if (!catWinsTxt.classList.contains('hidden')) catWinsTxt.classList.add('hidden');
    if (!tieTxt.classList.contains('hidden')) tieTxt.classList.add('hidden');
}


const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
    window.open("index.html", "_self");
});

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {
    cat = 0;
    human = 0;
    updateScore();

    if (baseImage.classList.contains('hidden')) {
        baseImage.classList.remove('hidden');
        resultsImage.classList.add('hidden');
    };

    resetText();
});

const moreBtn = document.querySelector('#moreBtn');
moreBtn.addEventListener('click', () => {
    toggleBoard();
    resetText();
    // close the current result
    // open the play page
    // continue playing the game
});

const btnSelected = document.querySelectorAll('.selection');
btnSelected.forEach(function (button) {
    button.addEventListener('click', () => {
        const playerSelection = button.value;
        const catSelection = getComputerChoice();
        const result = playRound(playerSelection, catSelection);
        declareWinner(result);
        updateBoard(playerSelection, catSelection);
        toggleBoard();
        toggleText(result);
    });
});

