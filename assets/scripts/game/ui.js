'use strict';

const globalJS = require('../global.js');
const app = require('../app.js');

const createGameSuccess = (data) => {
  app.game = data.game;
  $('.player1-message').text("Successfully created");
  $('.player1-game').text("Game ID: " + app.game.id);
  globalJS.globalVars.createGameSuccess = true;
  console.log(data);
};

const joinGameSuccess = (data) => {
  $('.player2-message').text("Successfully joined");
  $('.player2-game').text("Game ID: " + app.game.id);
  $('.board-item').css("pointer-events", "auto");
  console.log(data);
};

const updateGameSuccess = (data) => {
  console.log("The game was successfully updated");
  console.log(data);
};

const gameIndexSuccess = (data) => {
  let newData = JSON.stringify(data.games, null, '\t');
  console.log(newData);
  $('.get-stats-output').html(newData);
};

const gameShowSuccess = (data) => {
  let newData = JSON.stringify(data.game, null, '\t');
  console.log(newData);
  $('.get-stats-output').html(newData);
};

const createGameFailure = (error) => {
  $('.player1-message').text("Failed to create game");
  console.error(error);
};

const joinGameFailure = (error) => {
  $('.player2-message').text("Failed to join game");
  console.error(error);
};

const updateGameFailure = (error) => {
  console.log("update game failed");
  console.error(error);
};

const gameStatsError = (error) => {
  console.error(error);
};


module.exports = {
  createGameSuccess,
  createGameFailure,
  joinGameSuccess,
  gameIndexSuccess,
  gameShowSuccess,
  joinGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameStatsError,
};
