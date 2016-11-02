'use strict';

const globalJS = require('./global.js');
const gameEvents = require('./game/events.js');

let tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const switchPlayer = function () {
  console.log('current player is ' + globalJS.globalVars.activePlayer);
  if (globalJS.globalVars.activePlayer === 'x') {
    globalJS.globalVars.activePlayer = 'o';
  } else {
    globalJS.globalVars.activePlayer = 'x';
  }
};

const checkRowWins = function(tileArray) {
  console.log(tileArray);
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

const gameOver = function () {
  // disable all click board item handlers
  $('.board-item').css("pointer-events", "none");

  // enable new game button
  $('.new-game').css("pointer-events", "auto");

  // update game over globalVar
  globalJS.globalVars.gameOver = "true";
};

const onTileClick = function () {
  // find ID and index of tile that was clicked
  let tile = $(this).attr('id');
  let tileID = '#' + tile;
  let tileIndex = tile[tile.length - 1];

  // increment turn count. need to test that this is in the right place
  globalJS.globalVars.turnCount++;

  // change background of tile and store owner
  tileArray = setOwner(tileID, tileIndex);

  // check for a winner - need to get it to print winner in correct location
  if (checkColWins(tileArray) || checkRowWins(tileArray) || checkDiagWins(tileArray)) {
    if (globalJS.globalVars.gameWinner === 'x') {
      // print message to player1's side
      $('.player1-message').text("YOU WON IN " + globalJS.globalVars.turnCount + " TURNS!");
    } else {
      // print message to player2's side
      $('.player2-message').text("YOU WON IN " + globalJS.globalVars.turnCount + " TURNS!");
    }

    gameOver();

  } else if ((globalJS.globalVars.gameWinner === '') && (globalJS.globalVars.turnCount === 9)) {
    // print message to both sides
    console.log(globalJS.globalVars.gameWinner);
    console.log(globalJS.globalVars.turnCount);
    $('.player1-message').text("IT'S A TIE!");
    $('.player2-message').text("IT'S A TIE!");

    gameOver();

  } else {
    // disable handler for just the tile that was clicked
    $(tileID).css("pointer-events", "none");

    // update active player
    switchPlayer();
  }

  // define data and update game state
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

const onClearBoard = function () {
  // reset global variables
  // don't need to reset player login since they'll still be logged in
  globalJS.globalVars.createGameSuccess = false;
  globalJS.globalVars.newestGameID = 0;
  globalJS.globalVars.activePlayer = 'x';
  globalJS.globalVars.gameOver = 'false';
  globalJS.globalVars.gameWinner = '';
  globalJS.globalVars.turnCount = 0;

  // reset player messages
  $('.player1-message').html("PLEASE LOGIN AND <br> CLICK CREATE GAME TO PLAY!");
  $('.player2-message').text("PLEASE JOIN THE GAME TO PLAY!");

  // reset game array
  tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // remove data-owner attributes from board items
  $('[data-owner]').removeAttr('data-owner');
  // tile events should still be disabled - double check this

  // disable new game click event
  $('.new-game').css("pointer-events", "none");
};

const onNewGameClick = function () {
  onClearBoard();
  gameEvents.onCreateGame();
};


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

//module.exports = true;
