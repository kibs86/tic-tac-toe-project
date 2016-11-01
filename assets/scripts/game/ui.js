'use strict';

const globalJS = require('../global.js');

const createGameSuccess = (data) => {
  $('.player1-message').text("Successfully created");
  $('.player1-game').text("Game ID: " + data.game.id);
  globalJS.globalVars.createGameSuccess = true;
  globalJS.globalVars.newestGameID = data.game.id;
  console.log(data);
};

const joinGameSuccess = (data) => {
  $('.player2-message').text("Successfully joined");
  $('.player2-game').text("Game ID: " + data.game.id);
  console.log(data);
};

const createGameFailure = (error) => {
  $('.player1-message').text("Failed to create game");
  console.error(error);
};

const joinGameFailure = (error) => {
  $('.player2-message').text("Failed to join game");
  console.error(error);
};

// new game needs to do the following
// set createGameSuccess to false
// create another new game

module.exports = {
  createGameSuccess,
  createGameFailure,
  joinGameSuccess,
  joinGameFailure,
};
