let won = document.querySelector('.won');
let numberForX = 0;  // Track score for X
let numberForO = 0;  // Track score for O

// Main function to set up the game board
function gameBoard() {
    won.style.backgroundColor = "gray";
    won.style.color = 'gray';
    let board = Array(9).fill('');
    let currentPlayer = "X";
    let isGameOver = false;

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = 'white';
        cell.addEventListener('click', handleClick);
    });

    // Handle click on a cell
    function handleClick(event) {
        if (isGameOver) return;  // If the game is over, no further moves can be made.

        const index = parseInt(event.target.dataset.index);

        if (board[index] === '') {
            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;

            // Check if someone won or if the game is a draw
            if (checkWinner()) {
                announceWinner(currentPlayer);
            } else if (isDraw()) {
                announceDraw();
            } else {
                // Switch to the next player
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    }

    // Check for a winner
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (let combo of winningCombinations) {
            if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] && board[combo[0]] !== '') {
                colorRow(combo);
                isGameOver = true;  // Mark game as over
                return true;
            }
        }

        return false;
    }

    // Check if it's a draw
    function isDraw() {
        return board.every(cell => cell !== '') && !isGameOver;
    }

    // Color the winning row and announce the winner
    function colorRow([first, second, third]) {
        cells[first].style.backgroundColor = 'green';
        cells[second].style.backgroundColor = 'green';
        cells[third].style.backgroundColor = 'green';
    }

    // Announce the winner and update the score
    function announceWinner(player) {
        let inputX = document.querySelector('#inputX');
        let inputO = document.querySelector('#inputO');
        let Xscore = document.querySelector('#Xscore');
        let Oscore = document.querySelector('#Oscore');

        if (player === 'X') {
            won.textContent = `${inputX.value} won!`;
            won.style.backgroundColor = "black";
            won.style.color = 'white';
            numberForX += 1; // Increment X's score
            Xscore.textContent = numberForX; // Update X's score display
        } else if (player === 'O') {
            won.textContent = `${inputO.value} won!`;
            won.style.backgroundColor = "black";
            won.style.color = 'white';
            numberForO += 1; // Increment O's score
            Oscore.textContent = numberForO; // Update O's score display
        }
    }

    // Announce draw (no score changes)
    function announceDraw() {
        cells.forEach(cell => cell.style.backgroundColor = 'red')
        won.textContent = 'Draw!';
        won.style.backgroundColor = "black";
        won.style.color = 'white';
        isGameOver = true;  // Mark game as over
    }
}

// Set up new game when "New Game" button is clicked
function newGame() {
    let newgame = document.querySelector('.new');
    newgame.addEventListener('click', () => {
        gameBoard();
        won.textContent = '';  // Clear winner message
    });
}

newGame();

// Track and display score
function resetScore() {
    let resetButton = document.querySelector('#reset-score');
    resetButton.addEventListener('click', () => {
        numberForX = 0;
        numberForO = 0;
        document.querySelector('#Xscore').textContent = numberForX;
        document.querySelector('#Oscore').textContent = numberForO;
    });
}

resetScore();
gameBoard();




