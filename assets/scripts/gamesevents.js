// const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const gamesBrain = require('./gamesBrain')

let currentPlayer = 'x'
let gamesOver = false
let crossRoadBoard = ['', '', '', '', '', '', '', '', '']

const onNewGame = function (token) {
  event.preventDefault()
  // get the form from the event
  currentPlayer = 'x'
  gamesOver = false
  crossRoadBoard = ['', '', '', '', '', '', '', '', '']

  // send data in AJAX request to the API
  api.newGame(store.user.token)
    // handle successul response
    .then(ui.onNewGameSuccess)
    // handle failed response
    .catch(ui.oNewGameFailure)
}

// const onSquaresClick = function (event) {
//   const data = event.target
//   console.log('on squaresclick was clicked!')
//   // const data = event.target
//   // if cross board game div is empty, game isn't over
//   if ($('#' + data).is(':empty') && gamesOver === false) {
//     // add playerValue to that div
//     $('#' + data).html(currentPlayer)
//     // update local gameBoard array
//     updateCrossRoadBoard(data, currentPlayer)
//     // check local gameboard for gameOver bool
//     gamesOver = gamesBrain.isGameLoser(crossRoadBoard)
//     // PATCH, call to the API with updates
//     api.squaresClick(data, currentPlayer, gamesOver)
//       .then(ui.onSquaresClickSuccess)
//       .catch(ui.onSquaresClickFailure)
//     const checkSquares = $(data).text()
//     if (checkSquares === '') {
//       $(event.target).text(currentPlayer)
//       // update playerValue
//       currentPlayer === 'x' ? currentPlayer = 'o' : currentPlayer = 'x'
//     } else if (!$('#' + data).is(':empty') && gamesOver === false) {
//       $('#msg').text('This crossroad is taken partner, take a different one.')
//     }
//     console.log('It is blank!')
//     // } else {
//     console.log('It is not blank')
//   }
//   console.log(data)
//   console.log($(data).text())
// }
const onSquaresClick = function (event) {
  // event.preventDefault()
  // // get the form from the event
  // const form = event.target
  // // use getFormFields to get data from the form
  // const data = getFormFields(form)
  // // send data in AJAX request to the API
  console.log('on click was clicked!')
  const data = event.target
  const checkSquares = $(data).text()
  if (checkSquares === '') {
    $(event.target).text(currentPlayer)
    currentPlayer === 'x' ? currentPlayer = 'o' : currentPlayer = 'x'
    console.log('It is blank!')
  } else {
    console.log('It is not blank')
  }
}
const onGamesHistory = function (event) {
  event.preventDefault()
  // get the form from the event
  // send data in AJAX request to the API
  console.log('Hello!')
  api.gamesHistory()
  // handle successul response
    .then(ui.onGamesHistorySuccess)
  // handle failed response
    .catch(ui.onGamesHistoryFailure)
}

const updateCrossRoadBoard = function (index, string) {
  crossRoadBoard.splice(index, 1, string)
}

module.exports = {
  currentPlayer,
  gamesOver,
  crossRoadBoard,
  onNewGame,
  onSquaresClick,
  onGamesHistory,
  gamesBrain,
  updateCrossRoadBoard
}
