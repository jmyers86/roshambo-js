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
function playerReplay() {
  window.location.reload()
  // document.querySelector('.message').textContent = 'New Game!'
}

function gameResult() {
  if (playerOneChoice === 'r' && playerTwoChoice === 's') {
    document.querySelector('.message').textContent = `Player One Wins!`
  }
  if (playerOneChoice === 'p' && playerTwoChoice === 'r') {
    document.querySelector('.message').textContent = `Player One Wins!`
  }
  if (playerOneChoice === 's' && playerTwoChoice === 'p') {
    document.querySelector('.message').textContent = `Player One Wins!`
  }
  if (playerTwoChoice === 'r' && playerOneChoice === 's') {
    document.querySelector('.message').textContent = `Player Two Wins!`
  }
  if (playerTwoChoice === 'p' && playerOneChoice === 'r') {
    document.querySelector('.message').textContent = `Player Two Wins!`
  }
  if (playerTwoChoice === 's' && playerOneChoice === 'p') {
    document.querySelector('.message').textContent = `Player Two Wins!`
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

  document.querySelector('.replay').addEventListener('click', playerReplay)
}

document.addEventListener('DOMContentLoaded', main)
