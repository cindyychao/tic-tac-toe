/*----- constants -----*/

let cells = Array.from(document.getElementsByClassName('cell'));
let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('btn');

const player_O = "O";
const player_X = "X";
let currentPlayer = player_X;

let spaces = [null, null, null, null, null, null, null, null, null];

const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', playerMove))
}

  /*----- functions -----*/


//function when cell is clicked (X or O)
function playerMove(evt) {
    const id = evt.target.id;
    if (!spaces[id]){
        spaces[id] = currentPlayer;
        evt.target.innerText = currentPlayer; //make innertext x or o
        currentPlayer = currentPlayer == player_X ? player_O : player_X;
    }
}

//not sure how to come up with the function
function playerHasWon() {
// if the result satified one of the winconditions
  // using forloop? foreach? to think
    // if theres a winner: want to change h1 to O/X won message
    // if no winner: change h1 text to tie
};



restartBtn.addEventListener('click', replay)

// to reset everything after clicking the play again btn

function replay() {
    spaces.fill(null);
    cells.forEach(cell => {
        cell.innerText = '';
    })
    playerText = 'Tic Tac Toe';
    currentPlayer = player_X;
}

startGame();