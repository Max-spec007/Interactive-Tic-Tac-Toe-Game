'use strict'

const tieGame = function (crossRoadBoard) {
  if (isGameWinner(crossRoadBoard) === false && crossRoadBoard.filter(x => x === '').length === 0) {
    return true
  } else {
    return false
  }
}
//
const isGameWinner = function (crossRoadBoard) {
  if (crossRoadBoard[0] === crossRoadBoard[1] && crossRoadBoard[1] === crossRoadBoard[2] && crossRoadBoard[0] !== '') {
    return true
  } else if (crossRoadBoard[3] === crossRoadBoard[4] && crossRoadBoard[4] === crossRoadBoard[5] && crossRoadBoard[3] !== '') {
    return true
  } else if (crossRoadBoard[6] === crossRoadBoard[7] && crossRoadBoard[7] === crossRoadBoard[8] && crossRoadBoard[6] !== '') {
    return true
  } else if (crossRoadBoard[0] === crossRoadBoard[3] && crossRoadBoard[3] === crossRoadBoard[6] && crossRoadBoard[0] !== '') {
    return true
  } else if (crossRoadBoard[1] === crossRoadBoard[4] && crossRoadBoard[4] === crossRoadBoard[7] && crossRoadBoard[1] !== '') {
    return true
  } else if (crossRoadBoard[2] === crossRoadBoard[5] && crossRoadBoard[5] === crossRoadBoard[8] && crossRoadBoard[2] !== '') {
    return true
  } else if (crossRoadBoard[0] === crossRoadBoard[4] && crossRoadBoard[4] === crossRoadBoard[8] && crossRoadBoard[0] !== '') {
    return true
  } else if (crossRoadBoard[2] === crossRoadBoard[4] && crossRoadBoard[4] === crossRoadBoard[6] && crossRoadBoard[2] !== '') {
    return true
  } else {
    return false
  }
}

module.exports = {
  isGameWinner,
  tieGame
}
