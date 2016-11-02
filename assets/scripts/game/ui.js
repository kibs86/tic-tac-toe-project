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

const gameSumStatsSuccess = (data) => {
  app.sumData = data.games;
  let totalGamesPlayed = data.games.length;
  $('.sum-tot-games').text(totalGamesPlayed);
  let openGames = 0;
  let compGames = 0;
  let playX = 0;
  let playO = 0;
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      compGames++;
    } else {
      openGames++;
    }
    if (data.games[i].player_x.email === globalJS.globalVars.playerEmail) {
      playX++;
    } else if (data.games[i].player_o.email === globalJS.globalVars.playerEmail) {
      playO++;
    }
  }
  $('.sum-tot-games-comp').text(compGames);
  $('.sum-tot-games-open').text(openGames);
  $('.sum-tot-games-px').text(playX);
  $('.sum-tot-games-po').text(playO);

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
  gameSumStatsSuccess,
  joinGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameStatsError,
};
