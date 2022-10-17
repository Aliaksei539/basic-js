const { NotImplementedError } = require('../extensions/index.js');

// /**
//  * Given matrix where you have to find cats by ears "^^"
//  *
//  * @param {Array<Array>} matrix 
//  * @return {Number} count of cats found
//  *
//  * @example
//  const cats = [
//    [0, 1, '^^'],
//    [0, '^^', 2],
//    ['^^', 1, 2]
//  ]
 
function countCats(count) {
 let sum = 0;
 for (let i = 0; i < count.length; i++) {
    for(let j = 0; j < count[i].length; j++ ){
      if(count[i][j] === '^^') {
        sum += 1;
      }
    }
    return sum;
 }
}

module.exports = {
  countCats
};
