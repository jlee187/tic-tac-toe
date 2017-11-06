'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
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
    // addAllXs(i)
    // console.log(board)
  })
})

// <<< working code that registers clicks and appends into an array!!!!!!!!!!!!! Adds to X and O arrays

const correctArr = function (selection) {
  if (endGameX(xGameBoard) === 'won' || endGameO(oGameBoard) === 'won') {
    return
  }
  for (let i = 0; i < 9; i++) {
    const allSelection = xGameBoard.concat(oGameBoard)
    if (allSelection.indexOf(selection) === -1) {
      // console.log(allSelection)
      if (whoseTurn % 2 === 0) {
        xSelection(selection, 'X')
        console.log('xGameBoard :' + xGameBoard)
        endGameX(xGameBoard, 'X')
      } else {
        oSelection(selection)
        console.log('oGameBoard :' + oGameBoard)
        endGameO(oGameBoard, 'O')
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
      // addAllXs(selection)
    }
  }
  whoseTurn += 1
  const allSelection = xGameBoard.concat(oGameBoard)
  if (allSelection.length === 9) {
    return $('#game-status').html("It's a tie!")
  }
  console.log(allSelection)
}

const oGameBoard = []
const oSelection = function (selection) {
  for (let i = 0; i < 9; i++) {
    if (oGameBoard.indexOf(selection) === -1) {
      oGameBoard.push(selection)
      addO(selection)
      // addAllOs(selection)
    }
  }
  whoseTurn += 1
  const allSelection = xGameBoard.concat(oGameBoard)
  if (allSelection.length === 9) {
    return $('#game-status').html("It's a tie!")
  }
  console.log(allSelection)
}

// Add X and O for respective cell clicked (net new add)

const addX = function (i) {
  $('#cell-' + i).html('X')
}

// const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//
// const addAllXs = function (selection) {
//   board[selection].replace(' ', 'X')
// }
// const addAllOs = function (selection) {
//   board[selection].replace(' ', 'O')
// }

const addO = function (i) {
  $('#cell-' + i).html('O')
}

// button.addEventListener("click", function () {
//   let tds = document.getElementsByTagName('td');
//   for (let i = 0; i < tds.length; i++) {
//     tds[i].innerHTML = ''
//   }
// })

const endGameX = function (boardChoice, turn) {
  if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(2) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(5) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(6) !== -1) && (boardChoice.indexOf(7) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(7) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(5) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    return 'won'
  }
}

const endGameO = function (boardChoice, turn) {
  if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(2) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(5) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(6) !== -1) && (boardChoice.indexOf(7) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(7) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(5) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    return 'won'
  }
}
// })

module.exports =
  xGameBoard,
  oGameBoard
