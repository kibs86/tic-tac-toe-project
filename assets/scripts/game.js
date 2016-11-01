'use strict';

const globalJS = require('./global.js');

let tileArray = [];

const switchPlayer = function () {
  console.log('current player is ' + globalJS.globalVars.activePlayer);
  if (globalJS.globalVars.activePlayer === 'x') {
    globalJS.globalVars.activePlayer = 'o';
  } else {
    globalJS.globalVars.activePlayer = 'x';
  }
};

const onTileClick = function () {
  let tileID = '#' + $(this).attr('id');

  // change background of tile
  if (globalJS.globalVars.activePlayer === 'x') {
    $(tileID).addClass('x-background');
  } else {
    $(tileID).addClass('o-background');
  }

  // disable handler
  $(tileID).css("pointer-events", "none");

  // update player
  switchPlayer();

  // find out which player clicked
  // get array index from class of tile clicked
  // put x or o into correct index
  // change background image of tile
  // disable handler
  // increment turn count
  // update player
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
