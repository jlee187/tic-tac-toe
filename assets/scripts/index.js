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

// let checkCheck = 0 // see if the click event is registering properly... can't increment appropriately
let whoseTurn = 0

// On document ready
$(() => {
  // $('#cell-zero').on('submit', clickEvents.onGetBooks) // click function to register click with API... must record in JS too

  $('#cell-zero').on('click', function (event) {
    whoseTurn += 1 // scope issue... child can access parent but parent cannot access local
    console.log(whoseTurn)
    console.log('clicked', $(this).text())
    // checkCheck += 1
    // console.log(checkCheck)
  })

  $('#cell-one').on('click', function (event) {
    console.log('clicked', $(this).text())
  })
})
