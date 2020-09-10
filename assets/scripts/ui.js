const store = require('./store')
const currentPlay = require('./currentPlay')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
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
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('.container').show()
  $('#buttons').show()
  $('#sign-out-form').show()
  $('#crossRoadBoard').hide()
  $('#my-login').hide()
  $('#my-logout').show()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed try again')
  $('#my-login').show()
  $('#my-logout').hide()
}

const onSignOutSuccess = function (response) {
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
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed try again')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password').trigger('reset')
  $('#my-login').hide()
  $('#my-logout').show()
}
const onChangePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onNewGameSuccess = function (response) {
  currentPlay.game = response.game
  $('#crossRoadBoard').show()
  $('.box').empty()
  $('#history').show()
  $('#message').text('A new game was created! Please scroll down to play game! ')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onNewGameFailure = function () {
  $('#message').text('Game was not created ')
  $('#my-login').hide()
  $('#my-logout').show()
}

const onGamesHistorySuccess = function (response) {
  $('#message').text('number of games played ' + response.games.length)
  $('#my-login').hide()
  $('#my-logout').show()
  console.log(response.games.length)
}

const onGamesHistoryFailure = function () {
  $('#message').text('Failed to load games history ')
  $('#my-login').hide()
  $('#my-logout').show()
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
