const { NotImplementedError } = require('../extensions/index.js');


  // Given some integer, find the maximal number you can obtain
  // by deleting exactly one digit of the given number.
 
  @param {Number} n
  @return {Number}
 
  @example
  // const n = 152;
  //  the output should be 
 let m = 1001;
function deleteDigit(n) {
    let newArray;
    let arr = ("" + n).split("").map(Number)
    newArray = arr.sort()
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      let q;
      q = ("" + n).split("").map(Number)
      let myArray = q.indexOf([i])
      if(myArray !== -1){
        q.splice(myArray, 1);
      } return q
    } else if(q[0] <= q[q.length - 1]) {
    let digitArray;
    return digitArray = q.shift()
   } else{
    return digitArray.pop()
   }
  }
} 

module.exports = {
  deleteDigit
};
