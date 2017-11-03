'use strict'

// define users - may not need

const playerx = 'x'
const playero = 'o'

// array that records moves
const xmoves = []
const omoves = []
const gameBoard =
['', '', '',
  '', '', '',
  '', '', '']
const gameBoardFilled =
[0, 1, 2,
  3, 4, 5,
  6, 7, 8]

// <<< whose turn is it? start at 1 (x=odd; o=even)
const counter = 1

const whoseTurn = function () {
  if (counter % 2 === 0) {
    console.log("Player O's move!")
  } else {
    console.log("Player X's move!")
  }
}
// >>> need to call whoseTurn and will return whose move... can overlay player images to represent turns?

// <<< Record moves. Every time cell clicked, push the coordinate to the X array

// player x chooses cell 1

// let choseSomething = function(cell) {
//   for (let i = 1; i < gameBoard.length; i++) {
//     if (cell === gameBoard[i]) {
//       console.log("Already exists")
//     } else {
//     gameBoard.push(cell)}}}

// <<< add new cell choices to the array if they haven't been chosen before

const gameBoard =
['', '', '',
  '', '', '',
  '', '', '']

// <<< push X decisions and O decisions into their own array based on whose turn it is
// WORKS!!!!

let whoseTurn = 2

const gameBoard = []



const correctArr = function (selection) {
    if (whoseTurn % 2 === 0) {
    xSelection(selection)
  } else {
    oSelection(selection)
  }
}

const xGameBoard = []
const xSelection = function (selection) {
  for (i = 0; i < 8; i++) {
    xGameBoard.indexOf(selection) === -1 ? xGameBoard.push(selection) : ""
  }
  whoseTurn += 1
}

const oGameBoard = []
const oSelection = function (selection) {
  for (i = 0; i < 8; i++) {
    oGameBoard.indexOf(selection) === -1 ? oGameBoard.push(selection) : ""
  }
  whoseTurn += 1
}

// >>> have to compare cell selection against overall gameboard

// <<< winning options

const winningPairs = [[0,1,2],[3,4,5],[6,7,8],
