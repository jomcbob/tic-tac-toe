function gameBoard() {
    let board = Array(9).fill('')
    console.log(board)

    let currentPlayer = "X"

    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.textContent = ''
        cell.style.backgroundColor = 'white'
        cell.addEventListener('click', handleClick)
    });

    function handleClick(event) {
        const index = parseInt(event.target.dataset.index)

        if (board[index] === '') {
            board[index] = currentPlayer
            event.target.textContent = currentPlayer

            currentPlayer = currentPlayer == 'X' ? 'O' : 'X'

            function checkWinner(cell) {
                if (board[0] === board[1] && board[1] === board[2] && board[0] !== '')
                    {cell[0].style.backgroundColor = 'green'; cell[1].style.backgroundColor = 'green'; cell[2].style.backgroundColor = 'green';} 
                if (board[3] === board[4] && board[4] === board[5] && board[3] !== '')
                    {cell[3].style.backgroundColor = 'green'; cell[4].style.backgroundColor = 'green'; cell[5].style.backgroundColor = 'green';} 
                if (board[6] === board[7] && board[7] === board[8] && board[6] !== '')
                    {cell[6].style.backgroundColor = 'green'; cell[7].style.backgroundColor = 'green'; cell[8].style.backgroundColor = 'green';} 
                if (board[0] === board[3] && board[3] === board[6] && board[0] !== '')
                    {cell[0].style.backgroundColor = 'green'; cell[3].style.backgroundColor = 'green'; cell[6].style.backgroundColor = 'green';} 
                if (board[1] === board[4] && board[4] === board[7] && board[1] !== '')
                    {cell[1].style.backgroundColor = 'green'; cell[4].style.backgroundColor = 'green'; cell[7].style.backgroundColor = 'green';} 
                if (board[2] === board[5] && board[5] === board[8] && board[2] !== '')
                    {cell[2].style.backgroundColor = 'green'; cell[5].style.backgroundColor = 'green'; cell[8].style.backgroundColor = 'green';} 
                if (board[0] === board[4] && board[4] === board[8] && board[0] !== '')
                    {cell[0].style.backgroundColor = 'green'; cell[4].style.backgroundColor = 'green'; cell[8].style.backgroundColor = 'green';} 
                if (board[2] === board[4] && board[4] === board[6] && board[2] !== '')
                    {cell[2].style.backgroundColor = 'green'; cell[4].style.backgroundColor = 'green'; cell[6].style.backgroundColor = 'green';} 
                if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {console.log("DRAW!")};
            }
            checkWinner(cells)
        }
    }
}
gameBoard()

function newGame() {
    let newgame = document.querySelector('.new')
    newgame.addEventListener('click', () => {
        console.log("yo")
        gameBoard()
        gameBoard()
        gameBoard()
    })
}
newGame()



