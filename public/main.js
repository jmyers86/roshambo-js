function playerOneChoosesRock() {
  playerOneChoice === 'r'
}
function playerOneChoosesPaper() {
  playerOneChoice === 'p'
}
function playerOneChoosesScissors() {
  playerOneChoice === 's'
}

function playerTwoChoosesRock() {
  playerTwoChoice === 'r'
}
function playerTwoChoosesPaper() {
  playerTwoChoice === 'p'
}
function playerTwoChoosesScissors() {
  playerTwoChoice === 's'
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
