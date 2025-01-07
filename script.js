isXsTurn = true

let playerX = {
    marker: "X",
    name: "mrX"
}

let playerO = {
    marker: 'O',
    name: 'mrO'
}

const swichPlayer = () => {
    isXsTurn = !isXsTurn
}

const placeMarker = (cell) => {
    if (isXsTurn){
        cell.textContent = playerX.marker
        isXsTurn = false
    } else {
        cell.textContent = playerO.marker
        isXsTurn = true
    }
}

let cell = document.querySelectorAll('.cell')
cell.addEventListener("click", placeMarker(cell))