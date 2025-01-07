function gameBoard() {
    let board = Array(9).fill('')

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
                if (checkRow(0, 1, 2)) 
                    colorRow(cell, 0, 1, 2)
                else if (checkRow(3, 4, 5))
                    colorRow(cell, 3, 4, 5)
                else if (checkRow(6, 7, 8))
                    colorRow(cell, 6, 7, 8)
                else if (checkRow(0, 3, 6))
                    colorRow(cell, 0, 3, 6)
                else if (checkRow(1, 4, 7))
                    colorRow(cell, 1, 4, 7)
                else if (checkRow(2, 5, 8))
                    colorRow(cell, 2, 5, 8)
                else if (checkRow(0, 4, 8))
                    colorRow(cell, 0, 4, 8)
                else if (checkRow(2, 4, 6))
                    colorRow(cell, 2, 4, 6)
                else if (isDraw(board)) {
                    for (i=0; i<9; i++) {
                        cell[i].style.backgroundColor = 'red';
                    }
                    board = Array(9).fill('')
                }
            }
            checkWinner(cells)
        }
    }

    const isDraw = (board) => {
        let draw = true
        for (i=0; i<9; i++) {
            if (board[i] === '') {
                draw = false
            }
        }

        return draw
    }

    const checkRow = (first, second, third) => {
        return board[first] === board[second] && board[second] === board[third] && board[first] !== ''
    }

    const colorRow = (cell, first, second, third) => {
        cell[first].style.backgroundColor = 'green';
        cell[second].style.backgroundColor = 'green';
        cell[third].style.backgroundColor = 'green';
        board = Array(9).fill('')
    }
}
gameBoard()

function newGame() {
    let newgame = document.querySelector('.new')
    newgame.addEventListener('click', () => {
        gameBoard()
    })
}
newGame()

function annouceWinner (e) {
    let inputX = document.querySelector('#inputX')
    let inputO = document.querySelector('#inputO')
    if (e.textContent = 'X') {
        alert(`${inputX.value} won!`)
    } else {
        alert('O won!')
    }
}



