const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')  // getting all the possible choices of the user
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    // after getting the user's choice we want the computer to respond
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    // we want to get a random choice from the computer 
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNum === 1) {
        computerChoice = 'rock'
    } 
    if (randomNum === 2) {
        computerChoice = 'paper'
    }
    if (randomNum === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You won!'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You won!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You won!'
    }

    resultDisplay.innerHTML = result
}