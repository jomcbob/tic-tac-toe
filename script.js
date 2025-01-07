function gameBoard() {
    const board = Array(9).fill(null);
    console.log(board);

    let currentPlayer = 'X';

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = ""
        cell.addEventListener('click', handleClick);
    });

    function handleClick(event) {
        const index = parseInt(event.target.dataset.index);

        if (board[index] === null) {
            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
gameBoard()

function newGame() {
    let newgame = document.querySelector('.new')
    newgame.addEventListener('click', () => {
        console.log("yo")
        gameBoard()
    })
}
newGame()