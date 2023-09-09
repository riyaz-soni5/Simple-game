
'use strict';


document.addEventListener('DOMContentLoaded', () => {
    let playerScore = 0;
    let robotScore = 0;
    const moves = ['', 'rock', 'scissor', 'paper'];



    let playerScoreHtml = document.querySelector('.player-score');
    let robotScoreHtml = document.querySelector('.robot-score');
    let playerAvatar = document.querySelector('.img-1');
    let playerRobot = document.querySelector('.img-2');
    let computerMove;
    const rockOption = document.querySelector('.option-1');
    const scissorOption = document.querySelector('.option-2');
    const paperOption = document.querySelector('.option-3');
    let result = document.querySelector('#result');
    const blurBackground = document.querySelector('.blur-background');


    playerScoreHtml.innerHTML = `Player Score : ${playerScore}`;
    robotScoreHtml.innerHTML = `Robot Score : ${robotScore}`;


    // to get computer move
    function getComputerMoves() {
        return moves[Math.floor(Math.random() * 3) + 1];
    }






    rockOption.addEventListener('click', () => {

        computerMove = getComputerMoves();
        if (computerMove == 'rock') {
            console.log("tie");
            playerAvatar.src = "/images-moves/stone.png";
            playerRobot.src = "/images-moves/stone.png";
        }
        else if (computerMove == "scissor") {
            playerAvatar.src = "/images-moves/stone.png";
            playerRobot.src = '/images-moves/cut.png';
            playerScore++;
            playerScoreHtml.innerHTML = `Player Score : ${playerScore}`;


        }
        else if (computerMove == 'paper') {
            playerAvatar.src = "/images-moves/stone.png";
            playerRobot.src = '/images-moves/paper.png';
            robotScore++;
            robotScoreHtml.innerHTML = `Robot Score : ${robotScore}`;

        }

        if (playerScore == 3 || robotScore == 3) {
            document.querySelector('.blur-background').classList.remove('d-none');
            document.querySelector('.moodal').classList.remove('d-none');
            result.innerHTML = (`${(playerScore == 3) ? "You Won!" : "Robot Wins!"}`);
        }





    });


    scissorOption.addEventListener('click', () => {

        computerMove = getComputerMoves();

        if (computerMove == 'scissor') {
            playerAvatar.src = '/images-moves/cut.png';
            playerRobot.src = '/images-moves/cut.png';
            console.log("tie");
        }
        else if (computerMove == "paper") {
            playerAvatar.src = '/images-moves/cut.png';
            playerRobot.src = '/images-moves/paper.png';
            playerScore++;
            playerScoreHtml.innerHTML = `Player Score : ${playerScore}`;


        }
        else if (computerMove == 'rock') {
            playerAvatar.src = '/images-moves/cut.png';
            playerRobot.src = '/images-moves/stone.png';
            robotScore++;
            robotScoreHtml.innerHTML = `Robot Score : ${robotScore}`;

        }

        if (playerScore == 3 || robotScore == 3) {
            document.querySelector('.blur-background').classList.remove('d-none');
            document.querySelector('.moodal').classList.remove('d-none');
            result.innerHTML = (`${(playerScore == 3) ? "You Won!" : "Robot Wins!"}`);
        }



    });


    paperOption.addEventListener('click', () => {
        computerMove = getComputerMoves();

        if (computerMove == 'paper') {
            playerAvatar.src = '/images-moves/paper.png';
            playerRobot.src = '/images-moves/paper.png';
            console.log("tie");

        }
        else if (computerMove == "rock") {
            playerAvatar.src = '/images-moves/paper.png';
            playerRobot.src = '/images-moves/stone.png';
            playerScore++;
            playerScoreHtml.innerHTML = `Player Score : ${playerScore}`;

        }
        else if (computerMove == 'scissor') {
            playerAvatar.src = '/images-moves/paper.png';
            playerRobot.src = '/images-moves/cut.png';
            robotScore++;
            robotScoreHtml.innerHTML = `Robot Score : ${robotScore}`;

        }


        if (playerScore == 3 || robotScore == 3) {
            document.querySelector('.blur-background').classList.remove('d-none');
            document.querySelector('.moodal').classList.remove('d-none');
            result.innerHTML = (`${(playerScore == 3) ? "You Won!" : "Robot Wins!"}`);
        }



    });

});


document.querySelector('.try-again').addEventListener('click', () => {
    location.reload();
})