'use strict'

const gameApi = require('./books/api.js')
const gameUi = require('./books/ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  gameApi.index()
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}

// create click handlers

module.exports = {
  onSignUp
}
