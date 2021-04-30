function playerOneChoosesRock() {
  playerOneChoice = 'r'
  gameResult()
}
function playerOneChoosesPaper() {
  playerOneChoice = 'p'
  gameResult()
}
function playerOneChoosesScissors() {
  playerOneChoice = 's'
  gameResult()
}

function playerTwoChoosesRock() {
  playerTwoChoice = 'r'
  gameResult()
}
function playerTwoChoosesPaper() {
  playerTwoChoice = 'p'
  gameResult()
}
function playerTwoChoosesScissors() {
  playerTwoChoice = 's'
  gameResult()
}

function gameResult() {
  if (playerOneChoice === 'r' && playerTwoChoice === 's') {
    document.querySelector('.message span').textContent = `Player One`
  }
  if (playerOneChoice === 'p' && playerTwoChoice === 'r') {
    document.querySelector('.message span').textContent = `Player One`
  }
  if (playerOneChoice === 's' && playerTwoChoice === 'p') {
    document.querySelector('.message span').textContent = `Player One`
  }
  if (playerTwoChoice === 'r' && playerOneChoice === 's') {
    document.querySelector('.message span').textContent = `Player Two`
  }
  if (playerTwoChoice === 'p' && playerOneChoice === 'r') {
    document.querySelector('.message span').textContent = `Player Two`
  }
  if (playerTwoChoice === 's' && playerOneChoice === 'p') {
    document.querySelector('.message span').textContent = `Player Two`
  }
  if (playerTwoChoice === playerOneChoice) {
    document.querySelector('.message').textContent = `Tie Game!`
  }
}

let playerOneChoice
let playerTwoChoice
function main() {
  document
    .querySelector('.playerOne .rock')
    .addEventListener('click', playerOneChoosesRock)

  document
    .querySelector('.playerOne .paper')
    .addEventListener('click', playerOneChoosesPaper)

  document
    .querySelector('.playerOne .scissors')
    .addEventListener('click', playerOneChoosesScissors)

  document
    .querySelector('.playerTwo .rock')
    .addEventListener('click', playerTwoChoosesRock)

  document
    .querySelector('.playerTwo .paper')
    .addEventListener('click', playerTwoChoosesPaper)

  document
    .querySelector('.playerTwo .scissors')
    .addEventListener('click', playerTwoChoosesScissors)
}

document.addEventListener('DOMContentLoaded', main)
