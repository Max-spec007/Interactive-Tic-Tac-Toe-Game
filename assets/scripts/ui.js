const store = require('./store')

const onSignUpSuccess = function (response) {
  console.log('response is ', response)
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  console.log('You signed up!')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
  console.log('Failed to sign up')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.container').show()
  $('#buttons').show()
  console.log('Here is my token!')
  console.log(response.user.token)
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed try again')
}

const onSignOutSuccess = function (response) {
  console.log('response is ', response)
  $('#message').text('Thanks for signing out! ')
  $('#sign-out-form').trigger('reset')
  console.log('You signed out!')
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed try again')
  console.log('Failed to sign out')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
  console.log('It worked!')
}
const onChangePasswordFailure = function () {
  $('#message').text('Error on change password')
  console.log('It failed!')
}

const onNewGameSuccess = function (respone) {
  $('#message').text('A new game was created! ')
  console.log('Created new game!')
}

const onNewGameFailure = function (error) {
  $('#message').text('Game was not created ')
  console.log('error is ' + error)
  console.log('Did not create new game!')
}

const onGameHistorySuccess = function (response) {
  $('#message').text('You have accessed the games history logs! ')
  console.log('This is the games history!')
}

const onGameHistoryFailure = function (error) {
  $('#message').text('Failed to load games history ')
  console.log('error is ' + error)
  console.log('No game history was found?')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onGameHistorySuccess,
  onGameHistoryFailure
}
