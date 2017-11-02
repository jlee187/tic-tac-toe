'use strict'

// define users

const playerx = 'x'
const playero = 'o'

// array that records moves
const xmoves = []
const omoves = []

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
