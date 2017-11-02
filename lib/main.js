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
// let playerx = 1
// = function(cell) {
//   gameBoard.push(cell)
//
// let chooseCell = function (cell) {
//   for (let i = 0; i < 9; i++) {
//     if (cell === )
//   }
// }
