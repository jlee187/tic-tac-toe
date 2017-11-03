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

// const clickEvents = require('./events')

// On document ready

$(() => {
  const square = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  let whoseTurn = 2

  square.forEach(function (i) {
    $('#cell-' + i).on('click', function () {
      // console.log('you clicked slider controler ' + i + '!')
      correctArr(i)
    })
  })

  // <<< working code that registers clicks and appends into an array!!!!!!!!!!!!! Adds to X and O arrays

  const correctArr = function (selection) {
    for (let i = 0; i < 9; i++) {
      const allSelection = xGameBoard.concat(oGameBoard)
      if (allSelection.indexOf(selection) === -1) {
        console.log(allSelection)
        if (whoseTurn % 2 === 0) {
          xSelection(selection)
          console.log('xGameBoard :' + xGameBoard)
        } else {
          oSelection(selection)
          console.log('oGameBoard :' + oGameBoard)
        }
      }
    }
  }

  const xGameBoard = []
  const xSelection = function (selection) {
    for (let i = 0; i < 9; i++) {
      if (xGameBoard.indexOf(selection) === -1) {
        xGameBoard.push(selection)
        addX(selection)
      }
    }
    whoseTurn += 1
  }

  const oGameBoard = []
  const oSelection = function (selection) {
    for (let i = 0; i < 9; i++) {
      if (oGameBoard.indexOf(selection) === -1) {
        oGameBoard.push(selection)
        addO(selection)
      }
    }
    whoseTurn += 1
  }

  // Add X and O for respective cell clicked (net new add)

  const addX = function (i) {
    $('#cell-' + i).text('X')
  }

  const addO = function (i) {
    $('#cell-' + i).text('O')
  }
})
