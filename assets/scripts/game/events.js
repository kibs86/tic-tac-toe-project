'use strict';

const gameApi = require('./api');
const gameUi = require('./ui');

// Can only create game if you've logged in
const onCreateGame = function () {
  if ($('.logged-in-as').text() !== "") {
    let data = '';
    gameApi.createGame(data)
      .then(gameUi.createGameSuccess)
      .catch(gameUi.failure);
  } else {
    console.log('you need to sign in first');
  }
};

// const onTileClick = function () {
//   console.log('you clicked a tile');
// };

const addGameHandlers = () => {
  $('.create-game').on('click', onCreateGame);
  //$('.b0').on('click', onTileClick);
};

module.exports = {
  addGameHandlers,
};
