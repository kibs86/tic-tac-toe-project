'use strict';

const gameApi = require('./api');
const gameUi = require('./ui');

const globalJS = require('../global.js');

// A player can only create a game if they've logged in
const onCreateGame = function () {
  if (globalJS.globalVars.playerLogin === true) {
    let data = '';
    gameApi.createGame(data)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.createGameFailure);
  } else {
    $('.player1-message').text("You need to sign in first.");
  }
};

// A player can only join the game if it's already been created
const onJoinGame = function () {
  if ((globalJS.globalVars.playerLogin === true) && (globalJS.globalVars.createGameSuccess === true)) {
    let data = '';
    gameApi.joinGame(data)
      .then(gameUi.joinGameSuccess)
      .catch(gameUi.joinGameFailure);
  } else {
    $('.player2-message').text("A game needs to be created first.");
  }
};

// Update game state.  Called from games.js
const updateGameState = function (data) {
  gameApi.updateGame(data)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameFailure);
};

// Provide game data to the user making the request
// If they provide a game ID, give them just that game
// Otherwise, give them a list of all their games
const onGetStats = function (event) {
  event.preventDefault();
  let gameId = $('#get-stats').val();
    if (gameId.length === 0){
      gameApi.gameIndex()
        .then(gameUi.gameIndexSuccess)
        .catch(gameUi.gameStatsError);
    } else {
      gameApi.gameShow(gameId)
        .then(gameUi.gameShowSuccess)
        .catch(gameUi.gameStatsError);
    }
};

// Provide some summary statistics to user upon request
const onGetSumStats = function(event) {
  event.preventDefault();
  gameApi.gameIndex()
    .then(gameUi.gameSumStatsSuccess)
    .catch(gameUi.gameStatsFailure);
};

const addGameAPIHandlers = () => {
  $('.create-game').on('click', onCreateGame);
  $('.join-game').on('click', onJoinGame);
  $('.get-stats-form').on('submit', onGetStats);
  $('.get-sum-stats-form').on('submit', onGetSumStats);
};

module.exports = {
  addGameAPIHandlers,
  updateGameState,
  onCreateGame,
};
