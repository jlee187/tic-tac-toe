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

// $(() => {
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
  if (endGame(xGameBoard) === 'won' || endGame(oGameBoard) === 'won') {
    return
  }
  for (let i = 0; i < 9; i++) {
    const allSelection = xGameBoard.concat(oGameBoard)
    if (allSelection.indexOf(selection) === -1) {
      console.log(allSelection)
      if (whoseTurn % 2 === 0) {
        xSelection(selection, 'X')
        console.log('xGameBoard :' + xGameBoard)
        endGame(xGameBoard, 'X')
      } else {
        oSelection(selection)
        console.log('oGameBoard :' + oGameBoard)
        endGame(oGameBoard, 'O')
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

<<<<<<< HEAD
const winningPairs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 3, 8],
  [0, 4, 8], [2, 4, 6]]

// Unclear
//
// const endGame = function () {
//   for (let i = 0; i < xGameBoard.length; i++) {
//     if (xGameboard[i] = winningPairs[i][1] &&
//         xGameboard[i] = winningPairs[i][2] &&
//         xGameboard[i] = winningPairs[i][3]
//   }
// }
// })

const clickEvents = require('./events')

// On document ready
$(() => {
  $('#log-in').on('submit', clickEvents.onSignUp)
})
=======
const endGame = function (boardChoice, turn) {
  if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(2) !== -1)) {
    console.log(turn + ' wins')
    return 'won'
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    console.log(turn + ' wins')
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    console.log(turn + ' wins')
  } else if ((boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(5) !== -1)) {
    console.log(turn + ' wins')
  } else if ((boardChoice.indexOf(6) !== -1) && (boardChoice.indexOf(7) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    console.log(turn + ' wins')
  } else if ((boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(7) !== -1)) {
    console.log(turn + ' wins')
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    console.log(turn + ' wins')
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    console.log(turn + ' wins')
  }
}
// })
>>>>>>> javascript.3

module.exports =
  xGameBoard,
  oGameBoard
