'use strict';

const createGameSuccess = (data) => {
  $('.player1-message').text("Successfully created game");
  console.log(data);
};

const failure = (error) => {
  $('.player1-message').text("Failed to create game");
  console.error(error);
};

module.exports = {
  createGameSuccess,
  failure,
};
