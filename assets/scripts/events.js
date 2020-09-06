
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the events
  console.log('eventObjectIs ', event)
  const form = event.target
  // Use getFormFields to get data from the form
  const data = getFormFields(form)

  console.log('data is ', data)
  // send data in AjAX request to the API
  api.signUp(data)
  // handle successful response
    .then(ui.onSignUpSuccess)
  // handle failed response
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  console.log(event.target)
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signIn(data)
    // handle successul response
    .then(ui.onSignInSuccess)
    // handle failed response
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  console.log(event.target)
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signOut(data)
    // handle successul response
    .then(ui.onSignOutSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.changePassword(data)
    // handle successul response
    .then(ui.onChangePasswordSuccess)
    // handle failed response
    .catch(ui.onChangePasswordFailure)
}

// const onNewGame = function (event) {
//   event.preventDefault()
//   // get the form from the event
//   const form = event.target
//   // use getFormFields to get data from the form
//   const data = getFormFields(form)
//   // send data in AJAX request to the API
//   api.newGame(data)
//     // handle successul response
//     .then(ui.onNewGameSuccess)
//     // handle failed response
//     .catch(ui.oNewGameFailure)
// }

// let currentOption = 'x'
// const onSquaresClick = function (event) {
//   // event.preventDefault()
//   // // get the form from the event
//   // const form = event.target
//   // // use getFormFields to get data from the form
//   // const data = getFormFields(form)
//   // // send data in AJAX request to the API
//   console.log('on click was clicked!')
//   const data = event.target
//   const checkSquares = $(data).text()
//   if (checkSquares === '') {
//     $(event.target).text(currentOption)
//     currentOption === 'x' ? currentOption = 'o' : currentOption = 'x'
//     console.log('It is blank!')
//   } else {
//     console.log('It is not blank')
//   }
// }

// const onGamesHistory = function (event) {
//   event.preventDefault()
//   // get the form from the event
//   // send data in AJAX request to the API
//   api.onGamesHistory(store.user.token)
//   // handle successul response
//     .then(ui.onGamesHistorySuccess)
//   // handle failed response
//     .catch(ui.onGamesHistoryFailure)
// }

// const onSaveGame = function () {
//   event.preventDefault()
//   // get the form from the event
//   // send data in AJAX request to the API
//   api.onSaveGame()
//   // handle successul response
//     .then(ui.onSaveGameSuccess)
//   // handle failed response
//     .catch(ui.onSaveGameFailure)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  store
  // onNewGame,
  // onSquaresClick,
  // onGamesHistory
  // onSaveGame
}
