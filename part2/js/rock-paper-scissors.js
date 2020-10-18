var choices = ['rock', 'paper', 'scissors'];

function play(userChoice, computerChoice) {
    'use strict';

    if (userChoice === computerChoice) {
        return 0;
    } else {
        var winningConditions =
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'rock' && computerChoice === 'scissors');

        return winningConditions ? 1 : -1;
    }
}

function startGame() {
    'use strict';
    var userChoice;

    do {
        userChoice = prompt("Enter either of these: rock, paper, or scissors?").toLowerCase();
    } while (choices.indexOf(userChoice) === -1)

    var systemChoice = choices[Math.floor(Math.random() * Math.floor(3))];

    var result = play(userChoice, systemChoice);

    if (result === 0) {
        alert("Tie!");
    } else {
        var resultText = result > 0 ? 'win' : 'lose';
        alert("The computer chose " + systemChoice + " and you chose " + userChoice + ". You " + resultText + "!");
    }
    startGame();
}

startGame();