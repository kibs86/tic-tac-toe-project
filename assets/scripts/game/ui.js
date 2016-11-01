'use strict';

const createGameSuccess = (data) => {
  $('.player1-message').text("Successfully created");
  $('.player1-game').text(data.game.id);
  console.log(data);
};

const joinGameSuccess = (data) => {
  $('.player2-message').text("Successfully joined");
  $('.player2-game').text(data.game.id);
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

module.exports = {
  createGameSuccess,
  createGameFailure,
  joinGameSuccess,
  joinGameFailure,
};
