'use strict';

// create an object to store items I'm using as global variables
// throw debug statement in right after New Game handler to check values
// of below variables and figure out which ones to reset
const globalVars = {
  playerLogin: false,
  createGameSuccess: false,
  activePlayer: 'x',
  gameOver: 'false',
  gameWinner: '',
  turnCount: 0,
  playerEmail: '',
  p1DefMess: 'Please login and <br> click create game!',
  p2DefMess: 'Login and click Join <br> or click Play Now'
};

module.exports = {
  globalVars,
};
