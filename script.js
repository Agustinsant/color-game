let numeroCuadros = 6
let squareColors = generateRandomColors(numeroCuadros)
let squares = document.querySelectorAll('.square')
let pickedColor = pickColor()
let colorDisplay = document.querySelector('#colorDisplay')
let message = document.querySelector('#message')
let h1 = document.querySelector('h1')
let reset = document.querySelector('#reset')
let easyButton = document.querySelector('#easyButton')
let hardButton = document.querySelector('#hardButton')
let headerBar = document.querySelector('.header-bar')
let easy = document.querySelector('.easy')

colorDisplay.textContent = String(pickedColor)

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = squareColors[i]
}

reset.addEventListener('click', function(){
    squareColors = generateRandomColors(numeroCuadros)
    pickedColor = pickColor()
    colorDisplay.textContent = String(pickedColor)
    h1.style.color = 'white'
    headerBar.style.backgroundColor = 'rgb(79, 132, 194)'
    reset.textContent = 'NUEVOS COLORES'
    for (let i = 0; i < squareColors.length; i++) {
        squares[i].style.backgroundColor = squareColors[i]
        }
    message.textContent = ''
})

easyButton.addEventListener('click', function(){
    numeroCuadros = 3
    this.classList.add('selected')
    hardButton.classList.remove('selected')
    squareColors = generateRandomColors(numeroCuadros)
    pickedColor = pickColor()
    colorDisplay.textContent = String(pickedColor)
    h1.style.color = 'white'
    headerBar.style.backgroundColor = 'rgb(79, 132, 194)'
    reset.textContent = 'NUEVOS COLORES'
    for (let i = 0; i < squares.length; i++) {
        if(typeof squareColors[i] !== 'undefined'){
            squares[i].style.backgroundColor = squareColors[i]
        }
        else{squares[i].style.display ='none'
        }
    }
    message.textContent = ''
})

hardButton.addEventListener('click', function(){
    numeroCuadros = 6
    this.classList.add('selected')
    easyButton.classList.remove('selected')
    squareColors = generateRandomColors(numeroCuadros)
    pickedColor = pickColor()
    colorDisplay.textContent = String(pickedColor)
    h1.style.color = 'white'
    headerBar.style.backgroundColor = 'rgb(79, 132, 194)'
    reset.textContent = 'NUEVOS COLORES'
    for (let i = 0; i < squareColors.length; i++) {
        squares[i].style.backgroundColor = squareColors[i]
        squares[i].style.display = 'block'
        }
    message.textContent = ''
})

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;
        if (pickedColor == clickedColor) {
            squares[i].style.backgroundColor = cambioColores(clickedColor)
            headerBar.style.backgroundColor = pickedColor
            message.textContent = '¡EXITO!'
            reset.textContent = 'JUGA OTRA VEZ'
            colorDisplay.textContent = String(pickedColor)
        }
        else {
            this.classList.add('transform')
            this.style.backgroundColor = 'black'
            message.textContent = '¡Inténtalo nuevamente!'
        }
    })
}

function cambioColores(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    let numeroRandom = Math.floor(Math.random() * squareColors.length);
    return squareColors[numeroRandom]
}

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function generateRandomColors(num) {
    let arreglo = []
    for (i = 0; i < num; i++) {
        arreglo.push(randomColor())
    }
    return arreglo
}