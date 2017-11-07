'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const store = require('./store')

$(() => {
  setAPIOrigin(location, config)
  events.addHandlers()
  $('.board').hide()
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
let over = false
let xscore = 0
let oscore = 0

if (over === false) {
  square.forEach(function (i) {
    $('#cell-' + i).on('click', function () {
      runProgram(i)
    })
  })
} else {
  store.game.over = true
  console.log('new game needed')
}
// <<< starts program

const runProgram = function (selection) {
  if (over === true) {
    store.game.over = true
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
const gameBoardFull = ['', '', '', '', '', '', '', '', '']
// const gameBoardObj = ['', '', '', '', '', '', '', '', '']
const xGameBoard = []
const xSelection = function (selection) {
  for (let j = 0; j < 9; j++) {
    if (xGameBoard.indexOf(selection) === -1) {
      // gameBoardEmpty.splice(selection, 1)
      gameBoardFull.splice(selection, 1, 'X')
      store.game.cells.index = selection
      store.game.cells.value = 'X'
      // gameBoardObj.splice(selection, 1, {i: 'X'})
      console.log(gameBoardFull)
      // console.log(gameBoardObj)
      xGameBoard.push(selection)
      addX(selection)
      // addAllXs(selection)
    }
  }
  whoseTurn += 1
  const allSelection = xGameBoard.concat(oGameBoard)
  if (allSelection.length === 9) {
    store.game.over = true
    over = true
    return $('#game-status').html("It's a tie!")
  }
  console.log('allSelection: ' + allSelection)
}

const oGameBoard = []
const oSelection = function (selection) {
  for (let k = 0; k < 9; k++) {
    if (oGameBoard.indexOf(selection) === -1) {
      // gameBoardEmpty.splice(selection, 1)
      gameBoardFull.splice(selection, 1, 'O')
      store.game.cells.index = selection
      store.game.cells.value = 'O'
      // gameBoardObj.splice(selection, 1, {i: 'O'})
      console.log(gameBoardFull)
      // console.log(gameBoardObj)
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
  console.log('allSelection: ' + allSelection)
}

// Add X and O for respective cell clicked (net new add)

const addX = function (i) {
  $('#cell-' + i).html('X')
}

const addO = function (i) {
  $('#cell-' + i).html('O')
}

const endGameX = function (boardChoice, turn) {
  console.log(store.game.over)
  if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(2) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(5) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(6) !== -1) && (boardChoice.indexOf(7) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(7) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(5) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('X won!')
    xscore++
    $('#x-score').html(xscore)
    over = true
    store.game.over = true
  }
}

const endGameO = function (boardChoice, turn) {
  if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(2) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(0) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(3) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(5) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(6) !== -1) && (boardChoice.indexOf(7) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(1) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(7) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(5) !== -1) && (boardChoice.indexOf(8) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  } else if ((boardChoice.indexOf(2) !== -1) && (boardChoice.indexOf(4) !== -1) && (boardChoice.indexOf(6) !== -1)) {
    // console.log(turn + ' wins')
    $('#game-status').html('O won!')
    oscore++
    $('#o-score').html(oscore)
    over = true
    store.game.over = true
  }
}

$('#reset').on('click', function () {
  const tds = document.getElementsByTagName('td')
  $('#game-status').html('')
  for (let i = 0; i < 9; i++) {
    gameBoardFull[i] = ''
  }
  // for (let i = 0; i < oGameBoard.length; i++) {
  //   oGameBoard[i] = ''
  // }
  // for (let i = 0; i < xGameBoard.length; i++) {
  //   xGameBoard[i] = ''
  // }
  oGameBoard.splice(0, oGameBoard.length)
  xGameBoard.splice(0, xGameBoard.length)
  console.log(gameBoardFull)
  over = false
  store.game.over = false
  for (let i = 0; i < tds.length; i++) {
    tds[i].innerHTML = ''
  }
  whoseTurn = 2
  // console.log(xGameBoard)
  // console.log(oGameBoard)
  // console.log(xGameBoard.concat(oGameBoard))
})

module.exports = {
  xGameBoard,
  oGameBoard,
  gameBoardFull
}
