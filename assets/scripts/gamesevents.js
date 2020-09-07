// const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const gamesBrain = require('./gamesbrain')

const onNewGame = function (token) {
  event.preventDefault()
  // get the form from the event
  currentPlayer = 'X'
  gamesOver = false
  crossRoadBoard = ['', '', '', '', '', '', '', '', '']

  // send data in AJAX request to the API
  api.newGame(store.user.token)
    // handle successul response
    .then(ui.onNewGameSuccess)
    // handle failed response
    .catch(ui.oNewGameFailure)
}

let currentPlayer = 'X'
let gamesOver = false
let crossRoadBoard = ['', '', '', '', '', '', '', '', '']

const onSquaresClick = function (event) {
  // // if (gamesOver) {
  //   return
  // }
  // event.preventDefault()
  // // get the form from the event
  // const form = event.target
  // // use getFormFields to get data from the form
  // const data = getFormFields(form)
  // // send data in AJAX request to the API
  console.log('on click was clicked!')
  const data = event.target
  const checkSquares = $(data).text()
  if (checkSquares === '' && gamesOver === false) {
    $(event.target).text(currentPlayer)
    crossRoadBoard[event.target.id] = currentPlayer

    console.log('It is blank!')
    console.log(crossRoadBoard)
    gamesOver = gamesBrain.isGameWinner(crossRoadBoard)
    if (gamesOver) {
      console.log('game over!')
      $('#message').text('GAME WINNER!!!!!!!!')

      api.onSquaresClick(event.target.id, currentPlayer, gamesOver)
    } else if (gamesBrain.tieGame(crossRoadBoard)) {
      console.log('tie game!')
      $('#message').text('TIE GAME!! Try Again!')
      // $('message').text('TIE GAME!!')
      api.onSquaresClick(event.target.id, currentPlayer, gamesOver)
    } else {
      // keep playing the game
      api.onSquaresClick(event.target.id, currentPlayer, gamesOver)
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'
      $('#message').text('Current player is ' + currentPlayer)
    }
  //   if (checkSquares === '' && gamesOver === false) {
  //     $('#message').text('current player is ' + currentPlayer)
  //   } else if (gamesOver) {
  //     $('#message').text('GAME WINNER!!!!!!!!')
  //   // $('#message').text('current player is ' + currentPlayer)
  //   // $('message').text('TIE GAME!! Try Again!')
  // } else {
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

module.exports = {
  currentPlayer,
  gamesOver,
  crossRoadBoard,
  onNewGame,
  onSquaresClick,
  onGamesHistory,
  gamesBrain
}
