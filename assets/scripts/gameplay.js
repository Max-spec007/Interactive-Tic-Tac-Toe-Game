// const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const events = require('./events')

// const statusDisplay = document.querySelector('.game--status');
const containerArray = Array.from(document.querySelectorAll('.container'));
console.log(containerArray);
const board = document.getElementsByClassName('.row')


let currentOption = 'x'
// let boxEventIndex = null
// let over = false
// let data = {
//   game: {
//     cell: {
//       index: boxEventIndex,
//       value: currentOption
//     },
//     over: over
//   }
// }
//
// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;



const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let gameBoard = ['','','', '','','','','','']

const onClick = function (event) {
  event.preventDefault()
}

boxEventIndex = boxElements.findIndex(function (box) {
  return box === event.target
})
boxElements[boxEventIndex] = currentOption
gameBoard.splice(boxEventIndex, 1, currentOption)
document.getElementById('board').classList.add('row', currentOption)
document.getElementById(boxEventIndex).classList.add('box', currentOption)

gameApi.save(data)
.then(console.log)
.catch(gameUI.onSaveGameFailure)

console.log('gameboard', gameBoard)
console.log('currentOption', currentOption)
console.log('current index', boxEventIndex)
switchOption()
$('#message').text("It's " + currentOption.toLowerCase() + "'s turn.")


function switchOption () {
  if(currentOption === 'x') {
    currentOption = 'o'
  } else {
    currentOption = 'x'
  }
}
$('#save-game').on('click', gamePlay.onSaveGame)//userEvents.onSaveGame
