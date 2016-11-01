'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

$(()=>{
  authEvents.addHandlers();

  gameEvents.addHandlers();

  $(".reset").click(function() {
        $("input").val("");
    });
});
