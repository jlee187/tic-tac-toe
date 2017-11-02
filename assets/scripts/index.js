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
// let checkCheck = 0 // see if the click event is registering properly... can't increment appropriately

  let whoseTurn = 1
  console.log(whoseTurn)

  $('#cell-zero').on('submit', clickEvents.onGetBooks) // click function to register click with API... must record in JS too

  let choice = 0

  $('#cell-zero').on('click', function (event) {
    whoseTurn += 1 // scope issue... child can access parent but parent cannot access local
    choice = ($(this).val()) + 1
    return choice
    // console.log(whoseTurn)
    // checkCheck += 1
    // console.log(checkCheck)
  })

  $('#cell-one').on('click', function (event) {
    $('#cell-one').text(function () {
      if (whoseTurn % 2 === 0) {
        return 'X'
      } else {
        return 'O'
      }
    })
  })

  $('#cell-two').on('click', function (event) {
    $('#cell-two').text(function () {
      if (whoseTurn % 2 === 0) {
        return 'X'
      } else {
        return 'O'
      }
    })
  })

  $('#cell-three').on('click', function (event) {
    $('#cell-three').text(function () {
      if (whoseTurn % 2 === 0) {
        return 'X'
      } else {
        return 'O'
      }
    })
  })

  $('#cell-four').on('click', function (event) {
    $('#cell-four').text(function () {
      if (whoseTurn % 2 === 0) {
        return 'X'
      } else {
        return 'O'
      }
    })
  })

  $('#cell-five').on('click', function (event) {
    $('#cell-five').text(function () {
      if (whoseTurn % 2 === 0) {
        return 'X'
      } else {
        return 'O'
      }
    })
  })
})

// Attempted to interate through click events... probably going to have to have 9 event handlers
// $('.board').click(function (event) {
//   event.stopPropagation()
//   console.log(10)
// })
//

// $('#cell-').on('click', function (event) {
//   console.log('clicked', $(this).text())
// }).each(function () {
//   console.log('clicked', $(this).text())
// })
