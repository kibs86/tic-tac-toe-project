'use strict';

const resourceWatcher = require('./resource-watcher-0.1.0.js');
const config = require('./config.js');
const store = require('./store.js');
const app = require('./app.js');
const globalJS = require('./global.js');


const updateBoard = function() {
  let tileID = '#b' + app.cellIndex;
  let tileIndex = app.cellIndex;

  // increase turn count
  globalJS.globalVars.turnCount++;

  console.log("tileID is " + tileID);
  console.log("tileIndex is " + tileIndex);

  // Change background of tile and store owner
//   tileArray = setOwner(tileID, tileIndex);
//   if (globalJS.globalVars.activePlayer === 'x') {
//     $(tileID).attr('data-owner', 'x');
//     tileArray[tileIndex] = 'x';
//   } else {
//     $(tileID).attr('data-owner', 'o');
//     tileArray[tileIndex] = 'o';
//   }
//
//   return tileArray;
//
};


const startWatcher = () => {
  let gameWatcher = resourceWatcher.resourceWatcher(config.host + '/games/' + app.game.id + '/watch', {
        Authorization: 'Token token=' + store.user.token
  });

  gameWatcher.on('change', function (data) {
      console.log(data);
      if (data.game && data.game.cells) {
        const diff = changes => {
          let before = changes[0];
          let after = changes[1];
          for (let i = 0; i < after.length; i++) {
            if (before[i] !== after[i]) {
              return {
                index: i,
                value: after[i],
              };
            }
          }
          return { index: -1, value: '' };
        };

      let cell = diff(data.game.cells);
      app.cellIndex = cell.index;
      app.cellValue = cell.value;
      console.log(cell.index);
      console.log(cell.value);
      updateBoard();
      //$('#watch-index').val(cell.index);
      //$('#watch-value').val(cell.value);
      } else if (data.timeout) { //not an error
        gameWatcher.close();
      }
  });

  gameWatcher.on('error', function (e) {
    console.error('an error has occurred with the stream', e);
  });
};


module.exports = {
  startWatcher,
};
