const store = require('./store')
const currentPlay = require('./currentPlay')

const onSignUpSuccess = function (response) {
  console.log('response is ', response)
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  console.log('You signed up!')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
  console.log('Failed to sign up')
  $('#my-login').show()
  $('#my-logout').hide()
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#message').text('Please click new game')
  $('#sign-in-form').trigger('reset')
  $('#change-password').show()
  $('#history').show()
  // $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.container').show()
  $('#buttons').show()
  $('#sign-out-form').show()
  $('#crossRoadBoard').hide()
  $('#my-login').hide()
  $('#my-logout').show()
  // api.getGetGame
  console.log('Here is my token!')
  console.log(response.user.token)
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed try again')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignOutSuccess = function (response) {
  console.log('response is ', response)
  $('#message').text('Thanks for signing out! ')
  $('#sign-out-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.container').hide()
  $('#buttons').hide()
  $('#change-password').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out-form').hide()
  $('#my-login').show()
  $('#my-logout').hide()
  console.log('You signed out!')
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed try again')
  $('#my-login').hide()
  $('#my-logout').show()
  console.log('Failed to sign out')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
  $('#my-login').hide()
  $('#my-logout').show()
  console.log('It worked!')
}
const onChangePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('#my-login').hide()
  $('#my-logout').show()
  console.log('It failed!')
}

const onNewGameSuccess = function (response) {
  currentPlay.game = response.game
  $('#crossRoadBoard').show()
  $('.box').empty()
  // $('#games-history').show()
  $('#history').show()
  $('#message').text('A new game was created! Please scroll down to play game! ')
  $('#my-login').hide()
  $('#my-logout').show()
  console.log('Created new game!')
}

const onNewGameFailure = function (error) {
  $('#message').text('Game was not created ')
  console.log('error is ' + error)
  console.log('Did not create new game!')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onGamesHistorySuccess = function (response) {
  $('#message').text('number of games played ' + response.games.length)
  $('#my-login').hide()
  $('#my-logout').show()
  console.log('This is the games history!')
  console.log(response.games.length)
}

const onGamesHistoryFailure = function (error) {
  $('#message').text('Failed to load games history ')
  $('#my-login').hide()
  $('#my-logout').show()
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
  onGamesHistorySuccess,
  onGamesHistoryFailure,
  currentPlay
}
