'use strict';

const config = require('../config.js');
const store = require('../store.js');
const app = require('../app.js');

const globalJS = require('../global.js');

const createGame = (data) =>
  $.ajax({
    url: config.host + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const joinGame = (data) =>
  $.ajax({
    url: config.host + '/games/' + app.game.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const updateGame = (data) =>
$.ajax({
  url: config.host + '/games/' + globalJS.globalVars.newestGameID,
  method: 'PATCH',
  data,
  headers: {
    Authorization: 'Token token=' + store.user.token,
  },
});

const gameIndex = function () {
  return $.ajax({
    url: config.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

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
