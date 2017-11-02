'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const clickEvents = require('./events')

// On document ready
$(() => {
  $('#cell-zero').on('submit', clickEvents.onGetBooks) // click function to register click with API... must record in JS too
})
