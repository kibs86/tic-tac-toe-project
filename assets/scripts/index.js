'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js');

$(()=>{
  // event handlers for login API
  authEvents.addHandlers();

  // event handlers for game API
  gameEvents.addGameHandlers();

  // clear out form data if user closes form instead of hitting submit
  $(".reset").click(function() {
        $("input").val("");
    });
});
