'use strict';

const config = require('../config.js');
const store = require('../store.js');
const app = require('../app.js');

//const globalJS = require('../global.js');

// Ajax request to create a new game
const createGame = (data) =>
  $.ajax({
    url: config.host + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

// Ajax request to join the current game
const joinGame = (data) =>
  $.ajax({
    url: config.host + '/games/' + app.game.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

// Ajax request to update the game state
const updateGame = (data) =>
$.ajax({
  url: config.host + '/games/' + app.game.id,
  method: 'PATCH',
  data,
  headers: {
    Authorization: 'Token token=' + store.user.token,
  },
});

// Ajax request to get a full listing of all user's games
const gameIndex = function () {
  return $.ajax({
    url: config.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

// Ajax request to get the data for just a single game requested
const gameShow = function (gameId) {
  return $.ajax({
    url: config.host + '/games/' + gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

module.exports = {
  createGame,
  joinGame,
  updateGame,
  gameIndex,
  gameShow,
};
