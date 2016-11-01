'use strict';

const authEvents = require('./auth/events.js');
const gameAPIEvents = require('./game/events.js');
const gameBoard = require('./game.js');

$(()=>{
  // event handlers for login API
  authEvents.addHandlers();

  // event handlers for game API
  gameAPIEvents.addGameAPIHandlers();

  // event handlers and game logic for tic-tac-toe board
  gameBoard.addBoardHandlers();

  // clear out form data if user closes form instead of hitting submit
  $(".reset").click(function() {
        $("input").val("");
    });
});
