'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

$(()=>{
  authEvents.addHandlers();

  // enable game to be played once
  gameEvents.addGameHandlers();

  $(".reset").click(function() {
        $("input").val("");
    });
});
