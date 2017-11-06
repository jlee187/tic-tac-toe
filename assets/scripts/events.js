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
const ui = require('.//books/ui')

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
  console.log(data)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // const data = getFormFields(this)
  // console.log(data)
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
