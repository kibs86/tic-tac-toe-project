'use strict';

// globalJS contains a global object to store things I need to reference across
// files for my game logic
const globalJS = require('./global.js');
const gameEvents = require('./game/events.js');

// create array to store board items as they're clicked
let tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Switch the active player
// Called at end of tile click function
const switchPlayer = function () {
  if (globalJS.globalVars.activePlayer === 'x') {
    globalJS.globalVars.activePlayer = 'o';
  } else {
    globalJS.globalVars.activePlayer = 'x';
  }
};

// Check for horizontal wins
// Called within tile click function
const checkRowWins = function(tileArray) {
  if ((tileArray[0] === tileArray[1]) && (tileArray[0] === tileArray[2])) {
    globalJS.globalVars.gameWinner = tileArray[0];
    return true;
  } else if ((tileArray[3] === tileArray[4]) && (tileArray[3] === tileArray[5])) {
      globalJS.globalVars.gameWinner = tileArray[3];
      return true;
    } else if ((tileArray[6] === tileArray[7]) && (tileArray[6] === tileArray[8])) {
        globalJS.globalVars.gameWinner = tileArray[6];
        return true;
    } else {
      return false;
    }
};

// Check for vertical wins
// Called within tile click function
const checkColWins = function(tileArray) {
  if ((tileArray[0] === tileArray[3]) && (tileArray[0] === tileArray[6])) {
    globalJS.globalVars.gameWinner = tileArray[0];
    return true;
  } else if ((tileArray[1] === tileArray[4]) && (tileArray[1] === tileArray[7])) {
      globalJS.globalVars.gameWinner = tileArray[1];
      return true;
    } else if ((tileArray[2] === tileArray[5]) && (tileArray[2] === tileArray[8])) {
        globalJS.globalVars.gameWinner = tileArray[2];
        return true;
    } else {
      return false;
    }
};

// Check for diagonal wins
// Called within tile click function
const checkDiagWins = function(tileArray) {
  if ((tileArray[0] === tileArray[4]) && (tileArray[0] === tileArray[8])) {
    globalJS.globalVars.gameWinner = tileArray[0];
    return true;
  } else if ((tileArray[2] === tileArray[4]) && (tileArray[2] === tileArray[6])) {
      globalJS.globalVars.gameWinner = tileArray[2];
      return true;
    } else {
      return false;
    }
};

// Set owner of tile using data attributes
// Data attributes pre-defined in theme.scss file to update background image
// Push owner of tile into correct spot within tileArray
// Called within tile click function
const setOwner = function(tileID, tileIndex) {
  if (globalJS.globalVars.activePlayer === 'x') {
    $(tileID).attr('data-owner', 'x');
    tileArray[tileIndex] = 'x';
  } else {
    $(tileID).attr('data-owner', 'o');
    tileArray[tileIndex] = 'o';
  }

  return tileArray;

};

// Perform a few activities after game has ended (via winner or tie)
// Called within tile click function
const gameOver = function () {
  // disable all click board item handlers
  $('.board-item').css("pointer-events", "none");

  // enable new game button
  $('.new-game').css("pointer-events", "auto");

  // update game over globalVar
  globalJS.globalVars.gameOver = "true";
};

// Main game logic
// Makes calls up to above functions for some parts
const onTileClick = function () {

  // Get the ID of the tile that was clicked
  // Pull the correct array index off of the ID
  let tile = $(this).attr('id');
  let tileID = '#' + tile;
  let tileIndex = tile[tile.length - 1];

  // Increment turn count
  // Used for display purposes when somebody wins (ex. you won in x turns)
  // Used for checking a tie
  globalJS.globalVars.turnCount++;

  // Change background of tile and store owner
  tileArray = setOwner(tileID, tileIndex);

  // Check for a winner
  if (checkColWins(tileArray) || checkRowWins(tileArray) || checkDiagWins(tileArray)) {
    if (globalJS.globalVars.gameWinner === 'x') {
      // print message to player1's side
      $('.player1-message').text("YOU WON IN " + globalJS.globalVars.turnCount + " TURNS!");
    } else {
      // print message to player2's side
      $('.player2-message').text("YOU WON IN " + globalJS.globalVars.turnCount + " TURNS!");
    }

    // If there's a winner, run the gameOver function
    gameOver();

    // Check for a tie (no winners, but turnCount is at max)
  } else if ((globalJS.globalVars.gameWinner === '') && (globalJS.globalVars.turnCount === 9)) {
    // Print tie message to both sides
    $('.player1-message').text("IT'S A TIE!");
    $('.player2-message').text("IT'S A TIE!");

    gameOver();

  } else {
    // If the game isn't over
    // Disable handler for just the tile that was clicked
    $(tileID).css("pointer-events", "none");

    // Update active player
    switchPlayer();
  }

  // Define data and pass it through to my game API to update game state
  let data = {
    game: {
      cell: {
        index: tileIndex,
        value: tileArray[tileIndex]
      },
      over: globalJS.globalVars.gameOver
    }
  };

  gameEvents.updateGameState(data);
};

// Clear board button will reset everything, but won't start a new game
const onClearBoard = function () {
  // Reset global variables
  // Don't need to reset player login since they'll still be logged in
  globalJS.globalVars.createGameSuccess = false;
  globalJS.globalVars.newestGameID = 0;
  globalJS.globalVars.activePlayer = 'x';
  globalJS.globalVars.gameOver = 'false';
  globalJS.globalVars.gameWinner = '';
  globalJS.globalVars.turnCount = 0;

  // Reset player messages
  $('.player1-message').html("PLEASE LOGIN AND <br> CLICK CREATE GAME TO PLAY!");
  $('.player2-message').text("PLEASE JOIN THE GAME TO PLAY!");

  // Reset game array
  tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // Remove data-owner attributes from board items
  $('[data-owner]').removeAttr('data-owner');

  // Disable new game click event
  $('.new-game').css("pointer-events", "none");
};

// New Game button resets everything like the clear button does, but also creates a new game
const onNewGameClick = function () {
  onClearBoard();
  gameEvents.onCreateGame();
};

// Separate click handlers for each board item (tile)
const addBoardHandlers = () => {
  $('#b0').on('click', onTileClick);
  $('#b1').on('click', onTileClick);
  $('#b2').on('click', onTileClick);
  $('#b3').on('click', onTileClick);
  $('#b4').on('click', onTileClick);
  $('#b5').on('click', onTileClick);
  $('#b6').on('click', onTileClick);
  $('#b7').on('click', onTileClick);
  $('#b8').on('click', onTileClick);
  $('.new-game').on('click', onNewGameClick);
  $('.clear-board').on('click', onClearBoard);
};

module.exports = {
  addBoardHandlers,
};
