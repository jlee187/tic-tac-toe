// 'use strict'
//
// const onSuccess = function (data) {
//   if (data.credentials) {
//     console.log(data.credentials)
//   } else {
//     console.table(data.credentials)
//   }
// }
//
// const onError = function (response) {
//   console.error(response)
// }
//
// module.exports = {
//   onSuccess,
//   onError
// }
//
'use strict'

// Hide functionalities till signed in

$('#change-password').hide()
$('#sign-out').hide()
$('#show-game').hide()
$('#create-game').hide()
$('#get-games').hide()

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up succesfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#message').text('Signed in succesfully')
  $('#change-password').show()
  $('#sign-out').show()
  $('#show-game').show()
  $('#create-game').show()
  $('#get-games').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on change passwords')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  $('#message').text('Signed out successfully')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign out')
}

const createGameSuccess = function (data) {
  console.log(data)
  console.log(data.game.id)
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  $('.board').show()
  $('#message').text('Created game succesfully')
}

const createGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on create game')
}

const onSuccess = function (data) {
  if (data.games) {
    console.log(data.games)
    console.log(data.games.length)
    $('#message').text(data.games)
  } else {
    console.table(data.games)
  }
}

const onError = function (response) {
  console.error(response)
}

const updateSuccess = function () {
  $('#message').html('Game updated successfully!')
}

const updateFailure = function (error) {
  console.log(error)
  $('#message').html('Update failed. See console for details.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  onSuccess,
  onError,
  updateSuccess,
  updateFailure
}
