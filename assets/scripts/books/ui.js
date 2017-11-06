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
  $('#message').text('Create game succesfully')
}

const createGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on create game')
}

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.games)
  } else {
    console.table(data.games)
  }
}

const onError = function (response) {
  console.error(response)
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
  onError
}
