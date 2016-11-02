'use strict';

//const globalJS = require('./global.js');
//const gameEvents = require('./game/events.js');

const onGetGameStats = function() {
  //gameEvents(get)
};

const addGameStatHandlers = () => {
  $('#get-stats').on('click', onGetGameStats);
};

module.exports = {
  addGameStatHandlers,
};
