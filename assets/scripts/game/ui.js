'use strict';

const globalJS = require('../global.js');
const app = require('../app.js');

// When game is created successfully, store the game data for later use
// Let user know that game was created
// Could display the game ID as well, but took that out for now
const createGameSuccess = (data) => {
  app.game = data.game;
  $('.player1-message').text("Successfully created");
  //$('.player1-game').text("Game ID: " + app.game.id);
  globalJS.globalVars.createGameSuccess = true;
};

// When game is successfully joined, let player know they've joined
// Allow board items to be clicked
const joinGameSuccess = () => {
  $('.player2-message').text("Successfully joined");
  //$('.player2-game').text("Game ID: " + app.game.id);
  $('.board-item').css("pointer-events", "auto");
};

// When game is successfully updated
const updateGameSuccess = () => {
  console.log("The game was successfully updated");
};

// When user retrieves all of their game data, display it in appropriate modal
const gameIndexSuccess = (data) => {
  let newData = JSON.stringify(data.games, null, '\t');
  $('.get-stats-output').html(newData);
};

// When user retrieves a single game, dispay it in appropriate model
const gameShowSuccess = (data) => {
  let newData = JSON.stringify(data.game, null, '\t');
  $('.get-stats-output').html(newData);
};

// When user clicks the button to view a summary of game data
// Get index, and store it in app.sumData
// Parse through app.sumData to calculate info for summary player2-message
// Plug those values into appropriate fields
const gameSumStatsSuccess = (data) => {
  app.sumData = data.games;

  // get total games played by the user
  let totalGamesPlayed = data.games.length;
  $('.sum-tot-games').text(totalGamesPlayed);

  // get the total open games, completed games, games played as player x
  // and games played as player o
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

// If the create game fails, let the user know that it failed
const createGameFailure = () => {
  $('.player1-message').text("Failed to create game");
};

// If the join game fails, let the user know that it failed
const joinGameFailure = () => {
  $('.player2-message').text("Failed to join game");
};

// If the game update fails, let the player know there was an issue
const updateGameFailure = () => {
  $('.player1-message').text("Sorry, there is an issue with the game.");
};

// If the game stats retrieval isn't successful, let the user know
const gameStatsFailure = () => {
  $('.get-stats-output, .sum-tot-games-comp').text("Sorry, there was an issue retreiving game statistics.");
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
  gameStatsFailure,
};
