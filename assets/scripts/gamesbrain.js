'use strict'

const isGameLoser = function (crossRoadBoard) {
  // is winning conditions were present, game is over
  if (isGameWinner(crossRoadBoard) === true) {
    return true
    // If no winner, but the game board if full it's a tie -- still over
  } else if (isGameWinner(crossRoadBoard) === false && crossRoadBoard.filter(x => x === '').length === 0) {
    return true
  } else {
    return false
  }
}

const isGameWinner = function (crossRoadBoard) {
  if (crossRoadBoard[0] === crossRoadBoard[1] && crossRoadBoard[0] === crossRoadBoard[2] && crossRoadBoard[0] !== '') {
    return true
  } else if (crossRoadBoard[3] === crossRoadBoard[4] && crossRoadBoard[3] === crossRoadBoard[5] && crossRoadBoard[3] !== '') {
    return true
  } else if (crossRoadBoard[6] === crossRoadBoard[7] && crossRoadBoard[6] === crossRoadBoard[8] && crossRoadBoard[6] !== '') {
    return true
  } else if (crossRoadBoard[0] === crossRoadBoard[3] && crossRoadBoard[0] === crossRoadBoard[6] && crossRoadBoard[0] !== '') {
    return true
  } else if (crossRoadBoard[1] === crossRoadBoard[4] && crossRoadBoard[1] === crossRoadBoard[7] && crossRoadBoard[1] !== '') {
    return true
  } else if (crossRoadBoard[2] === crossRoadBoard[5] && crossRoadBoard[2] === crossRoadBoard[8] && crossRoadBoard[2] !== '') {
    return true
  } else if (crossRoadBoard[0] === crossRoadBoard[4] && crossRoadBoard[0] === crossRoadBoard[8] && crossRoadBoard[0] !== '') {
    return true
  } else if (crossRoadBoard[2] === crossRoadBoard[4] && crossRoadBoard[2] === crossRoadBoard[6] && crossRoadBoard[2] !== '') {
    return true
  } else {
    return false
  }
}

// const isGameWinner = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

module.exports = {
  isGameLoser,
  isGameWinner
}
