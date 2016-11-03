'use strict';

const authEvents = require('./auth/events.js');
const gameAPIEvents = require('./game/events.js');
const gameBoard = require('./game.js');
//const gameStats = require('./game-stats.js');

$(()=>{
  // event handlers for login API
  authEvents.addHandlers();

  // event handlers for game API
  gameAPIEvents.addGameAPIHandlers();

  // event handlers and game logic for tic-tac-toe board
  gameBoard.addBoardHandlers();

  // clear out form data if user closes form instead of hitting submit
  $(".reset, .close").click(function() {
        $("input").val("");
        $(".get-stats-output").text("");
    });

  // disable board click events and new game by default
  // board clicks will be enabled after game has been created and joined
  // new game will be enabled after a game has ended
  $('.board-item').css("pointer-events", "none");
  $('.new-game').css("pointer-events", "none");
});
