// 'use strict'
//
// const gameApi = require('./books/api.js')
// const gameUi = require('./books/ui.js')
// const getFormFields = require('../lib/get-form-fields')
//
// const onSignUp = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const credentials = data.credentials
//   gameApi.index(credentials)
//     .then(gameUi.onSuccess)
//     .catch(gameUi.onError)
// }
//
// // create click handlers
//
// module.exports = {
//   onSignUp
// }
//
//
// copied
//
//
'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./books/api')
const ui = require('./books/ui')
// const gameBoard = require('./index')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // const data = getFormFields(this)
  // console.log(data)
  resetBoardSignOut()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-game').hide()
  $('#reset').hide()
  $('.board').hide()
  $('#show-game').hide()
  $('#sign-up').show()
  $('#reset').text('Reset Board')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const resetBoardSignOut = function () {
  $('#cell-0').css('background-color', '#2aa2fe')
  $('#cell-1').css('background-color', '#2aa2fe')
  $('#cell-2').css('background-color', '#2aa2fe')
  $('#cell-3').css('background-color', '#2aa2fe')
  $('#cell-4').css('background-color', '#2aa2fe')
  $('#cell-5').css('background-color', '#2aa2fe')
  $('#cell-6').css('background-color', '#2aa2fe')
  $('#cell-7').css('background-color', '#2aa2fe')
  $('#cell-8').css('background-color', '#2aa2fe')
  $('#cell-0').html(' ')
  $('#cell-1').html(' ')
  $('#cell-2').html(' ')
  $('#cell-3').html(' ')
  $('#cell-4').html(' ')
  $('#cell-5').html(' ')
  $('#cell-6').html(' ')
  $('#cell-7').html(' ')
  $('#cell-8').html(' ')
}

// const index = function (event) {
//   event.preventDefault()
//   api.index()
//     .then(ui.onSuccess)
//     .catch(ui.onError)
// }

const onCreateGame = function (event) {
  // const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  $('#create-game').hide()
  $('#reset').text('New Game')
  // onShowGame(event)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  // console.log(data)
  api.showGame(game)
    .then(ui.onSuccess)
    .catch(ui.onFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  // console.log(data)
  api.update(game)
    .then(ui.updateSuccess)
    .catch(ui.updateFail)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  // $('#get-games').on('submit', index)
  $('#create-game').on('submit', onCreateGame)
  $('#show-game').on('submit', onShowGame)
  $('.board').on('click', onUpdateGame)
}

module.exports = {
  addHandlers,
  onCreateGame
}
