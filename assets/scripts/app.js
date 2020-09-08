'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./events')
const gamesevents = require('./gamesevents')

$(() => {
  $('.container').hide()
  $('#buttons').hide()
  $('#change-password').hide()
  $('#sign-out-form').hide()
  $('#my-logout').hide()
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-form').on('submit', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#new-game').on('click', gamesevents.onNewGame)
  $('#history').on('click', gamesevents.onGamesHistory)
  // $('#save-game').on('click', userEvents.onSaveGame)
  $('.box').on('click', gamesevents.onSquaresClick)
})
