'use strict';

// create an object to store items I'm using as global variables
// throw debug statement in right after New Game handler to check values
// of below variables and figure out which ones to reset
const globalVars = {
  playerLogin: false,
  createGameSuccess: false,
  newestGameID: 0,
  activePlayer: 'x',
  gameOver: 'false',
  gameWinner: '',
  turnCount: 0,
  gameData: {}
};

module.exports = {
  globalVars,
};
