'use strict';

const config = require('../config.js');
const store = require('../store.js');

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
    url: config.host + '/games/' + globalJS.globalVars.newestGameID,
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
