'use strict';

const gameApi = require('./api');
const gameUi = require('./ui');

const globalJS = require('../global.js');

// Can only create game if you've logged in
const onCreateGame = function () {
  if (globalJS.globalVars.playerLogin === true) {
    let data = '';
    gameApi.createGame(data)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.failure);
  } else {
    console.log('you need to sign in first');
  }
};

// Can only join game if one has already been created
const onJoinGame = function () {
  if ((globalJS.globalVars.playerLogin === true) && (globalJS.globalVars.createGameSuccess === true)) {
    let data = '';
    gameApi.joinGame(data)
      .then(gameUi.joinGameSuccess)
      .catch(gameUi.failure);
  } else {
    console.log('player 1 needs to login and create a game first');
  }
};

const addGameAPIHandlers = () => {
  $('.create-game').on('click', onCreateGame);
  $('.join-game').on('click', onJoinGame);
};

module.exports = {
  addGameAPIHandlers,
};
