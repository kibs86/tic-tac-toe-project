'use strict';

const globalJS = require('./global.js');

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
      //$('.player1-message').text("CONGRATULATIONS! YOU WON IN " + globalJS.globalVars.turnCount + " TURNS!");
      $('.player1-message').text("YOU WON IN " + globalJS.globalVars.turnCount + " TURNS!");
    } else {
      $('.player2-message').html('CONGRATULATIONS!<br>YOU WON IN globalJS.globalVars.turnCount TURNS!');
    }
  }

  // disable handler for tile that was just clicked
  $(tileID).css("pointer-events", "none");

  // update active player
  switchPlayer();

  // find out who won
  // disable all click events if there's a winner
  // update game API
  // new game button
    // global variables, player messages, game array, create game API
};

// win check

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
};

module.exports = {
  addBoardHandlers,
};

//module.exports = true;
