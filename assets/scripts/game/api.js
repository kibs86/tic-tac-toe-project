'use strict';

const config = require('../config.js');
const store = require('../store.js');

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
    url: config.host + '/games/' + $('.player1-game').text(),
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

  module.exports = {
    createGame,
    joinGame,
  };
