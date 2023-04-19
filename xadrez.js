const resetar = document.querySelector('#reset')
const resposta = document.querySelector('.resposta')
const board = document.querySelector('#board')
const piece = document.getElementsByTagName('p')
const matriz = []

document.addEventListener('DOMContentLoaded', () => {
createBoard()
})

createMatrix()

function createMatrix() {
    for (let i = 0; i < 8; i++) {
        matriz[i] = []
        for (let j = 0; j < 8; j++) {
            while (Math.abs(i - j) == 0 || Math.abs(i - j) == 7) {
                matriz[i][j] = 4
                break
            }
            while (Math.abs(i - j) == 1 || Math.abs(i - j) == 6) {
                matriz[i][j] = 3
                break
            }
            while (Math.abs(i - j) == 2 || Math.abs(i - j) == 5) {
                matriz[i][j] = 2
                break
            }
            while ((i == 0 || i == 7) && j == 3) {
                matriz[i][j] = 5
                break
            }
            while ((i == 0 || i == 7) && j == 4) {
                matriz[i][j] = 6
                break
            }
            while (i == 1 || i == 6) {
                matriz[i][j] = 1
                break
            }
            while (i == 2 || i == 3 || i == 4 || i == 5) {
                matriz[i][j] = 0
                break
            }
        }
    }
}

function countAllPieces() {
    let contagem = {
        peao : 0,
        bispo: 0,
        cavalo: 0,
        torre: 0,
        rainha: 0,
        rei: 0,
    }
    const inputs = document.querySelectorAll('.board-space')
    
    inputs.forEach(input => {
        const valor = Number(input.value)
        while (valor == 1) {
            contagem.peao++
            break
        }
        while (valor == 2) {
            contagem.bispo++
            break
        }
        while (valor == 3) {
            contagem.cavalo++
            break
        }
        while (valor == 4) {
            contagem.torre++
            break
        }
        while (valor == 5) {
            contagem.rainha++
            break
        }
        while (valor == 6) {
            contagem.rei++
            break
        }
    })
    return contagem
}

function createBoard() {
    board.innerHTML = ''
    resposta.style.display = 'none'
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const inputBoard = document.createElement('input')
            inputBoard.type = 'text'
            inputBoard.value = matriz[i][j]
            inputBoard.classList.add('board-space')
            while((i + j) % 2 == 1) {
                inputBoard.classList.add('black-space')
                break
            }
            board.appendChild(inputBoard)
        }
    }
}

function calcular() {
    const contagem = countAllPieces()
    
    resposta.style.display = 'block'
    piece[6].innerHTML = `Peão: ${contagem.peao} peça(s)`
    piece[7].innerHTML = `Bispo: ${contagem.bispo} peça(s)`
    piece[8].innerHTML = `Cavalo: ${contagem.cavalo} peça(s)`
    piece[9].innerHTML = `Torre: ${contagem.torre} peça(s)`
    piece[10].innerHTML = `Rainha: ${contagem.rainha} peça(s)`
    piece[11].innerHTML = `Rei: ${contagem.rei} peça(s)`
}