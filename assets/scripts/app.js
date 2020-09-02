'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./events')

$(() => {
  $('.container').hide()
  $('#buttons').hide()
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-form').on('submit', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#new-game').on('click', userEvents.onNewGame)
  $('#game-history').on('click', userEvents.onGameHistory)
  $('#save-game').on('click', userEvents.onSaveGame)
  $('.box').on('click', userEvents.onClick)
})
