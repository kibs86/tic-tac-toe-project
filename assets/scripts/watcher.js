'use strict';

const resourceWatcher = require('./resource-watcher-0.1.0.js');
const config = require('../config.js');
const store = require('../store.js');

let gameWatcher = resourceWatcher(config.host + ':id/watch', {
      Authorization: 'Token token=' + store.token
});

module.exports = {
  gameWatcher,
};
